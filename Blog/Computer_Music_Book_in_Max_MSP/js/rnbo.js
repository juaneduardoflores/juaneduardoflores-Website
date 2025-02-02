/*!
 *
 * Copyright (c) 2022 Cycling '74
 *
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * v1.2.3
 *
 */
var root, factory;
(root = this),
  (factory = function () {
    return (() => {
      var __webpack_modules__ = {
          133: (module, __unused_webpack_exports, __webpack_require__) => {
            var Float32Buffer = __webpack_require__(852).Float32Buffer,
              Float64Buffer = __webpack_require__(852).Float64Buffer,
              Float32MultiBuffer = __webpack_require__(852).Float32MultiBuffer,
              Float64MultiBuffer = __webpack_require__(852).Float64MultiBuffer,
              IntBuffer = __webpack_require__(852).IntBuffer,
              UInt8Buffer = __webpack_require__(852).UInt8Buffer,
              ExternalLoaderFactory = __webpack_require__(126).ExternalLoaderFactory;
            let Xoshiro = __webpack_require__(925);
            var patcherSerialKey = 'XX__PatcherSerialKey__XX',
              eventTargetKey = 'XX__EventTargetKey__XX',
              ParameterTypeNumber = 0,
              ParameterTypeBang = 1,
              ParameterTypeList = 2,
              ParameterTypeSignal = 3,
              ParameterTypeCount = 4,
              IOTypeInput = 0,
              IOTypeOutput = 1,
              IOTypeUndefined = 2,
              INVALID_INDEX = Number.MAX_SAFE_INTEGER;
            function rand01() {
              return Math.random();
            }
            function pi01() {
              return Math.PI;
            }
            var rnbo_abs = Math.abs,
              rnbo_fabs = Math.abs,
              rnbo_acos = Math.acos,
              rnbo_acosh = Math.acosh,
              rnbo_asin = Math.asin,
              rnbo_asinh = Math.asinh,
              rnbo_atan = Math.atan,
              rnbo_atan2 = Math.atan2,
              rnbo_atanh = Math.atanh,
              rnbo_cbrt = Math.cbrt,
              rnbo_ceil = Math.ceil,
              rnbo_cos = Math.cos,
              rnbo_cosh = Math.cosh,
              rnbo_exp = Math.exp,
              rnbo_expm1 = Math.expm1,
              rnbo_floor = Math.floor,
              rnbo_fround = Math.round,
              rnbo_imul = Math.imul,
              rnbo_log = Math.log,
              rnbo_log10 = Math.log10,
              rnbo_log1p = Math.log1p,
              rnbo_log2 = Math.log2,
              rnbo_pow = Math.pow,
              rnbo_round = rnbo_fround,
              rnbo_sign = Math.sign,
              rnbo_sin = Math.sin,
              rnbo_sinh = Math.sinh,
              rnbo_sqrt = Math.sqrt,
              rnbo_tan = Math.tan,
              rnbo_tanh = Math.tanh,
              trunc = Math.trunc,
              rnbo_trunc = Math.trunc,
              rnbo_number_max = () => Math.MAX_VALUE,
              rnbo_isnan = isNaN;
            function fixnan(t) {
              return isNaN(t) ? 0 : t;
            }
            function fract(t) {
              return t % 1;
            }
            function fixdenorm(t) {
              return t;
            }
            function isdenorm(t) {
              return !1;
            }
            var fastsin = Math.sin,
              fastcos = Math.cos,
              fastexp = Math.exp,
              fastpow = Math.pow,
              fasttan = Math.tan;
            function nextpoweroftwo(t) {
              return 0 === t ? 1 : (t--, (t |= t >> 1), (t |= t >> 2), (t |= t >> 4), (t |= t >> 8), 1 + (t |= t >> 16));
            }
            var MAX_32BIT_INT = Math.pow(2, 32);
            function uint32_add(t, e) {
              var r = t + e;
              return r >= MAX_32BIT_INT && (r -= MAX_32BIT_INT), Math.trunc(r);
            }
            function uint32_trunc(t) {
              return t >>> 0;
            }
            function uint32_rshift(t, e) {
              return t >>> e;
            }
            function imod(t, e) {
              return (0 | t) % (0 | e);
            }
            function imod_nocast(t, e) {
              return t % e;
            }
            function getArrayValueAtIndex(t, e) {
              return t[e];
            }
            function allocateArray(t, e) {
              return new Array(t);
            }
            function createListCopy(t) {
              return t.slice(0);
            }
            function jsCreateListCopy(t) {
              return createListCopy(t);
            }
            function list() {
              let t = [];
              for (let e = 0; e < arguments.length; e++) {
                let r = arguments[e];
                if (Array.isArray(r)) for (let e = 0; e < r.length; e++) t.push(r[e]);
                else t.push(r);
              }
              return t;
            }
            function resizeSignal(t, e, r) {
              for (var n = t || [], i = e; i < r; i++) n[i] = 0;
              return n;
            }
            function zeroSignal(t, e) {
              t && t.fill(0);
            }
            function fillSignal(t, e, r, n) {
              t && t.fill(r, n);
            }
            function copySignal(t, e, r) {
              for (let n = 0; n < r; n++) t[n] = e[n];
            }
            function containsValue(t) {
              return void 0 !== t;
            }
            function addressOf(t) {
              return t;
            }
            function systemticks() {
              return Date.now();
            }
            function bitwiseFloat(t) {
              var e = new Uint32Array(1);
              return (e[0] = t), new DataView(e.buffer).getFloat32(0, !0);
            }
            function imul(t, e) {
              return Math.imul(t, e);
            }
            var MIDI_StatusByteReceived = 1,
              MIDI_SecondByteReceived = 2,
              MIDI_NoteOff = 3,
              MIDI_NoteOn = 4,
              MIDI_Aftertouch = 5,
              MIDI_CC = 6,
              MIDI_ProgramChange = 7,
              MIDI_ChannelPressure = 8,
              MIDI_PitchBend = 9,
              MIDI_Sysex_Started = 10,
              MIDI_Sysex_Complete = 11,
              MIDI_Generic = 99,
              MIDI_InvalidByte = -1,
              MIDI_NoteOffMask = 128,
              MIDI_NoteOnMask = 144,
              MIDI_AfterTouchMask = 160,
              MIDI_CCMask = 176,
              MIDI_ProgramChangeMask = 192,
              MIDI_ChannelPressureMask = 208,
              MIDI_PitchBendMask = 224,
              MIDI_QuarterFrame = 241,
              MIDI_SongPos = 242,
              MIDI_SongSel = 243,
              MIDI_TuneRequest = 246,
              MIDI_SysexStart = 240,
              MIDI_SysexEnd = 247,
              MIDI_Clock = 248,
              MIDI_Start = 250,
              MIDI_Continue = 251,
              MIDI_Stop = 252,
              MIDI_ActiveSense = 254,
              MIDI_Reset = 255,
              MIDI_CC_Sustain = 64,
              MIDI_CC_Sostenuto = 66,
              MIDI_CC_AllNotesOff = 123,
              MIDI_CC_PressureMSB = 70,
              MIDI_CC_PressureLSB = 102,
              MIDI_CC_TimbreMSB = 74,
              MIDI_CC_TimbreLSB = 106,
              MIDI_NoteState_Off = 0,
              MIDI_NoteState_On = 1,
              MIDI_NoteState_Sustained = 2,
              CLOCKS_PER_SEC = 1;
            function parseMidi(t, e, r) {
              if (240 == e) return MIDI_Sysex_Started;
              if (t == MIDI_Sysex_Started) return 247 == e ? MIDI_Sysex_Complete : e <= 127 ? t : MIDI_InvalidByte;
              if (e > 127) return MIDI_StatusByteReceived;
              var n = 240 & r;
              return t == MIDI_StatusByteReceived
                ? n == MIDI_ProgramChangeMask
                  ? MIDI_ProgramChange
                  : n == MIDI_ChannelPressureMask
                  ? MIDI_ChannelPressure
                  : MIDI_SecondByteReceived
                : t == MIDI_SecondByteReceived
                ? n == MIDI_NoteOffMask || (n == MIDI_NoteOnMask && 0 == e)
                  ? MIDI_NoteOff
                  : n == MIDI_NoteOnMask
                  ? MIDI_NoteOn
                  : n == MIDI_AfterTouchMask
                  ? MIDI_Aftertouch
                  : n == MIDI_CCMask
                  ? MIDI_CC
                  : n == MIDI_PitchBendMask
                  ? MIDI_PitchBend
                  : MIDI_Generic
                : t;
            }
            function getMIDIChannel(t) {
              var e = 240 & t;
              return e >= 128 && e <= 224 ? 15 & t : 0;
            }
            function initDataRef(t, e) {
              var r = {};
              return (
                (r.name = t),
                (r.isValid = !1),
                (r.wantsFillFlag = !1),
                (r.bytesToAllocate = 0),
                (r.channels = 0),
                (r.sampleRate = 0),
                (r.internal = e),
                (r.index = -1),
                (r.wantsFill = function () {
                  return this.wantsFillFlag;
                }),
                (r.setWantsFill = function (t) {
                  this.wantsFillFlag = t;
                }),
                (r.requestSizeInBytes = function (t, e) {
                  (t > this.bytesToAllocate || e) && (this.bytesToAllocate = t);
                }),
                (r.getRequestedSizeInBytes = function () {
                  return this.bytesToAllocate;
                }),
                (r.resetRequestedSizeInByte = function () {
                  this.bytesToAllocate = 0;
                }),
                (r.getSizeInBytes = function () {
                  return this.arrayBuffer.byteLength;
                }),
                (r.hasRequestedSize = function () {
                  return this.bytesToAllocate > 0;
                }),
                (r.isInternal = function () {
                  return this.internal;
                }),
                (r.getIndex = function () {
                  return this.index;
                }),
                (r.setIndex = function (t) {
                  this.index = t;
                }),
                (r.clear = function () {
                  r.arrayBuffer = new ArrayBuffer(0);
                }),
                r.clear(),
                r
              );
            }
            function initMultiRef() {
              var t = { index: 0, current: 0, dataRefs: [], count: 0 };
              for (let e = 0; e < arguments.length; e++) t.dataRefs.push(arguments[e]), t.count++;
              return (
                (t.setCurrent = function (t) {
                  t >= 0 && t < this.count && (this.current = t);
                }),
                (t.getIndex = function () {
                  return this.index;
                }),
                (t.setIndex = function (t) {
                  this.index = t;
                }),
                t
              );
            }
            function updateMultiRef(t, e, r) {
              e.setCurrent && e.getIndex && (e.setCurrent(r), t.getEngine().sendDataRefUpdated(e.getIndex()));
            }
            function updateDataRef(t, e) {
              t.getEngine().sendDataRefUpdated(e.getIndex());
            }
            function FIXEDSIZEARRAYINIT() {
              let t = arguments[0];
              if (void 0 !== t) {
                let e = new Array(t);
                if ((e.fill(0), void 0 !== arguments[1])) {
                  let r = Array.from(arguments);
                  r.splice(0, 1);
                  for (let n = 0; n < t; n++) e[n] = FIXEDSIZEARRAYINIT.apply(null, r);
                }
                return e;
              }
              return new Array();
            }
            function TAG(t) {
              let e = 0;
              for (let r = 0; r < t.length; r++) e = t.charCodeAt(r) + (e << 6) + (e << 16) - e;
              return 0 | e;
            }
            function serializeArrayToList(t, e) {
              return t;
            }
            function deserializeArrayFromList(t, e, r) {}
            function serializeDataRef(t) {
              return t.resetRequestedSizeInByte(), t;
            }
            function _evalSrc(src) {
              var rnboObj;
              return eval(src), rnboObj;
            }
            function getSubState(t, e) {
              return void 0 === t[e] && (t[e] = {}), t[e];
            }
            function getSubStateAt(t, e, r) {
              return void 0 === t[e] && (t[e] = []), void 0 === t[e][r] && (t[e][r] = {}), t[e][r];
            }
            function stateIsEmpty(t) {
              return 0 === Object.keys(t).length;
            }
            function TransportState(t) {
              return t;
            }
            function RNBO_UNUSED() {}
            let xoshiro_reset = Xoshiro.reset,
              xoshiro_next = Xoshiro.next;
            module.exports = {
              deserializeSrc: function (t) {
                return _evalSrc(t);
              },
              deserializeJSON: function (t) {
                var e = t;
                return 'string' == typeof e && (e = { src: t }), _evalSrc(e.src);
              },
              extractOptionsFromJSON: function (t) {
                var e = t;
                return 'string' == typeof e && (e = JSON.parse(t)), e.options ? e.options : {};
              },
              evalFunction(functionAsString) {
                var tmpFunction,
                  functionAsString = 'tmpFunction = ' + functionAsString;
                return eval(functionAsString), tmpFunction;
              },
              nextpoweroftwo,
              ParameterTypeNumber,
              ParameterTypeBang,
              ParameterTypeList,
              ParameterTypeSignal,
              ParameterTypeCount,
              IOTypeInput,
              IOTypeOutput,
              IOTypeUndefined: IOTypeUndefined.length,
              TAG,
            };
          },
          852: (t) => {
            function e() {
              let t = this.dataRef.getSizeInBytes() / this.BASEARRAYVIEW.BYTES_PER_ELEMENT,
                e = this.getChannels();
              return e ? t / e : 0;
            }
            function r(t, e) {
              let r = t * this.BASEARRAYVIEW.BYTES_PER_ELEMENT * e;
              (this.requestedChannels = e), this.dataRef.requestSizeInBytes(r, !1);
            }
            function n(t, e) {
              return this[this.getChannels() * Math.floor(e) + t];
            }
            function i(t, e) {
              const r = this.getChannels();
              return t < 0 || t >= r || e < 0 || e >= this.getSize() ? 0 : this[r * Math.floor(e) + t];
            }
            function s(t, e, r) {
              this[this.getChannels() * Math.floor(e) + t] = r;
            }
            function a(t, e, r) {
              const n = this.getChannels();
              t < 0 || t >= n || e < 0 || e >= this.getSize() || (this[n * Math.floor(e) + t] = r);
            }
            function o() {
              return this.dataRef.channels;
            }
            function u() {
              return this.dataRef.sampleRate;
            }
            function h(t) {
              this.dataRef.sampleRate = t;
            }
            function f() {
              this.dataRef.clear();
            }
            function c(t) {
              if (t !== this.dataRef.channels) {
                let e = this.getSize();
                return this.clear(), (this.dataRef.channels = t), this.setSize(e);
              }
              return this;
            }
            function l() {
              if (
                (this.isAudioBuffer &&
                  this.requestedChannels !== this.getChannels() &&
                  0 !== this.requestedChannels &&
                  (this.getChannels() > 0 && this.setZero(),
                  (this.dataRef.channels = this.requestedChannels),
                  (this.requestedChannels = 0)),
                this.dataRef.bytesToAllocate > 0 &&
                  (this.dataRef.bytesToAllocate !== this.dataRef.getSizeInBytes() || !this.dataRef.isInternallyAllocated))
              ) {
                let t;
                if (this.dataRef.isInternallyAllocated) {
                  let e = Math.min(this.dataRef.arrayBuffer.byteLength, this.dataRef.bytesToAllocate);
                  (e /= this.BASEARRAYVIEW.BYTES_PER_ELEMENT), (t = new this.BASEARRAYVIEW(this.dataRef.arrayBuffer, 0, e));
                }
                (this.dataRef.arrayBuffer = new ArrayBuffer(this.dataRef.bytesToAllocate)), (this.dataRef.isInternallyAllocated = !0);
                let e = new this.BASEARRAYVIEW(this.dataRef.arrayBuffer);
                return (
                  t ? e.set(t) : (this.dataRef.wantsFillFlag = !0), v(e, this.dataRef, this.BASEARRAYVIEW), this.isAudioBuffer && b(e), e
                );
              }
              return this;
            }
            function p(t) {
              let e = this.getChannels();
              return (
                (this.requestedChannels = e),
                this.dataRef.requestSizeInBytes(t * this.BASEARRAYVIEW.BYTES_PER_ELEMENT * e, !0),
                this.allocateIfNeeded()
              );
            }
            function d() {
              this.fill && this.fill(0);
            }
            function g() {
              return this.touched;
            }
            function m(t) {
              this.touched = t;
            }
            function _(t) {
              this.dataRef.setWantsFill(t);
            }
            function y() {
              return this.dataRef.getIndex();
            }
            function v(t, n, i) {
              (t.dataRef = n),
                (t.BASEARRAYVIEW = i),
                (t.getSize = e),
                (t.requestSize = r),
                (t.setSize = p),
                (t.allocateIfNeeded = l),
                (t.setZero = d),
                (t.clear = f),
                (t.getChannels = o),
                (t.getSampleRate = u),
                (t.setWantsFill = _),
                (t.getIndex = y),
                (n.setZero = function () {
                  t.setZero();
                }),
                (t.touched = !1),
                (t.getTouched = g),
                (t.setTouched = m);
            }
            function b(t) {
              (t.getSample = n),
                (t.getSampleSafe = i),
                (t.setSample = s),
                (t.setSampleSafe = a),
                (t.setChannels = c),
                (t.setSampleRate = h),
                (t.isAudioBuffer = !0),
                (t.requestedChannels = 0);
            }
            let I = function (t, e) {
              let r;
              return (r = t.arrayBuffer ? new e(t.arrayBuffer) : {}), v(r, t, e), r;
            };
            (I.prototype = Object.create(null)).constructor = I;
            let w = function (t, e) {
              let r = I.call(this, t, e);
              return b(r), r;
            };
            (w.prototype = Object.create(I)).constructor = w;
            let E = function (t) {
              return w.call(this, t, Float32Array);
            };
            (E.prototype = Object.create(w.prototype)).constructor = E;
            let M = function (t) {
              return w.call(this, t, Float64Array);
            };
            (M.prototype = Object.create(w.prototype)).constructor = M;
            let A = function (t, e) {
              let r = new e(t.dataRefs[t.current]);
              return (
                (r.multiRef = t),
                (r.setCurrent = function (t) {
                  this.multiRef.setCurrent(Math.round(t));
                }),
                (r.getIndex = function () {
                  return this.multiRef.getIndex();
                }),
                r
              );
            };
            (A.prototype = Object.create(null)), (A.constructor = A);
            let B = function (t) {
              return A.call(this, t, E);
            };
            (B.prototype = Object.create(A.prototype)).constructor = B;
            let T = function (t) {
              return A.call(this, t, M);
            };
            (T.prototype = Object.create(A.prototype)).constructor = T;
            let S = function (t) {
              return I.call(this, t, Int32Array);
            };
            (S.prototype = Object.create(I.prototype)).constructor = S;
            let P = function (t) {
              return I.call(this, t, Uint8Array);
            };
            ((P.prototype = Object.create(I.prototype)).constructor = P),
              (t.exports = {
                Float32Buffer: E,
                Float64Buffer: M,
                Float32MultiBuffer: B,
                Float64MultiBuffer: T,
                IntBuffer: S,
                UInt8Buffer: P,
              });
          },
          126: (t) => {
            var e = function () {};
            ((e.prototype = Object.create(null)).constructor = e),
              (e.prototype.setEngineAndPatcher = function () {}),
              (e.prototype.initialize = function () {}),
              (e.prototype.getNumParameters = function () {
                return 0;
              }),
              (e.prototype.setParameterValue = function () {}),
              (e.prototype.prepareToProcess = function () {}),
              (e.prototype.process = function () {}),
              (t.exports = {
                ExternalLoaderFactory: function () {
                  return console.log('WARNING: Externals are not yet supported in Javascript'), new e();
                },
              });
          },
          925: (t) => {
            function e(t, e, r, n) {
              (r[n] = t[e] + 0x9e3779b97f4a7c15n),
                (r[n] = 0xbf58476d1ce4e5b9n * (r[n] ^ (r[n] >> 30n))),
                (r[n] = 0x94d049bb133111ebn * (r[n] ^ (r[n] >> 27n))),
                (r[n] = r[n] ^ (r[n] >> 31n));
            }
            t.exports = {
              reset: function (t, r) {
                let n = new BigUint64Array(1);
                (n[0] = BigInt(Math.trunc(1e6 * t))), e(n, 0, r, 0), e(r, 0, r, 1), e(r, 1, r, 2), e(r, 2, r, 3);
              },
              next: function (t) {
                let e = new BigUint64Array(1),
                  r = new BigUint64Array(1);
                return (
                  (r[0] = t[0] + t[3]),
                  (e[0] = t[1] << 17n),
                  (t[2] ^= t[0]),
                  (t[3] ^= t[1]),
                  (t[1] ^= t[2]),
                  (t[0] ^= t[3]),
                  (t[2] ^= e[0]),
                  (t[3] = (t[3] << 45n) | (t[3] >> 19n)),
                  (r[0] = r[0] >> 11n),
                  2220446049250313e-31 * Number(r[0]) - 1
                );
              },
            };
          },
          766: (t, e) => {
            (e.byteLength = function (t) {
              var e = u(t),
                r = e[0],
                n = e[1];
              return (3 * (r + n)) / 4 - n;
            }),
              (e.toByteArray = function (t) {
                var e,
                  r,
                  s = u(t),
                  a = s[0],
                  o = s[1],
                  h = new i(
                    (function (t, e, r) {
                      return (3 * (e + r)) / 4 - r;
                    })(0, a, o)
                  ),
                  f = 0,
                  c = o > 0 ? a - 4 : a;
                for (r = 0; r < c; r += 4)
                  (e =
                    (n[t.charCodeAt(r)] << 18) | (n[t.charCodeAt(r + 1)] << 12) | (n[t.charCodeAt(r + 2)] << 6) | n[t.charCodeAt(r + 3)]),
                    (h[f++] = (e >> 16) & 255),
                    (h[f++] = (e >> 8) & 255),
                    (h[f++] = 255 & e);
                return (
                  2 === o && ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (h[f++] = 255 & e)),
                  1 === o &&
                    ((e = (n[t.charCodeAt(r)] << 10) | (n[t.charCodeAt(r + 1)] << 4) | (n[t.charCodeAt(r + 2)] >> 2)),
                    (h[f++] = (e >> 8) & 255),
                    (h[f++] = 255 & e)),
                  h
                );
              }),
              (e.fromByteArray = function (t) {
                for (var e, n = t.length, i = n % 3, s = [], a = 16383, o = 0, u = n - i; o < u; o += a)
                  s.push(h(t, o, o + a > u ? u : o + a));
                return (
                  1 === i
                    ? ((e = t[n - 1]), s.push(r[e >> 2] + r[(e << 4) & 63] + '=='))
                    : 2 === i && ((e = (t[n - 2] << 8) + t[n - 1]), s.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + '=')),
                  s.join('')
                );
              });
            for (
              var r = [],
                n = [],
                i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
                s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                a = 0,
                o = s.length;
              a < o;
              ++a
            )
              (r[a] = s[a]), (n[s.charCodeAt(a)] = a);
            function u(t) {
              var e = t.length;
              if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
              var r = t.indexOf('=');
              return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
            }
            function h(t, e, n) {
              for (var i, s, a = [], o = e; o < n; o += 3)
                (i = ((t[o] << 16) & 16711680) + ((t[o + 1] << 8) & 65280) + (255 & t[o + 2])),
                  a.push(r[((s = i) >> 18) & 63] + r[(s >> 12) & 63] + r[(s >> 6) & 63] + r[63 & s]);
              return a.join('');
            }
            (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
          },
          834: (t, e, r) => {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            const n = r(766),
              i = r(181),
              s = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
            (e.Buffer = u),
              (e.SlowBuffer = function (t) {
                return +t != t && (t = 0), u.alloc(+t);
              }),
              (e.INSPECT_MAX_BYTES = 50);
            const a = 2147483647;
            function o(t) {
              if (t > a) throw new RangeError('The value "' + t + '" is invalid for option "size"');
              const e = new Uint8Array(t);
              return Object.setPrototypeOf(e, u.prototype), e;
            }
            function u(t, e, r) {
              if ('number' == typeof t) {
                if ('string' == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                return c(t);
              }
              return h(t, e, r);
            }
            function h(t, e, r) {
              if ('string' == typeof t)
                return (function (t, e) {
                  if ((('string' == typeof e && '' !== e) || (e = 'utf8'), !u.isEncoding(e))) throw new TypeError('Unknown encoding: ' + e);
                  const r = 0 | g(t, e);
                  let n = o(r);
                  const i = n.write(t, e);
                  return i !== r && (n = n.slice(0, i)), n;
                })(t, e);
              if (ArrayBuffer.isView(t))
                return (function (t) {
                  if (Y(t, Uint8Array)) {
                    const e = new Uint8Array(t);
                    return p(e.buffer, e.byteOffset, e.byteLength);
                  }
                  return l(t);
                })(t);
              if (null == t)
                throw new TypeError(
                  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                    typeof t
                );
              if (Y(t, ArrayBuffer) || (t && Y(t.buffer, ArrayBuffer))) return p(t, e, r);
              if ('undefined' != typeof SharedArrayBuffer && (Y(t, SharedArrayBuffer) || (t && Y(t.buffer, SharedArrayBuffer))))
                return p(t, e, r);
              if ('number' == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
              const n = t.valueOf && t.valueOf();
              if (null != n && n !== t) return u.from(n, e, r);
              const i = (function (t) {
                if (u.isBuffer(t)) {
                  const e = 0 | d(t.length),
                    r = o(e);
                  return 0 === r.length || t.copy(r, 0, 0, e), r;
                }
                return void 0 !== t.length
                  ? 'number' != typeof t.length || Z(t.length)
                    ? o(0)
                    : l(t)
                  : 'Buffer' === t.type && Array.isArray(t.data)
                  ? l(t.data)
                  : void 0;
              })(t);
              if (i) return i;
              if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof t[Symbol.toPrimitive])
                return u.from(t[Symbol.toPrimitive]('string'), e, r);
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t
              );
            }
            function f(t) {
              if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
              if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            }
            function c(t) {
              return f(t), o(t < 0 ? 0 : 0 | d(t));
            }
            function l(t) {
              const e = t.length < 0 ? 0 : 0 | d(t.length),
                r = o(e);
              for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
              return r;
            }
            function p(t, e, r) {
              if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
              if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
              let n;
              return (
                (n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r)),
                Object.setPrototypeOf(n, u.prototype),
                n
              );
            }
            function d(t) {
              if (t >= a) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + a.toString(16) + ' bytes');
              return 0 | t;
            }
            function g(t, e) {
              if (u.isBuffer(t)) return t.length;
              if (ArrayBuffer.isView(t) || Y(t, ArrayBuffer)) return t.byteLength;
              if ('string' != typeof t)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
              const r = t.length,
                n = arguments.length > 2 && !0 === arguments[2];
              if (!n && 0 === r) return 0;
              let i = !1;
              for (;;)
                switch (e) {
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return r;
                  case 'utf8':
                  case 'utf-8':
                    return W(t).length;
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 2 * r;
                  case 'hex':
                    return r >>> 1;
                  case 'base64':
                    return G(t).length;
                  default:
                    if (i) return n ? -1 : W(t).length;
                    (e = ('' + e).toLowerCase()), (i = !0);
                }
            }
            function m(t, e, r) {
              let n = !1;
              if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
              if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return '';
              if ((r >>>= 0) <= (e >>>= 0)) return '';
              for (t || (t = 'utf8'); ; )
                switch (t) {
                  case 'hex':
                    return R(this, e, r);
                  case 'utf8':
                  case 'utf-8':
                    return B(this, e, r);
                  case 'ascii':
                    return S(this, e, r);
                  case 'latin1':
                  case 'binary':
                    return P(this, e, r);
                  case 'base64':
                    return A(this, e, r);
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return D(this, e, r);
                  default:
                    if (n) throw new TypeError('Unknown encoding: ' + t);
                    (t = (t + '').toLowerCase()), (n = !0);
                }
            }
            function _(t, e, r) {
              const n = t[e];
              (t[e] = t[r]), (t[r] = n);
            }
            function y(t, e, r, n, i) {
              if (0 === t.length) return -1;
              if (
                ('string' == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
                Z((r = +r)) && (r = i ? 0 : t.length - 1),
                r < 0 && (r = t.length + r),
                r >= t.length)
              ) {
                if (i) return -1;
                r = t.length - 1;
              } else if (r < 0) {
                if (!i) return -1;
                r = 0;
              }
              if (('string' == typeof e && (e = u.from(e, n)), u.isBuffer(e))) return 0 === e.length ? -1 : v(t, e, r, n, i);
              if ('number' == typeof e)
                return (
                  (e &= 255),
                  'function' == typeof Uint8Array.prototype.indexOf
                    ? i
                      ? Uint8Array.prototype.indexOf.call(t, e, r)
                      : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                    : v(t, [e], r, n, i)
                );
              throw new TypeError('val must be string, number or Buffer');
            }
            function v(t, e, r, n, i) {
              let s,
                a = 1,
                o = t.length,
                u = e.length;
              if (void 0 !== n && ('ucs2' === (n = String(n).toLowerCase()) || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                (a = 2), (o /= 2), (u /= 2), (r /= 2);
              }
              function h(t, e) {
                return 1 === a ? t[e] : t.readUInt16BE(e * a);
              }
              if (i) {
                let n = -1;
                for (s = r; s < o; s++)
                  if (h(t, s) === h(e, -1 === n ? 0 : s - n)) {
                    if ((-1 === n && (n = s), s - n + 1 === u)) return n * a;
                  } else -1 !== n && (s -= s - n), (n = -1);
              } else
                for (r + u > o && (r = o - u), s = r; s >= 0; s--) {
                  let r = !0;
                  for (let n = 0; n < u; n++)
                    if (h(t, s + n) !== h(e, n)) {
                      r = !1;
                      break;
                    }
                  if (r) return s;
                }
              return -1;
            }
            function b(t, e, r, n) {
              r = Number(r) || 0;
              const i = t.length - r;
              n ? (n = Number(n)) > i && (n = i) : (n = i);
              const s = e.length;
              let a;
              for (n > s / 2 && (n = s / 2), a = 0; a < n; ++a) {
                const n = parseInt(e.substr(2 * a, 2), 16);
                if (Z(n)) return a;
                t[r + a] = n;
              }
              return a;
            }
            function I(t, e, r, n) {
              return K(W(e, t.length - r), t, r, n);
            }
            function w(t, e, r, n) {
              return K(
                (function (t) {
                  const e = [];
                  for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                  return e;
                })(e),
                t,
                r,
                n
              );
            }
            function E(t, e, r, n) {
              return K(G(e), t, r, n);
            }
            function M(t, e, r, n) {
              return K(
                (function (t, e) {
                  let r, n, i;
                  const s = [];
                  for (let a = 0; a < t.length && !((e -= 2) < 0); ++a)
                    (r = t.charCodeAt(a)), (n = r >> 8), (i = r % 256), s.push(i), s.push(n);
                  return s;
                })(e, t.length - r),
                t,
                r,
                n
              );
            }
            function A(t, e, r) {
              return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
            }
            function B(t, e, r) {
              r = Math.min(t.length, r);
              const n = [];
              let i = e;
              for (; i < r; ) {
                const e = t[i];
                let s = null,
                  a = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                if (i + a <= r) {
                  let r, n, o, u;
                  switch (a) {
                    case 1:
                      e < 128 && (s = e);
                      break;
                    case 2:
                      (r = t[i + 1]), 128 == (192 & r) && ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (s = u));
                      break;
                    case 3:
                      (r = t[i + 1]),
                        (n = t[i + 2]),
                        128 == (192 & r) &&
                          128 == (192 & n) &&
                          ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)), u > 2047 && (u < 55296 || u > 57343) && (s = u));
                      break;
                    case 4:
                      (r = t[i + 1]),
                        (n = t[i + 2]),
                        (o = t[i + 3]),
                        128 == (192 & r) &&
                          128 == (192 & n) &&
                          128 == (192 & o) &&
                          ((u = ((15 & e) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & o)), u > 65535 && u < 1114112 && (s = u));
                  }
                }
                null === s
                  ? ((s = 65533), (a = 1))
                  : s > 65535 && ((s -= 65536), n.push(((s >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))),
                  n.push(s),
                  (i += a);
              }
              return (function (t) {
                const e = t.length;
                if (e <= T) return String.fromCharCode.apply(String, t);
                let r = '',
                  n = 0;
                for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += T)));
                return r;
              })(n);
            }
            (e.kMaxLength = a),
              (u.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  const t = new Uint8Array(1),
                    e = {
                      foo: function () {
                        return 42;
                      },
                    };
                  return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
                } catch (t) {
                  return !1;
                }
              })()),
              u.TYPED_ARRAY_SUPPORT ||
                'undefined' == typeof console ||
                'function' != typeof console.error ||
                console.error(
                  'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                ),
              Object.defineProperty(u.prototype, 'parent', {
                enumerable: !0,
                get: function () {
                  if (u.isBuffer(this)) return this.buffer;
                },
              }),
              Object.defineProperty(u.prototype, 'offset', {
                enumerable: !0,
                get: function () {
                  if (u.isBuffer(this)) return this.byteOffset;
                },
              }),
              (u.poolSize = 8192),
              (u.from = function (t, e, r) {
                return h(t, e, r);
              }),
              Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
              Object.setPrototypeOf(u, Uint8Array),
              (u.alloc = function (t, e, r) {
                return (function (t, e, r) {
                  return f(t), t <= 0 ? o(t) : void 0 !== e ? ('string' == typeof r ? o(t).fill(e, r) : o(t).fill(e)) : o(t);
                })(t, e, r);
              }),
              (u.allocUnsafe = function (t) {
                return c(t);
              }),
              (u.allocUnsafeSlow = function (t) {
                return c(t);
              }),
              (u.isBuffer = function (t) {
                return null != t && !0 === t.t && t !== u.prototype;
              }),
              (u.compare = function (t, e) {
                if (
                  (Y(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
                  Y(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
                  !u.isBuffer(t) || !u.isBuffer(e))
                )
                  throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                  n = e.length;
                for (let i = 0, s = Math.min(r, n); i < s; ++i)
                  if (t[i] !== e[i]) {
                    (r = t[i]), (n = e[i]);
                    break;
                  }
                return r < n ? -1 : n < r ? 1 : 0;
              }),
              (u.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return !0;
                  default:
                    return !1;
                }
              }),
              (u.concat = function (t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                let r;
                if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const n = u.allocUnsafe(e);
                let i = 0;
                for (r = 0; r < t.length; ++r) {
                  let e = t[r];
                  if (Y(e, Uint8Array))
                    i + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i);
                  else {
                    if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    e.copy(n, i);
                  }
                  i += e.length;
                }
                return n;
              }),
              (u.byteLength = g),
              (u.prototype.t = !0),
              (u.prototype.swap16 = function () {
                const t = this.length;
                if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
                for (let e = 0; e < t; e += 2) _(this, e, e + 1);
                return this;
              }),
              (u.prototype.swap32 = function () {
                const t = this.length;
                if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
                for (let e = 0; e < t; e += 4) _(this, e, e + 3), _(this, e + 1, e + 2);
                return this;
              }),
              (u.prototype.swap64 = function () {
                const t = this.length;
                if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
                for (let e = 0; e < t; e += 8) _(this, e, e + 7), _(this, e + 1, e + 6), _(this, e + 2, e + 5), _(this, e + 3, e + 4);
                return this;
              }),
              (u.prototype.toString = function () {
                const t = this.length;
                return 0 === t ? '' : 0 === arguments.length ? B(this, 0, t) : m.apply(this, arguments);
              }),
              (u.prototype.toLocaleString = u.prototype.toString),
              (u.prototype.equals = function (t) {
                if (!u.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
                return this === t || 0 === u.compare(this, t);
              }),
              (u.prototype.inspect = function () {
                let t = '';
                const r = e.INSPECT_MAX_BYTES;
                return (
                  (t = this.toString('hex', 0, r)
                    .replace(/(.{2})/g, '$1 ')
                    .trim()),
                  this.length > r && (t += ' ... '),
                  '<Buffer ' + t + '>'
                );
              }),
              s && (u.prototype[s] = u.prototype.inspect),
              (u.prototype.compare = function (t, e, r, n, i) {
                if ((Y(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)))
                  throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (
                  (void 0 === e && (e = 0),
                  void 0 === r && (r = t ? t.length : 0),
                  void 0 === n && (n = 0),
                  void 0 === i && (i = this.length),
                  e < 0 || r > t.length || n < 0 || i > this.length)
                )
                  throw new RangeError('out of range index');
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                let s = (i >>>= 0) - (n >>>= 0),
                  a = (r >>>= 0) - (e >>>= 0);
                const o = Math.min(s, a),
                  h = this.slice(n, i),
                  f = t.slice(e, r);
                for (let t = 0; t < o; ++t)
                  if (h[t] !== f[t]) {
                    (s = h[t]), (a = f[t]);
                    break;
                  }
                return s < a ? -1 : a < s ? 1 : 0;
              }),
              (u.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r);
              }),
              (u.prototype.indexOf = function (t, e, r) {
                return y(this, t, e, r, !0);
              }),
              (u.prototype.lastIndexOf = function (t, e, r) {
                return y(this, t, e, r, !1);
              }),
              (u.prototype.write = function (t, e, r, n) {
                if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0);
                else if (void 0 === r && 'string' == typeof e) (n = e), (r = this.length), (e = 0);
                else {
                  if (!isFinite(e)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                  (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = 'utf8')) : ((n = r), (r = void 0));
                }
                const i = this.length - e;
                if (((void 0 === r || r > i) && (r = i), (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
                  throw new RangeError('Attempt to write outside buffer bounds');
                n || (n = 'utf8');
                let s = !1;
                for (;;)
                  switch (n) {
                    case 'hex':
                      return b(this, t, e, r);
                    case 'utf8':
                    case 'utf-8':
                      return I(this, t, e, r);
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                      return w(this, t, e, r);
                    case 'base64':
                      return E(this, t, e, r);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return M(this, t, e, r);
                    default:
                      if (s) throw new TypeError('Unknown encoding: ' + n);
                      (n = ('' + n).toLowerCase()), (s = !0);
                  }
              }),
              (u.prototype.toJSON = function () {
                return { type: 'Buffer', data: Array.prototype.slice.call(this.i || this, 0) };
              });
            const T = 4096;
            function S(t, e, r) {
              let n = '';
              r = Math.min(t.length, r);
              for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
              return n;
            }
            function P(t, e, r) {
              let n = '';
              r = Math.min(t.length, r);
              for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
              return n;
            }
            function R(t, e, r) {
              const n = t.length;
              (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
              let i = '';
              for (let n = e; n < r; ++n) i += H[t[n]];
              return i;
            }
            function D(t, e, r) {
              const n = t.slice(e, r);
              let i = '';
              for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
              return i;
            }
            function O(t, e, r) {
              if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
              if (t + e > r) throw new RangeError('Trying to access beyond buffer length');
            }
            function C(t, e, r, n, i, s) {
              if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
              if (r + n > t.length) throw new RangeError('Index out of range');
            }
            function N(t, e, r, n, i) {
              X(e, n, i, t, r, 7);
              let s = Number(e & BigInt(4294967295));
              (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s);
              let a = Number((e >> BigInt(32)) & BigInt(4294967295));
              return (t[r++] = a), (a >>= 8), (t[r++] = a), (a >>= 8), (t[r++] = a), (a >>= 8), (t[r++] = a), r;
            }
            function k(t, e, r, n, i) {
              X(e, n, i, t, r, 7);
              let s = Number(e & BigInt(4294967295));
              (t[r + 7] = s), (s >>= 8), (t[r + 6] = s), (s >>= 8), (t[r + 5] = s), (s >>= 8), (t[r + 4] = s);
              let a = Number((e >> BigInt(32)) & BigInt(4294967295));
              return (t[r + 3] = a), (a >>= 8), (t[r + 2] = a), (a >>= 8), (t[r + 1] = a), (a >>= 8), (t[r] = a), r + 8;
            }
            function x(t, e, r, n, i, s) {
              if (r + n > t.length) throw new RangeError('Index out of range');
              if (r < 0) throw new RangeError('Index out of range');
            }
            function U(t, e, r, n, s) {
              return (e = +e), (r >>>= 0), s || x(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
            }
            function j(t, e, r, n, s) {
              return (e = +e), (r >>>= 0), s || x(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
            }
            (u.prototype.slice = function (t, e) {
              const r = this.length;
              (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                e < t && (e = t);
              const n = this.subarray(t, e);
              return Object.setPrototypeOf(n, u.prototype), n;
            }),
              (u.prototype.readUintLE = u.prototype.readUIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                let n = this[t],
                  i = 1,
                  s = 0;
                for (; ++s < e && (i *= 256); ) n += this[t + s] * i;
                return n;
              }),
              (u.prototype.readUintBE = u.prototype.readUIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                let n = this[t + --e],
                  i = 1;
                for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
                return n;
              }),
              (u.prototype.readUint8 = u.prototype.readUInt8 = function (t, e) {
                return (t >>>= 0), e || O(t, 1, this.length), this[t];
              }),
              (u.prototype.readUint16LE = u.prototype.readUInt16LE = function (t, e) {
                return (t >>>= 0), e || O(t, 2, this.length), this[t] | (this[t + 1] << 8);
              }),
              (u.prototype.readUint16BE = u.prototype.readUInt16BE = function (t, e) {
                return (t >>>= 0), e || O(t, 2, this.length), (this[t] << 8) | this[t + 1];
              }),
              (u.prototype.readUint32LE = u.prototype.readUInt32LE = function (t, e) {
                return (t >>>= 0), e || O(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
              }),
              (u.prototype.readUint32BE = u.prototype.readUInt32BE = function (t, e) {
                return (t >>>= 0), e || O(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
              }),
              (u.prototype.readBigUInt64LE = J(function (t) {
                V((t >>>= 0), 'offset');
                const e = this[t],
                  r = this[t + 7];
                (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
                const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                  i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(n) + (BigInt(i) << BigInt(32));
              })),
              (u.prototype.readBigUInt64BE = J(function (t) {
                V((t >>>= 0), 'offset');
                const e = this[t],
                  r = this[t + 7];
                (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
                const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                  i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(i);
              })),
              (u.prototype.readIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                let n = this[t],
                  i = 1,
                  s = 0;
                for (; ++s < e && (i *= 256); ) n += this[t + s] * i;
                return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
              }),
              (u.prototype.readIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                let n = e,
                  i = 1,
                  s = this[t + --n];
                for (; n > 0 && (i *= 256); ) s += this[t + --n] * i;
                return (i *= 128), s >= i && (s -= Math.pow(2, 8 * e)), s;
              }),
              (u.prototype.readInt8 = function (t, e) {
                return (t >>>= 0), e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
              }),
              (u.prototype.readInt16LE = function (t, e) {
                (t >>>= 0), e || O(t, 2, this.length);
                const r = this[t] | (this[t + 1] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (u.prototype.readInt16BE = function (t, e) {
                (t >>>= 0), e || O(t, 2, this.length);
                const r = this[t + 1] | (this[t] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (u.prototype.readInt32LE = function (t, e) {
                return (t >>>= 0), e || O(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
              }),
              (u.prototype.readInt32BE = function (t, e) {
                return (t >>>= 0), e || O(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
              }),
              (u.prototype.readBigInt64LE = J(function (t) {
                V((t >>>= 0), 'offset');
                const e = this[t],
                  r = this[t + 7];
                (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
                const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24);
              })),
              (u.prototype.readBigInt64BE = J(function (t) {
                V((t >>>= 0), 'offset');
                const e = this[t],
                  r = this[t + 7];
                (void 0 !== e && void 0 !== r) || q(t, this.length - 8);
                const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r);
              })),
              (u.prototype.readFloatLE = function (t, e) {
                return (t >>>= 0), e || O(t, 4, this.length), i.read(this, t, !0, 23, 4);
              }),
              (u.prototype.readFloatBE = function (t, e) {
                return (t >>>= 0), e || O(t, 4, this.length), i.read(this, t, !1, 23, 4);
              }),
              (u.prototype.readDoubleLE = function (t, e) {
                return (t >>>= 0), e || O(t, 8, this.length), i.read(this, t, !0, 52, 8);
              }),
              (u.prototype.readDoubleBE = function (t, e) {
                return (t >>>= 0), e || O(t, 8, this.length), i.read(this, t, !1, 52, 8);
              }),
              (u.prototype.writeUintLE = u.prototype.writeUIntLE = function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = 1,
                  s = 0;
                for (this[e] = 255 & t; ++s < r && (i *= 256); ) this[e + s] = (t / i) & 255;
                return e + r;
              }),
              (u.prototype.writeUintBE = u.prototype.writeUIntBE = function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = r - 1,
                  s = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); ) this[e + i] = (t / s) & 255;
                return e + r;
              }),
              (u.prototype.writeUint8 = u.prototype.writeUInt8 = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || C(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
              }),
              (u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || C(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
              }),
              (u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || C(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
              }),
              (u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
              (u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (u.prototype.writeBigUInt64LE = J(function (t, e = 0) {
                return N(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
              })),
              (u.prototype.writeBigUInt64BE = J(function (t, e = 0) {
                return k(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
              })),
              (u.prototype.writeIntLE = function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  const n = Math.pow(2, 8 * r - 1);
                  C(this, t, e, r, n - 1, -n);
                }
                let i = 0,
                  s = 1,
                  a = 0;
                for (this[e] = 255 & t; ++i < r && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), (this[e + i] = (((t / s) >> 0) - a) & 255);
                return e + r;
              }),
              (u.prototype.writeIntBE = function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  const n = Math.pow(2, 8 * r - 1);
                  C(this, t, e, r, n - 1, -n);
                }
                let i = r - 1,
                  s = 1,
                  a = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), (this[e + i] = (((t / s) >> 0) - a) & 255);
                return e + r;
              }),
              (u.prototype.writeInt8 = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || C(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
              }),
              (u.prototype.writeInt16LE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || C(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
              }),
              (u.prototype.writeInt16BE = function (t, e, r) {
                return (t = +t), (e >>>= 0), r || C(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
              }),
              (u.prototype.writeInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24),
                  e + 4
                );
              }),
              (u.prototype.writeInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 2147483647, -2147483648),
                  t < 0 && (t = 4294967295 + t + 1),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (u.prototype.writeBigInt64LE = J(function (t, e = 0) {
                return N(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
              })),
              (u.prototype.writeBigInt64BE = J(function (t, e = 0) {
                return k(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
              })),
              (u.prototype.writeFloatLE = function (t, e, r) {
                return U(this, t, e, !0, r);
              }),
              (u.prototype.writeFloatBE = function (t, e, r) {
                return U(this, t, e, !1, r);
              }),
              (u.prototype.writeDoubleLE = function (t, e, r) {
                return j(this, t, e, !0, r);
              }),
              (u.prototype.writeDoubleBE = function (t, e, r) {
                return j(this, t, e, !1, r);
              }),
              (u.prototype.copy = function (t, e, r, n) {
                if (!u.isBuffer(t)) throw new TypeError('argument should be a Buffer');
                if (
                  (r || (r = 0),
                  n || 0 === n || (n = this.length),
                  e >= t.length && (e = t.length),
                  e || (e = 0),
                  n > 0 && n < r && (n = r),
                  n === r)
                )
                  return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError('targetStart out of bounds');
                if (r < 0 || r >= this.length) throw new RangeError('Index out of range');
                if (n < 0) throw new RangeError('sourceEnd out of bounds');
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                const i = n - r;
                return (
                  this === t && 'function' == typeof Uint8Array.prototype.copyWithin
                    ? this.copyWithin(e, r, n)
                    : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
                  i
                );
              }),
              (u.prototype.fill = function (t, e, r, n) {
                if ('string' == typeof t) {
                  if (
                    ('string' == typeof e ? ((n = e), (e = 0), (r = this.length)) : 'string' == typeof r && ((n = r), (r = this.length)),
                    void 0 !== n && 'string' != typeof n)
                  )
                    throw new TypeError('encoding must be a string');
                  if ('string' == typeof n && !u.isEncoding(n)) throw new TypeError('Unknown encoding: ' + n);
                  if (1 === t.length) {
                    const e = t.charCodeAt(0);
                    (('utf8' === n && e < 128) || 'latin1' === n) && (t = e);
                  }
                } else 'number' == typeof t ? (t &= 255) : 'boolean' == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError('Out of range index');
                if (r <= e) return this;
                let i;
                if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), 'number' == typeof t))
                  for (i = e; i < r; ++i) this[i] = t;
                else {
                  const s = u.isBuffer(t) ? t : u.from(t, n),
                    a = s.length;
                  if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                  for (i = 0; i < r - e; ++i) this[i + e] = s[i % a];
                }
                return this;
              });
            const z = {};
            function F(t, e, r) {
              z[t] = class extends r {
                constructor() {
                  super(),
                    Object.defineProperty(this, 'message', { value: e.apply(this, arguments), writable: !0, configurable: !0 }),
                    (this.name = `${this.name} [${t}]`),
                    this.stack,
                    delete this.name;
                }
                get code() {
                  return t;
                }
                set code(t) {
                  Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: t, writable: !0 });
                }
                toString() {
                  return `${this.name} [${t}]: ${this.message}`;
                }
              };
            }
            function L(t) {
              let e = '',
                r = t.length;
              const n = '-' === t[0] ? 1 : 0;
              for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
              return `${t.slice(0, r)}${e}`;
            }
            function X(t, e, r, n, i, s) {
              if (t > r || t < e) {
                const n = 'bigint' == typeof e ? 'n' : '';
                let i;
                throw (
                  ((i =
                    s > 3
                      ? 0 === e || e === BigInt(0)
                        ? `>= 0${n} and < 2${n} ** ${8 * (s + 1)}${n}`
                        : `>= -(2${n} ** ${8 * (s + 1) - 1}${n}) and < 2 ** ${8 * (s + 1) - 1}${n}`
                      : `>= ${e}${n} and <= ${r}${n}`),
                  new z.ERR_OUT_OF_RANGE('value', i, t))
                );
              }
              !(function (t, e, r) {
                V(e, 'offset'), (void 0 !== t[e] && void 0 !== t[e + r]) || q(e, t.length - (r + 1));
              })(n, i, s);
            }
            function V(t, e) {
              if ('number' != typeof t) throw new z.ERR_INVALID_ARG_TYPE(e, 'number', t);
            }
            function q(t, e, r) {
              if (Math.floor(t) !== t) throw (V(t, r), new z.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', t));
              if (e < 0) throw new z.ERR_BUFFER_OUT_OF_BOUNDS();
              throw new z.ERR_OUT_OF_RANGE(r || 'offset', `>= ${r ? 1 : 0} and <= ${e}`, t);
            }
            F(
              'ERR_BUFFER_OUT_OF_BOUNDS',
              function (t) {
                return t ? `${t} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
              },
              RangeError
            ),
              F(
                'ERR_INVALID_ARG_TYPE',
                function (t, e) {
                  return `The "${t}" argument must be of type number. Received type ${typeof e}`;
                },
                TypeError
              ),
              F(
                'ERR_OUT_OF_RANGE',
                function (t, e, r) {
                  let n = `The value of "${t}" is out of range.`,
                    i = r;
                  return (
                    Number.isInteger(r) && Math.abs(r) > 2 ** 32
                      ? (i = L(String(r)))
                      : 'bigint' == typeof r &&
                        ((i = String(r)), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = L(i)), (i += 'n')),
                    (n += ` It must be ${e}. Received ${i}`),
                    n
                  );
                },
                RangeError
              );
            const $ = /[^+/0-9A-Za-z-_]/g;
            function W(t, e) {
              let r;
              e = e || 1 / 0;
              const n = t.length;
              let i = null;
              const s = [];
              for (let a = 0; a < n; ++a) {
                if (((r = t.charCodeAt(a)), r > 55295 && r < 57344)) {
                  if (!i) {
                    if (r > 56319) {
                      (e -= 3) > -1 && s.push(239, 191, 189);
                      continue;
                    }
                    if (a + 1 === n) {
                      (e -= 3) > -1 && s.push(239, 191, 189);
                      continue;
                    }
                    i = r;
                    continue;
                  }
                  if (r < 56320) {
                    (e -= 3) > -1 && s.push(239, 191, 189), (i = r);
                    continue;
                  }
                  r = 65536 + (((i - 55296) << 10) | (r - 56320));
                } else i && (e -= 3) > -1 && s.push(239, 191, 189);
                if (((i = null), r < 128)) {
                  if ((e -= 1) < 0) break;
                  s.push(r);
                } else if (r < 2048) {
                  if ((e -= 2) < 0) break;
                  s.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((e -= 3) < 0) break;
                  s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                } else {
                  if (!(r < 1114112)) throw new Error('Invalid code point');
                  if ((e -= 4) < 0) break;
                  s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                }
              }
              return s;
            }
            function G(t) {
              return n.toByteArray(
                (function (t) {
                  if ((t = (t = t.split('=')[0]).trim().replace($, '')).length < 2) return '';
                  for (; t.length % 4 != 0; ) t += '=';
                  return t;
                })(t)
              );
            }
            function K(t, e, r, n) {
              let i;
              for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
              return i;
            }
            function Y(t, e) {
              return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
            }
            function Z(t) {
              return t != t;
            }
            const H = (function () {
              const t = '0123456789abcdef',
                e = new Array(256);
              for (let r = 0; r < 16; ++r) {
                const n = 16 * r;
                for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
              }
              return e;
            })();
            function J(t) {
              return 'undefined' == typeof BigInt ? Q : t;
            }
            function Q() {
              throw new Error('BigInt not supported');
            }
          },
          181: (t, e) => {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            (e.read = function (t, e, r, n, i) {
              var s,
                a,
                o = 8 * i - n - 1,
                u = (1 << o) - 1,
                h = u >> 1,
                f = -7,
                c = r ? i - 1 : 0,
                l = r ? -1 : 1,
                p = t[e + c];
              for (c += l, s = p & ((1 << -f) - 1), p >>= -f, f += o; f > 0; s = 256 * s + t[e + c], c += l, f -= 8);
              for (a = s & ((1 << -f) - 1), s >>= -f, f += n; f > 0; a = 256 * a + t[e + c], c += l, f -= 8);
              if (0 === s) s = 1 - h;
              else {
                if (s === u) return a ? NaN : (1 / 0) * (p ? -1 : 1);
                (a += Math.pow(2, n)), (s -= h);
              }
              return (p ? -1 : 1) * a * Math.pow(2, s - n);
            }),
              (e.write = function (t, e, r, n, i, s) {
                var a,
                  o,
                  u,
                  h = 8 * s - i - 1,
                  f = (1 << h) - 1,
                  c = f >> 1,
                  l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  p = n ? 0 : s - 1,
                  d = n ? 1 : -1,
                  g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                for (
                  e = Math.abs(e),
                    isNaN(e) || e === 1 / 0
                      ? ((o = isNaN(e) ? 1 : 0), (a = f))
                      : ((a = Math.floor(Math.log(e) / Math.LN2)),
                        e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                        (e += a + c >= 1 ? l / u : l * Math.pow(2, 1 - c)) * u >= 2 && (a++, (u /= 2)),
                        a + c >= f
                          ? ((o = 0), (a = f))
                          : a + c >= 1
                          ? ((o = (e * u - 1) * Math.pow(2, i)), (a += c))
                          : ((o = e * Math.pow(2, c - 1) * Math.pow(2, i)), (a = 0)));
                  i >= 8;
                  t[r + p] = 255 & o, p += d, o /= 256, i -= 8
                );
                for (a = (a << i) | o, h += i; h > 0; t[r + p] = 255 & a, p += d, a /= 256, h -= 8);
                t[r + p - d] |= 128 * g;
              });
          },
          845: (t, e, r) => {
            var n = {};
            (0, r(761).assign)(n, r(880), r(380), r(271)), (t.exports = n);
          },
          880: (t, e, r) => {
            var n = r(789),
              i = r(761),
              s = r(944),
              a = r(950),
              o = r(744),
              u = Object.prototype.toString;
            function h(t) {
              if (!(this instanceof h)) return new h(t);
              this.options = i.assign(
                { level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: '' },
                t || {}
              );
              var e = this.options;
              e.raw && e.windowBits > 0
                ? (e.windowBits = -e.windowBits)
                : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
                (this.err = 0),
                (this.msg = ''),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new o()),
                (this.strm.avail_out = 0);
              var r = n.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
              if (0 !== r) throw new Error(a[r]);
              if ((e.header && n.deflateSetHeader(this.strm, e.header), e.dictionary)) {
                var f;
                if (
                  ((f =
                    'string' == typeof e.dictionary
                      ? s.string2buf(e.dictionary)
                      : '[object ArrayBuffer]' === u.call(e.dictionary)
                      ? new Uint8Array(e.dictionary)
                      : e.dictionary),
                  0 !== (r = n.deflateSetDictionary(this.strm, f)))
                )
                  throw new Error(a[r]);
                this.u = !0;
              }
            }
            function f(t, e) {
              var r = new h(e);
              if ((r.push(t, !0), r.err)) throw r.msg || a[r.err];
              return r.result;
            }
            (h.prototype.push = function (t, e) {
              var r,
                a,
                o = this.strm,
                h = this.options.chunkSize;
              if (this.ended) return !1;
              (a = e === ~~e ? e : !0 === e ? 4 : 0),
                'string' == typeof t
                  ? (o.input = s.string2buf(t))
                  : '[object ArrayBuffer]' === u.call(t)
                  ? (o.input = new Uint8Array(t))
                  : (o.input = t),
                (o.next_in = 0),
                (o.avail_in = o.input.length);
              do {
                if (
                  (0 === o.avail_out && ((o.output = new i.Buf8(h)), (o.next_out = 0), (o.avail_out = h)),
                  1 !== (r = n.deflate(o, a)) && 0 !== r)
                )
                  return this.onEnd(r), (this.ended = !0), !1;
                (0 !== o.avail_out && (0 !== o.avail_in || (4 !== a && 2 !== a))) ||
                  ('string' === this.options.to
                    ? this.onData(s.buf2binstring(i.shrinkBuf(o.output, o.next_out)))
                    : this.onData(i.shrinkBuf(o.output, o.next_out)));
              } while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== r);
              return 4 === a
                ? ((r = n.deflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), 0 === r)
                : 2 !== a || (this.onEnd(0), (o.avail_out = 0), !0);
            }),
              (h.prototype.onData = function (t) {
                this.chunks.push(t);
              }),
              (h.prototype.onEnd = function (t) {
                0 === t &&
                  ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = i.flattenChunks(this.chunks))),
                  (this.chunks = []),
                  (this.err = t),
                  (this.msg = this.strm.msg);
              }),
              (e.Deflate = h),
              (e.deflate = f),
              (e.deflateRaw = function (t, e) {
                return ((e = e || {}).raw = !0), f(t, e);
              }),
              (e.gzip = function (t, e) {
                return ((e = e || {}).gzip = !0), f(t, e);
              });
          },
          380: (t, e, r) => {
            var n = r(20),
              i = r(761),
              s = r(944),
              a = r(271),
              o = r(950),
              u = r(744),
              h = r(357),
              f = Object.prototype.toString;
            function c(t) {
              if (!(this instanceof c)) return new c(t);
              this.options = i.assign({ chunkSize: 16384, windowBits: 0, to: '' }, t || {});
              var e = this.options;
              e.raw &&
                e.windowBits >= 0 &&
                e.windowBits < 16 &&
                ((e.windowBits = -e.windowBits), 0 === e.windowBits && (e.windowBits = -15)),
                !(e.windowBits >= 0 && e.windowBits < 16) || (t && t.windowBits) || (e.windowBits += 32),
                e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
                (this.err = 0),
                (this.msg = ''),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new u()),
                (this.strm.avail_out = 0);
              var r = n.inflateInit2(this.strm, e.windowBits);
              if (r !== a.Z_OK) throw new Error(o[r]);
              if (
                ((this.header = new h()),
                n.inflateGetHeader(this.strm, this.header),
                e.dictionary &&
                  ('string' == typeof e.dictionary
                    ? (e.dictionary = s.string2buf(e.dictionary))
                    : '[object ArrayBuffer]' === f.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
                  e.raw && (r = n.inflateSetDictionary(this.strm, e.dictionary)) !== a.Z_OK))
              )
                throw new Error(o[r]);
            }
            function l(t, e) {
              var r = new c(e);
              if ((r.push(t, !0), r.err)) throw r.msg || o[r.err];
              return r.result;
            }
            (c.prototype.push = function (t, e) {
              var r,
                o,
                u,
                h,
                c,
                l = this.strm,
                p = this.options.chunkSize,
                d = this.options.dictionary,
                g = !1;
              if (this.ended) return !1;
              (o = e === ~~e ? e : !0 === e ? a.Z_FINISH : a.Z_NO_FLUSH),
                'string' == typeof t
                  ? (l.input = s.binstring2buf(t))
                  : '[object ArrayBuffer]' === f.call(t)
                  ? (l.input = new Uint8Array(t))
                  : (l.input = t),
                (l.next_in = 0),
                (l.avail_in = l.input.length);
              do {
                if (
                  (0 === l.avail_out && ((l.output = new i.Buf8(p)), (l.next_out = 0), (l.avail_out = p)),
                  (r = n.inflate(l, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && d && (r = n.inflateSetDictionary(this.strm, d)),
                  r === a.Z_BUF_ERROR && !0 === g && ((r = a.Z_OK), (g = !1)),
                  r !== a.Z_STREAM_END && r !== a.Z_OK)
                )
                  return this.onEnd(r), (this.ended = !0), !1;
                l.next_out &&
                  ((0 !== l.avail_out && r !== a.Z_STREAM_END && (0 !== l.avail_in || (o !== a.Z_FINISH && o !== a.Z_SYNC_FLUSH))) ||
                    ('string' === this.options.to
                      ? ((u = s.utf8border(l.output, l.next_out)),
                        (h = l.next_out - u),
                        (c = s.buf2string(l.output, u)),
                        (l.next_out = h),
                        (l.avail_out = p - h),
                        h && i.arraySet(l.output, l.output, u, h, 0),
                        this.onData(c))
                      : this.onData(i.shrinkBuf(l.output, l.next_out)))),
                  0 === l.avail_in && 0 === l.avail_out && (g = !0);
              } while ((l.avail_in > 0 || 0 === l.avail_out) && r !== a.Z_STREAM_END);
              return (
                r === a.Z_STREAM_END && (o = a.Z_FINISH),
                o === a.Z_FINISH
                  ? ((r = n.inflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), r === a.Z_OK)
                  : o !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), (l.avail_out = 0), !0)
              );
            }),
              (c.prototype.onData = function (t) {
                this.chunks.push(t);
              }),
              (c.prototype.onEnd = function (t) {
                t === a.Z_OK &&
                  ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = i.flattenChunks(this.chunks))),
                  (this.chunks = []),
                  (this.err = t),
                  (this.msg = this.strm.msg);
              }),
              (e.Inflate = c),
              (e.inflate = l),
              (e.inflateRaw = function (t, e) {
                return ((e = e || {}).raw = !0), l(t, e);
              }),
              (e.ungzip = l);
          },
          761: (t, e) => {
            var r = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Int32Array;
            function n(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }
            (e.assign = function (t) {
              for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
                var r = e.shift();
                if (r) {
                  if ('object' != typeof r) throw new TypeError(r + 'must be non-object');
                  for (var i in r) n(r, i) && (t[i] = r[i]);
                }
              }
              return t;
            }),
              (e.shrinkBuf = function (t, e) {
                return t.length === e ? t : t.subarray ? t.subarray(0, e) : ((t.length = e), t);
              });
            var i = {
                arraySet: function (t, e, r, n, i) {
                  if (e.subarray && t.subarray) t.set(e.subarray(r, r + n), i);
                  else for (var s = 0; s < n; s++) t[i + s] = e[r + s];
                },
                flattenChunks: function (t) {
                  var e, r, n, i, s, a;
                  for (n = 0, e = 0, r = t.length; e < r; e++) n += t[e].length;
                  for (a = new Uint8Array(n), i = 0, e = 0, r = t.length; e < r; e++) (s = t[e]), a.set(s, i), (i += s.length);
                  return a;
                },
              },
              s = {
                arraySet: function (t, e, r, n, i) {
                  for (var s = 0; s < n; s++) t[i + s] = e[r + s];
                },
                flattenChunks: function (t) {
                  return [].concat.apply([], t);
                },
              };
            (e.setTyped = function (t) {
              t
                ? ((e.Buf8 = Uint8Array), (e.Buf16 = Uint16Array), (e.Buf32 = Int32Array), e.assign(e, i))
                : ((e.Buf8 = Array), (e.Buf16 = Array), (e.Buf32 = Array), e.assign(e, s));
            }),
              e.setTyped(r);
          },
          944: (t, e, r) => {
            var n = r(761),
              i = !0,
              s = !0;
            try {
              String.fromCharCode.apply(null, [0]);
            } catch (t) {
              i = !1;
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1));
            } catch (t) {
              s = !1;
            }
            for (var a = new n.Buf8(256), o = 0; o < 256; o++)
              a[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
            function u(t, e) {
              if (e < 65534 && ((t.subarray && s) || (!t.subarray && i))) return String.fromCharCode.apply(null, n.shrinkBuf(t, e));
              for (var r = '', a = 0; a < e; a++) r += String.fromCharCode(t[a]);
              return r;
            }
            (a[254] = a[254] = 1),
              (e.string2buf = function (t) {
                var e,
                  r,
                  i,
                  s,
                  a,
                  o = t.length,
                  u = 0;
                for (s = 0; s < o; s++)
                  55296 == (64512 & (r = t.charCodeAt(s))) &&
                    s + 1 < o &&
                    56320 == (64512 & (i = t.charCodeAt(s + 1))) &&
                    ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), s++),
                    (u += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                for (e = new n.Buf8(u), a = 0, s = 0; a < u; s++)
                  55296 == (64512 & (r = t.charCodeAt(s))) &&
                    s + 1 < o &&
                    56320 == (64512 & (i = t.charCodeAt(s + 1))) &&
                    ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), s++),
                    r < 128
                      ? (e[a++] = r)
                      : r < 2048
                      ? ((e[a++] = 192 | (r >>> 6)), (e[a++] = 128 | (63 & r)))
                      : r < 65536
                      ? ((e[a++] = 224 | (r >>> 12)), (e[a++] = 128 | ((r >>> 6) & 63)), (e[a++] = 128 | (63 & r)))
                      : ((e[a++] = 240 | (r >>> 18)),
                        (e[a++] = 128 | ((r >>> 12) & 63)),
                        (e[a++] = 128 | ((r >>> 6) & 63)),
                        (e[a++] = 128 | (63 & r)));
                return e;
              }),
              (e.buf2binstring = function (t) {
                return u(t, t.length);
              }),
              (e.binstring2buf = function (t) {
                for (var e = new n.Buf8(t.length), r = 0, i = e.length; r < i; r++) e[r] = t.charCodeAt(r);
                return e;
              }),
              (e.buf2string = function (t, e) {
                var r,
                  n,
                  i,
                  s,
                  o = e || t.length,
                  h = new Array(2 * o);
                for (n = 0, r = 0; r < o; )
                  if ((i = t[r++]) < 128) h[n++] = i;
                  else if ((s = a[i]) > 4) (h[n++] = 65533), (r += s - 1);
                  else {
                    for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && r < o; ) (i = (i << 6) | (63 & t[r++])), s--;
                    s > 1
                      ? (h[n++] = 65533)
                      : i < 65536
                      ? (h[n++] = i)
                      : ((i -= 65536), (h[n++] = 55296 | ((i >> 10) & 1023)), (h[n++] = 56320 | (1023 & i)));
                  }
                return u(h, n);
              }),
              (e.utf8border = function (t, e) {
                var r;
                for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; r >= 0 && 128 == (192 & t[r]); ) r--;
                return r < 0 || 0 === r ? e : r + a[t[r]] > e ? r : e;
              });
          },
          562: (t) => {
            t.exports = function (t, e, r, n) {
              for (var i = (65535 & t) | 0, s = ((t >>> 16) & 65535) | 0, a = 0; 0 !== r; ) {
                r -= a = r > 2e3 ? 2e3 : r;
                do {
                  s = (s + (i = (i + e[n++]) | 0)) | 0;
                } while (--a);
                (i %= 65521), (s %= 65521);
              }
              return i | (s << 16) | 0;
            };
          },
          271: (t) => {
            t.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8,
            };
          },
          299: (t) => {
            var e = (function () {
              for (var t, e = [], r = 0; r < 256; r++) {
                t = r;
                for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                e[r] = t;
              }
              return e;
            })();
            t.exports = function (t, r, n, i) {
              var s = e,
                a = i + n;
              t ^= -1;
              for (var o = i; o < a; o++) t = (t >>> 8) ^ s[255 & (t ^ r[o])];
              return -1 ^ t;
            };
          },
          789: (t, e, r) => {
            var n,
              i = r(761),
              s = r(564),
              a = r(562),
              o = r(299),
              u = r(950),
              h = -2,
              f = 258,
              c = 262,
              l = 103,
              p = 113,
              d = 666;
            function g(t, e) {
              return (t.msg = u[e]), e;
            }
            function m(t) {
              return (t << 1) - (t > 4 ? 9 : 0);
            }
            function _(t) {
              for (var e = t.length; --e >= 0; ) t[e] = 0;
            }
            function y(t) {
              var e = t.state,
                r = e.pending;
              r > t.avail_out && (r = t.avail_out),
                0 !== r &&
                  (i.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out),
                  (t.next_out += r),
                  (e.pending_out += r),
                  (t.total_out += r),
                  (t.avail_out -= r),
                  (e.pending -= r),
                  0 === e.pending && (e.pending_out = 0));
            }
            function v(t, e) {
              s.h(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), (t.block_start = t.strstart), y(t.strm);
            }
            function b(t, e) {
              t.pending_buf[t.pending++] = e;
            }
            function I(t, e) {
              (t.pending_buf[t.pending++] = (e >>> 8) & 255), (t.pending_buf[t.pending++] = 255 & e);
            }
            function w(t, e) {
              var r,
                n,
                i = t.max_chain_length,
                s = t.strstart,
                a = t.prev_length,
                o = t.nice_match,
                u = t.strstart > t.w_size - c ? t.strstart - (t.w_size - c) : 0,
                h = t.window,
                l = t.w_mask,
                p = t.prev,
                d = t.strstart + f,
                g = h[s + a - 1],
                m = h[s + a];
              t.prev_length >= t.good_match && (i >>= 2), o > t.lookahead && (o = t.lookahead);
              do {
                if (h[(r = e) + a] === m && h[r + a - 1] === g && h[r] === h[s] && h[++r] === h[s + 1]) {
                  (s += 2), r++;
                  do {} while (
                    h[++s] === h[++r] &&
                    h[++s] === h[++r] &&
                    h[++s] === h[++r] &&
                    h[++s] === h[++r] &&
                    h[++s] === h[++r] &&
                    h[++s] === h[++r] &&
                    h[++s] === h[++r] &&
                    h[++s] === h[++r] &&
                    s < d
                  );
                  if (((n = f - (d - s)), (s = d - f), n > a)) {
                    if (((t.match_start = e), (a = n), n >= o)) break;
                    (g = h[s + a - 1]), (m = h[s + a]);
                  }
                }
              } while ((e = p[e & l]) > u && 0 != --i);
              return a <= t.lookahead ? a : t.lookahead;
            }
            function E(t) {
              var e,
                r,
                n,
                s,
                u,
                h,
                f,
                l,
                p,
                d,
                g = t.w_size;
              do {
                if (((s = t.window_size - t.lookahead - t.strstart), t.strstart >= g + (g - c))) {
                  i.arraySet(t.window, t.window, g, g, 0),
                    (t.match_start -= g),
                    (t.strstart -= g),
                    (t.block_start -= g),
                    (e = r = t.hash_size);
                  do {
                    (n = t.head[--e]), (t.head[e] = n >= g ? n - g : 0);
                  } while (--r);
                  e = r = g;
                  do {
                    (n = t.prev[--e]), (t.prev[e] = n >= g ? n - g : 0);
                  } while (--r);
                  s += g;
                }
                if (0 === t.strm.avail_in) break;
                if (
                  ((h = t.strm),
                  (f = t.window),
                  (l = t.strstart + t.lookahead),
                  (p = s),
                  (d = void 0),
                  (d = h.avail_in) > p && (d = p),
                  (r =
                    0 === d
                      ? 0
                      : ((h.avail_in -= d),
                        i.arraySet(f, h.input, h.next_in, d, l),
                        1 === h.state.wrap ? (h.adler = a(h.adler, f, d, l)) : 2 === h.state.wrap && (h.adler = o(h.adler, f, d, l)),
                        (h.next_in += d),
                        (h.total_in += d),
                        d)),
                  (t.lookahead += r),
                  t.lookahead + t.insert >= 3)
                )
                  for (
                    u = t.strstart - t.insert, t.ins_h = t.window[u], t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[u + 1]) & t.hash_mask;
                    t.insert &&
                    ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[u + 3 - 1]) & t.hash_mask),
                    (t.prev[u & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = u),
                    u++,
                    t.insert--,
                    !(t.lookahead + t.insert < 3));

                  );
              } while (t.lookahead < c && 0 !== t.strm.avail_in);
            }
            function M(t, e) {
              for (var r, n; ; ) {
                if (t.lookahead < c) {
                  if ((E(t), t.lookahead < c && 0 === e)) return 1;
                  if (0 === t.lookahead) break;
                }
                if (
                  ((r = 0),
                  t.lookahead >= 3 &&
                    ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) & t.hash_mask),
                    (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = t.strstart)),
                  0 !== r && t.strstart - r <= t.w_size - c && (t.match_length = w(t, r)),
                  t.match_length >= 3)
                )
                  if (
                    ((n = s.l(t, t.strstart - t.match_start, t.match_length - 3)),
                    (t.lookahead -= t.match_length),
                    t.match_length <= t.max_lazy_match && t.lookahead >= 3)
                  ) {
                    t.match_length--;
                    do {
                      t.strstart++,
                        (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) & t.hash_mask),
                        (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = t.strstart);
                    } while (0 != --t.match_length);
                    t.strstart++;
                  } else
                    (t.strstart += t.match_length),
                      (t.match_length = 0),
                      (t.ins_h = t.window[t.strstart]),
                      (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) & t.hash_mask);
                else (n = s.l(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
                if (n && (v(t, !1), 0 === t.strm.avail_out)) return 1;
              }
              return (
                (t.insert = t.strstart < 2 ? t.strstart : 2),
                4 === e ? (v(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (v(t, !1), 0 === t.strm.avail_out) ? 1 : 2
              );
            }
            function A(t, e) {
              for (var r, n, i; ; ) {
                if (t.lookahead < c) {
                  if ((E(t), t.lookahead < c && 0 === e)) return 1;
                  if (0 === t.lookahead) break;
                }
                if (
                  ((r = 0),
                  t.lookahead >= 3 &&
                    ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) & t.hash_mask),
                    (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = t.strstart)),
                  (t.prev_length = t.match_length),
                  (t.prev_match = t.match_start),
                  (t.match_length = 2),
                  0 !== r &&
                    t.prev_length < t.max_lazy_match &&
                    t.strstart - r <= t.w_size - c &&
                    ((t.match_length = w(t, r)),
                    t.match_length <= 5 &&
                      (1 === t.strategy || (3 === t.match_length && t.strstart - t.match_start > 4096)) &&
                      (t.match_length = 2)),
                  t.prev_length >= 3 && t.match_length <= t.prev_length)
                ) {
                  (i = t.strstart + t.lookahead - 3),
                    (n = s.l(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
                    (t.lookahead -= t.prev_length - 1),
                    (t.prev_length -= 2);
                  do {
                    ++t.strstart <= i &&
                      ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 3 - 1]) & t.hash_mask),
                      (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                      (t.head[t.ins_h] = t.strstart));
                  } while (0 != --t.prev_length);
                  if (((t.match_available = 0), (t.match_length = 2), t.strstart++, n && (v(t, !1), 0 === t.strm.avail_out))) return 1;
                } else if (t.match_available) {
                  if (((n = s.l(t, 0, t.window[t.strstart - 1])) && v(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out))
                    return 1;
                } else (t.match_available = 1), t.strstart++, t.lookahead--;
              }
              return (
                t.match_available && ((n = s.l(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
                (t.insert = t.strstart < 2 ? t.strstart : 2),
                4 === e ? (v(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (v(t, !1), 0 === t.strm.avail_out) ? 1 : 2
              );
            }
            function B(t, e, r, n, i) {
              (this.good_length = t), (this.max_lazy = e), (this.nice_length = r), (this.max_chain = n), (this.func = i);
            }
            function T() {
              (this.strm = null),
                (this.status = 0),
                (this.pending_buf = null),
                (this.pending_buf_size = 0),
                (this.pending_out = 0),
                (this.pending = 0),
                (this.wrap = 0),
                (this.gzhead = null),
                (this.gzindex = 0),
                (this.method = 8),
                (this.last_flush = -1),
                (this.w_size = 0),
                (this.w_bits = 0),
                (this.w_mask = 0),
                (this.window = null),
                (this.window_size = 0),
                (this.prev = null),
                (this.head = null),
                (this.ins_h = 0),
                (this.hash_size = 0),
                (this.hash_bits = 0),
                (this.hash_mask = 0),
                (this.hash_shift = 0),
                (this.block_start = 0),
                (this.match_length = 0),
                (this.prev_match = 0),
                (this.match_available = 0),
                (this.strstart = 0),
                (this.match_start = 0),
                (this.lookahead = 0),
                (this.prev_length = 0),
                (this.max_chain_length = 0),
                (this.max_lazy_match = 0),
                (this.level = 0),
                (this.strategy = 0),
                (this.good_match = 0),
                (this.nice_match = 0),
                (this.dyn_ltree = new i.Buf16(1146)),
                (this.dyn_dtree = new i.Buf16(122)),
                (this.bl_tree = new i.Buf16(78)),
                _(this.dyn_ltree),
                _(this.dyn_dtree),
                _(this.bl_tree),
                (this.l_desc = null),
                (this.d_desc = null),
                (this.bl_desc = null),
                (this.bl_count = new i.Buf16(16)),
                (this.heap = new i.Buf16(573)),
                _(this.heap),
                (this.heap_len = 0),
                (this.heap_max = 0),
                (this.depth = new i.Buf16(573)),
                _(this.depth),
                (this.l_buf = 0),
                (this.lit_bufsize = 0),
                (this.last_lit = 0),
                (this.d_buf = 0),
                (this.opt_len = 0),
                (this.static_len = 0),
                (this.matches = 0),
                (this.insert = 0),
                (this.bi_buf = 0),
                (this.bi_valid = 0);
            }
            function S(t) {
              var e;
              return t && t.state
                ? ((t.total_in = t.total_out = 0),
                  (t.data_type = 2),
                  ((e = t.state).pending = 0),
                  (e.pending_out = 0),
                  e.wrap < 0 && (e.wrap = -e.wrap),
                  (e.status = e.wrap ? 42 : p),
                  (t.adler = 2 === e.wrap ? 0 : 1),
                  (e.last_flush = 0),
                  s.p(e),
                  0)
                : g(t, h);
            }
            function P(t) {
              var e,
                r = S(t);
              return (
                0 === r &&
                  (((e = t.state).window_size = 2 * e.w_size),
                  _(e.head),
                  (e.max_lazy_match = n[e.level].max_lazy),
                  (e.good_match = n[e.level].good_length),
                  (e.nice_match = n[e.level].nice_length),
                  (e.max_chain_length = n[e.level].max_chain),
                  (e.strstart = 0),
                  (e.block_start = 0),
                  (e.lookahead = 0),
                  (e.insert = 0),
                  (e.match_length = e.prev_length = 2),
                  (e.match_available = 0),
                  (e.ins_h = 0)),
                r
              );
            }
            function R(t, e, r, n, s, a) {
              if (!t) return h;
              var o = 1;
              if (
                (-1 === e && (e = 6),
                n < 0 ? ((o = 0), (n = -n)) : n > 15 && ((o = 2), (n -= 16)),
                s < 1 || s > 9 || 8 !== r || n < 8 || n > 15 || e < 0 || e > 9 || a < 0 || a > 4)
              )
                return g(t, h);
              8 === n && (n = 9);
              var u = new T();
              return (
                (t.state = u),
                (u.strm = t),
                (u.wrap = o),
                (u.gzhead = null),
                (u.w_bits = n),
                (u.w_size = 1 << u.w_bits),
                (u.w_mask = u.w_size - 1),
                (u.hash_bits = s + 7),
                (u.hash_size = 1 << u.hash_bits),
                (u.hash_mask = u.hash_size - 1),
                (u.hash_shift = ~~((u.hash_bits + 3 - 1) / 3)),
                (u.window = new i.Buf8(2 * u.w_size)),
                (u.head = new i.Buf16(u.hash_size)),
                (u.prev = new i.Buf16(u.w_size)),
                (u.lit_bufsize = 1 << (s + 6)),
                (u.pending_buf_size = 4 * u.lit_bufsize),
                (u.pending_buf = new i.Buf8(u.pending_buf_size)),
                (u.d_buf = 1 * u.lit_bufsize),
                (u.l_buf = 3 * u.lit_bufsize),
                (u.level = e),
                (u.strategy = a),
                (u.method = r),
                P(t)
              );
            }
            (n = [
              new B(0, 0, 0, 0, function (t, e) {
                var r = 65535;
                for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
                  if (t.lookahead <= 1) {
                    if ((E(t), 0 === t.lookahead && 0 === e)) return 1;
                    if (0 === t.lookahead) break;
                  }
                  (t.strstart += t.lookahead), (t.lookahead = 0);
                  var n = t.block_start + r;
                  if (
                    (0 === t.strstart || t.strstart >= n) &&
                    ((t.lookahead = t.strstart - n), (t.strstart = n), v(t, !1), 0 === t.strm.avail_out)
                  )
                    return 1;
                  if (t.strstart - t.block_start >= t.w_size - c && (v(t, !1), 0 === t.strm.avail_out)) return 1;
                }
                return (
                  (t.insert = 0),
                  4 === e ? (v(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (v(t, !1), t.strm.avail_out), 1)
                );
              }),
              new B(4, 4, 8, 4, M),
              new B(4, 5, 16, 8, M),
              new B(4, 6, 32, 32, M),
              new B(4, 4, 16, 16, A),
              new B(8, 16, 32, 32, A),
              new B(8, 16, 128, 128, A),
              new B(8, 32, 128, 256, A),
              new B(32, 128, 258, 1024, A),
              new B(32, 258, 258, 4096, A),
            ]),
              (e.deflateInit = function (t, e) {
                return R(t, e, 8, 15, 8, 0);
              }),
              (e.deflateInit2 = R),
              (e.deflateReset = P),
              (e.deflateResetKeep = S),
              (e.deflateSetHeader = function (t, e) {
                return t && t.state ? (2 !== t.state.wrap ? h : ((t.state.gzhead = e), 0)) : h;
              }),
              (e.deflate = function (t, e) {
                var r, i, a, u;
                if (!t || !t.state || e > 5 || e < 0) return t ? g(t, h) : h;
                if (((i = t.state), !t.output || (!t.input && 0 !== t.avail_in) || (i.status === d && 4 !== e)))
                  return g(t, 0 === t.avail_out ? -5 : h);
                if (((i.strm = t), (r = i.last_flush), (i.last_flush = e), 42 === i.status))
                  if (2 === i.wrap)
                    (t.adler = 0),
                      b(i, 31),
                      b(i, 139),
                      b(i, 8),
                      i.gzhead
                        ? (b(
                            i,
                            (i.gzhead.text ? 1 : 0) +
                              (i.gzhead.hcrc ? 2 : 0) +
                              (i.gzhead.extra ? 4 : 0) +
                              (i.gzhead.name ? 8 : 0) +
                              (i.gzhead.comment ? 16 : 0)
                          ),
                          b(i, 255 & i.gzhead.time),
                          b(i, (i.gzhead.time >> 8) & 255),
                          b(i, (i.gzhead.time >> 16) & 255),
                          b(i, (i.gzhead.time >> 24) & 255),
                          b(i, 9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0),
                          b(i, 255 & i.gzhead.os),
                          i.gzhead.extra &&
                            i.gzhead.extra.length &&
                            (b(i, 255 & i.gzhead.extra.length), b(i, (i.gzhead.extra.length >> 8) & 255)),
                          i.gzhead.hcrc && (t.adler = o(t.adler, i.pending_buf, i.pending, 0)),
                          (i.gzindex = 0),
                          (i.status = 69))
                        : (b(i, 0),
                          b(i, 0),
                          b(i, 0),
                          b(i, 0),
                          b(i, 0),
                          b(i, 9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0),
                          b(i, 3),
                          (i.status = p));
                  else {
                    var c = (8 + ((i.w_bits - 8) << 4)) << 8;
                    (c |= (i.strategy >= 2 || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6),
                      0 !== i.strstart && (c |= 32),
                      (c += 31 - (c % 31)),
                      (i.status = p),
                      I(i, c),
                      0 !== i.strstart && (I(i, t.adler >>> 16), I(i, 65535 & t.adler)),
                      (t.adler = 1);
                  }
                if (69 === i.status)
                  if (i.gzhead.extra) {
                    for (
                      a = i.pending;
                      i.gzindex < (65535 & i.gzhead.extra.length) &&
                      (i.pending !== i.pending_buf_size ||
                        (i.gzhead.hcrc && i.pending > a && (t.adler = o(t.adler, i.pending_buf, i.pending - a, a)),
                        y(t),
                        (a = i.pending),
                        i.pending !== i.pending_buf_size));

                    )
                      b(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                    i.gzhead.hcrc && i.pending > a && (t.adler = o(t.adler, i.pending_buf, i.pending - a, a)),
                      i.gzindex === i.gzhead.extra.length && ((i.gzindex = 0), (i.status = 73));
                  } else i.status = 73;
                if (73 === i.status)
                  if (i.gzhead.name) {
                    a = i.pending;
                    do {
                      if (
                        i.pending === i.pending_buf_size &&
                        (i.gzhead.hcrc && i.pending > a && (t.adler = o(t.adler, i.pending_buf, i.pending - a, a)),
                        y(t),
                        (a = i.pending),
                        i.pending === i.pending_buf_size)
                      ) {
                        u = 1;
                        break;
                      }
                      (u = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0), b(i, u);
                    } while (0 !== u);
                    i.gzhead.hcrc && i.pending > a && (t.adler = o(t.adler, i.pending_buf, i.pending - a, a)),
                      0 === u && ((i.gzindex = 0), (i.status = 91));
                  } else i.status = 91;
                if (91 === i.status)
                  if (i.gzhead.comment) {
                    a = i.pending;
                    do {
                      if (
                        i.pending === i.pending_buf_size &&
                        (i.gzhead.hcrc && i.pending > a && (t.adler = o(t.adler, i.pending_buf, i.pending - a, a)),
                        y(t),
                        (a = i.pending),
                        i.pending === i.pending_buf_size)
                      ) {
                        u = 1;
                        break;
                      }
                      (u = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0), b(i, u);
                    } while (0 !== u);
                    i.gzhead.hcrc && i.pending > a && (t.adler = o(t.adler, i.pending_buf, i.pending - a, a)), 0 === u && (i.status = l);
                  } else i.status = l;
                if (
                  (i.status === l &&
                    (i.gzhead.hcrc
                      ? (i.pending + 2 > i.pending_buf_size && y(t),
                        i.pending + 2 <= i.pending_buf_size &&
                          (b(i, 255 & t.adler), b(i, (t.adler >> 8) & 255), (t.adler = 0), (i.status = p)))
                      : (i.status = p)),
                  0 !== i.pending)
                ) {
                  if ((y(t), 0 === t.avail_out)) return (i.last_flush = -1), 0;
                } else if (0 === t.avail_in && m(e) <= m(r) && 4 !== e) return g(t, -5);
                if (i.status === d && 0 !== t.avail_in) return g(t, -5);
                if (0 !== t.avail_in || 0 !== i.lookahead || (0 !== e && i.status !== d)) {
                  var w =
                    2 === i.strategy
                      ? (function (t, e) {
                          for (var r; ; ) {
                            if (0 === t.lookahead && (E(t), 0 === t.lookahead)) {
                              if (0 === e) return 1;
                              break;
                            }
                            if (
                              ((t.match_length = 0),
                              (r = s.l(t, 0, t.window[t.strstart])),
                              t.lookahead--,
                              t.strstart++,
                              r && (v(t, !1), 0 === t.strm.avail_out))
                            )
                              return 1;
                          }
                          return (
                            (t.insert = 0),
                            4 === e ? (v(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (v(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                          );
                        })(i, e)
                      : 3 === i.strategy
                      ? (function (t, e) {
                          for (var r, n, i, a, o = t.window; ; ) {
                            if (t.lookahead <= f) {
                              if ((E(t), t.lookahead <= f && 0 === e)) return 1;
                              if (0 === t.lookahead) break;
                            }
                            if (
                              ((t.match_length = 0),
                              t.lookahead >= 3 &&
                                t.strstart > 0 &&
                                (n = o[(i = t.strstart - 1)]) === o[++i] &&
                                n === o[++i] &&
                                n === o[++i])
                            ) {
                              a = t.strstart + f;
                              do {} while (
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                n === o[++i] &&
                                i < a
                              );
                              (t.match_length = f - (a - i)), t.match_length > t.lookahead && (t.match_length = t.lookahead);
                            }
                            if (
                              (t.match_length >= 3
                                ? ((r = s.l(t, 1, t.match_length - 3)),
                                  (t.lookahead -= t.match_length),
                                  (t.strstart += t.match_length),
                                  (t.match_length = 0))
                                : ((r = s.l(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++),
                              r && (v(t, !1), 0 === t.strm.avail_out))
                            )
                              return 1;
                          }
                          return (
                            (t.insert = 0),
                            4 === e ? (v(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (v(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                          );
                        })(i, e)
                      : n[i.level].func(i, e);
                  if (((3 !== w && 4 !== w) || (i.status = d), 1 === w || 3 === w)) return 0 === t.avail_out && (i.last_flush = -1), 0;
                  if (
                    2 === w &&
                    (1 === e
                      ? s.g(i)
                      : 5 !== e &&
                        (s.m(i, 0, 0, !1),
                        3 === e && (_(i.head), 0 === i.lookahead && ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
                    y(t),
                    0 === t.avail_out)
                  )
                    return (i.last_flush = -1), 0;
                }
                return 4 !== e
                  ? 0
                  : i.wrap <= 0
                  ? 1
                  : (2 === i.wrap
                      ? (b(i, 255 & t.adler),
                        b(i, (t.adler >> 8) & 255),
                        b(i, (t.adler >> 16) & 255),
                        b(i, (t.adler >> 24) & 255),
                        b(i, 255 & t.total_in),
                        b(i, (t.total_in >> 8) & 255),
                        b(i, (t.total_in >> 16) & 255),
                        b(i, (t.total_in >> 24) & 255))
                      : (I(i, t.adler >>> 16), I(i, 65535 & t.adler)),
                    y(t),
                    i.wrap > 0 && (i.wrap = -i.wrap),
                    0 !== i.pending ? 0 : 1);
              }),
              (e.deflateEnd = function (t) {
                var e;
                return t && t.state
                  ? 42 !== (e = t.state.status) && 69 !== e && 73 !== e && 91 !== e && e !== l && e !== p && e !== d
                    ? g(t, h)
                    : ((t.state = null), e === p ? g(t, -3) : 0)
                  : h;
              }),
              (e.deflateSetDictionary = function (t, e) {
                var r,
                  n,
                  s,
                  o,
                  u,
                  f,
                  c,
                  l,
                  p = e.length;
                if (!t || !t.state) return h;
                if (2 === (o = (r = t.state).wrap) || (1 === o && 42 !== r.status) || r.lookahead) return h;
                for (
                  1 === o && (t.adler = a(t.adler, e, p, 0)),
                    r.wrap = 0,
                    p >= r.w_size &&
                      (0 === o && (_(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0)),
                      (l = new i.Buf8(r.w_size)),
                      i.arraySet(l, e, p - r.w_size, r.w_size, 0),
                      (e = l),
                      (p = r.w_size)),
                    u = t.avail_in,
                    f = t.next_in,
                    c = t.input,
                    t.avail_in = p,
                    t.next_in = 0,
                    t.input = e,
                    E(r);
                  r.lookahead >= 3;

                ) {
                  (n = r.strstart), (s = r.lookahead - 2);
                  do {
                    (r.ins_h = ((r.ins_h << r.hash_shift) ^ r.window[n + 3 - 1]) & r.hash_mask),
                      (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                      (r.head[r.ins_h] = n),
                      n++;
                  } while (--s);
                  (r.strstart = n), (r.lookahead = 2), E(r);
                }
                return (
                  (r.strstart += r.lookahead),
                  (r.block_start = r.strstart),
                  (r.insert = r.lookahead),
                  (r.lookahead = 0),
                  (r.match_length = r.prev_length = 2),
                  (r.match_available = 0),
                  (t.next_in = f),
                  (t.input = c),
                  (t.avail_in = u),
                  (r.wrap = o),
                  0
                );
              }),
              (e.deflateInfo = 'pako deflate (from Nodeca project)');
          },
          357: (t) => {
            t.exports = function () {
              (this.text = 0),
                (this.time = 0),
                (this.xflags = 0),
                (this.os = 0),
                (this.extra = null),
                (this.extra_len = 0),
                (this.name = ''),
                (this.comment = ''),
                (this.hcrc = 0),
                (this.done = !1);
            };
          },
          980: (t) => {
            t.exports = function (t, e) {
              var r, n, i, s, a, o, u, h, f, c, l, p, d, g, m, _, y, v, b, I, w, E, M, A, B;
              (r = t.state),
                (n = t.next_in),
                (A = t.input),
                (i = n + (t.avail_in - 5)),
                (s = t.next_out),
                (B = t.output),
                (a = s - (e - t.avail_out)),
                (o = s + (t.avail_out - 257)),
                (u = r.dmax),
                (h = r.wsize),
                (f = r.whave),
                (c = r.wnext),
                (l = r.window),
                (p = r.hold),
                (d = r.bits),
                (g = r.lencode),
                (m = r.distcode),
                (_ = (1 << r.lenbits) - 1),
                (y = (1 << r.distbits) - 1);
              t: do {
                d < 15 && ((p += A[n++] << d), (d += 8), (p += A[n++] << d), (d += 8)), (v = g[p & _]);
                e: for (;;) {
                  if (((p >>>= b = v >>> 24), (d -= b), 0 == (b = (v >>> 16) & 255))) B[s++] = 65535 & v;
                  else {
                    if (!(16 & b)) {
                      if (0 == (64 & b)) {
                        v = g[(65535 & v) + (p & ((1 << b) - 1))];
                        continue e;
                      }
                      if (32 & b) {
                        r.mode = 12;
                        break t;
                      }
                      (t.msg = 'invalid literal/length code'), (r.mode = 30);
                      break t;
                    }
                    (I = 65535 & v),
                      (b &= 15) && (d < b && ((p += A[n++] << d), (d += 8)), (I += p & ((1 << b) - 1)), (p >>>= b), (d -= b)),
                      d < 15 && ((p += A[n++] << d), (d += 8), (p += A[n++] << d), (d += 8)),
                      (v = m[p & y]);
                    r: for (;;) {
                      if (((p >>>= b = v >>> 24), (d -= b), !(16 & (b = (v >>> 16) & 255)))) {
                        if (0 == (64 & b)) {
                          v = m[(65535 & v) + (p & ((1 << b) - 1))];
                          continue r;
                        }
                        (t.msg = 'invalid distance code'), (r.mode = 30);
                        break t;
                      }
                      if (
                        ((w = 65535 & v),
                        d < (b &= 15) && ((p += A[n++] << d), (d += 8) < b && ((p += A[n++] << d), (d += 8))),
                        (w += p & ((1 << b) - 1)) > u)
                      ) {
                        (t.msg = 'invalid distance too far back'), (r.mode = 30);
                        break t;
                      }
                      if (((p >>>= b), (d -= b), w > (b = s - a))) {
                        if ((b = w - b) > f && r.sane) {
                          (t.msg = 'invalid distance too far back'), (r.mode = 30);
                          break t;
                        }
                        if (((E = 0), (M = l), 0 === c)) {
                          if (((E += h - b), b < I)) {
                            I -= b;
                            do {
                              B[s++] = l[E++];
                            } while (--b);
                            (E = s - w), (M = B);
                          }
                        } else if (c < b) {
                          if (((E += h + c - b), (b -= c) < I)) {
                            I -= b;
                            do {
                              B[s++] = l[E++];
                            } while (--b);
                            if (((E = 0), c < I)) {
                              I -= b = c;
                              do {
                                B[s++] = l[E++];
                              } while (--b);
                              (E = s - w), (M = B);
                            }
                          }
                        } else if (((E += c - b), b < I)) {
                          I -= b;
                          do {
                            B[s++] = l[E++];
                          } while (--b);
                          (E = s - w), (M = B);
                        }
                        for (; I > 2; ) (B[s++] = M[E++]), (B[s++] = M[E++]), (B[s++] = M[E++]), (I -= 3);
                        I && ((B[s++] = M[E++]), I > 1 && (B[s++] = M[E++]));
                      } else {
                        E = s - w;
                        do {
                          (B[s++] = B[E++]), (B[s++] = B[E++]), (B[s++] = B[E++]), (I -= 3);
                        } while (I > 2);
                        I && ((B[s++] = B[E++]), I > 1 && (B[s++] = B[E++]));
                      }
                      break;
                    }
                  }
                  break;
                }
              } while (n < i && s < o);
              (n -= I = d >> 3),
                (p &= (1 << (d -= I << 3)) - 1),
                (t.next_in = n),
                (t.next_out = s),
                (t.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
                (t.avail_out = s < o ? o - s + 257 : 257 - (s - o)),
                (r.hold = p),
                (r.bits = d);
            };
          },
          20: (t, e, r) => {
            var n = r(761),
              i = r(562),
              s = r(299),
              a = r(980),
              o = r(881),
              u = -2,
              h = 12,
              f = 30;
            function c(t) {
              return ((t >>> 24) & 255) + ((t >>> 8) & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
            }
            function l() {
              (this.mode = 0),
                (this.last = !1),
                (this.wrap = 0),
                (this.havedict = !1),
                (this.flags = 0),
                (this.dmax = 0),
                (this.check = 0),
                (this.total = 0),
                (this.head = null),
                (this.wbits = 0),
                (this.wsize = 0),
                (this.whave = 0),
                (this.wnext = 0),
                (this.window = null),
                (this.hold = 0),
                (this.bits = 0),
                (this.length = 0),
                (this.offset = 0),
                (this.extra = 0),
                (this.lencode = null),
                (this.distcode = null),
                (this.lenbits = 0),
                (this.distbits = 0),
                (this.ncode = 0),
                (this.nlen = 0),
                (this.ndist = 0),
                (this.have = 0),
                (this.next = null),
                (this.lens = new n.Buf16(320)),
                (this.work = new n.Buf16(288)),
                (this.lendyn = null),
                (this.distdyn = null),
                (this.sane = 0),
                (this.back = 0),
                (this.was = 0);
            }
            function p(t) {
              var e;
              return t && t.state
                ? ((e = t.state),
                  (t.total_in = t.total_out = e.total = 0),
                  (t.msg = ''),
                  e.wrap && (t.adler = 1 & e.wrap),
                  (e.mode = 1),
                  (e.last = 0),
                  (e.havedict = 0),
                  (e.dmax = 32768),
                  (e.head = null),
                  (e.hold = 0),
                  (e.bits = 0),
                  (e.lencode = e.lendyn = new n.Buf32(852)),
                  (e.distcode = e.distdyn = new n.Buf32(592)),
                  (e.sane = 1),
                  (e.back = -1),
                  0)
                : u;
            }
            function d(t) {
              var e;
              return t && t.state ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), p(t)) : u;
            }
            function g(t, e) {
              var r, n;
              return t && t.state
                ? ((n = t.state),
                  e < 0 ? ((r = 0), (e = -e)) : ((r = 1 + (e >> 4)), e < 48 && (e &= 15)),
                  e && (e < 8 || e > 15) ? u : (null !== n.window && n.wbits !== e && (n.window = null), (n.wrap = r), (n.wbits = e), d(t)))
                : u;
            }
            function m(t, e) {
              var r, n;
              return t ? ((n = new l()), (t.state = n), (n.window = null), 0 !== (r = g(t, e)) && (t.state = null), r) : u;
            }
            var _,
              y,
              v = !0;
            function b(t) {
              if (v) {
                var e;
                for (_ = new n.Buf32(512), y = new n.Buf32(32), e = 0; e < 144; ) t.lens[e++] = 8;
                for (; e < 256; ) t.lens[e++] = 9;
                for (; e < 280; ) t.lens[e++] = 7;
                for (; e < 288; ) t.lens[e++] = 8;
                for (o(1, t.lens, 0, 288, _, 0, t.work, { bits: 9 }), e = 0; e < 32; ) t.lens[e++] = 5;
                o(2, t.lens, 0, 32, y, 0, t.work, { bits: 5 }), (v = !1);
              }
              (t.lencode = _), (t.lenbits = 9), (t.distcode = y), (t.distbits = 5);
            }
            function I(t, e, r, i) {
              var s,
                a = t.state;
              return (
                null === a.window && ((a.wsize = 1 << a.wbits), (a.wnext = 0), (a.whave = 0), (a.window = new n.Buf8(a.wsize))),
                i >= a.wsize
                  ? (n.arraySet(a.window, e, r - a.wsize, a.wsize, 0), (a.wnext = 0), (a.whave = a.wsize))
                  : ((s = a.wsize - a.wnext) > i && (s = i),
                    n.arraySet(a.window, e, r - i, s, a.wnext),
                    (i -= s)
                      ? (n.arraySet(a.window, e, r - i, i, 0), (a.wnext = i), (a.whave = a.wsize))
                      : ((a.wnext += s), a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))),
                0
              );
            }
            (e.inflateReset = d),
              (e.inflateReset2 = g),
              (e.inflateResetKeep = p),
              (e.inflateInit = function (t) {
                return m(t, 15);
              }),
              (e.inflateInit2 = m),
              (e.inflate = function (t, e) {
                var r,
                  l,
                  p,
                  d,
                  g,
                  m,
                  _,
                  y,
                  v,
                  w,
                  E,
                  M,
                  A,
                  B,
                  T,
                  S,
                  P,
                  R,
                  D,
                  O,
                  C,
                  N,
                  k,
                  x,
                  U = 0,
                  j = new n.Buf8(4),
                  z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in)) return u;
                (r = t.state).mode === h && (r.mode = 13),
                  (g = t.next_out),
                  (p = t.output),
                  (_ = t.avail_out),
                  (d = t.next_in),
                  (l = t.input),
                  (m = t.avail_in),
                  (y = r.hold),
                  (v = r.bits),
                  (w = m),
                  (E = _),
                  (N = 0);
                t: for (;;)
                  switch (r.mode) {
                    case 1:
                      if (0 === r.wrap) {
                        r.mode = 13;
                        break;
                      }
                      for (; v < 16; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      if (2 & r.wrap && 35615 === y) {
                        (r.check = 0),
                          (j[0] = 255 & y),
                          (j[1] = (y >>> 8) & 255),
                          (r.check = s(r.check, j, 2, 0)),
                          (y = 0),
                          (v = 0),
                          (r.mode = 2);
                        break;
                      }
                      if (((r.flags = 0), r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & y) << 8) + (y >> 8)) % 31)) {
                        (t.msg = 'incorrect header check'), (r.mode = f);
                        break;
                      }
                      if (8 != (15 & y)) {
                        (t.msg = 'unknown compression method'), (r.mode = f);
                        break;
                      }
                      if (((v -= 4), (C = 8 + (15 & (y >>>= 4))), 0 === r.wbits)) r.wbits = C;
                      else if (C > r.wbits) {
                        (t.msg = 'invalid window size'), (r.mode = f);
                        break;
                      }
                      (r.dmax = 1 << C), (t.adler = r.check = 1), (r.mode = 512 & y ? 10 : h), (y = 0), (v = 0);
                      break;
                    case 2:
                      for (; v < 16; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      if (((r.flags = y), 8 != (255 & r.flags))) {
                        (t.msg = 'unknown compression method'), (r.mode = f);
                        break;
                      }
                      if (57344 & r.flags) {
                        (t.msg = 'unknown header flags set'), (r.mode = f);
                        break;
                      }
                      r.head && (r.head.text = (y >> 8) & 1),
                        512 & r.flags && ((j[0] = 255 & y), (j[1] = (y >>> 8) & 255), (r.check = s(r.check, j, 2, 0))),
                        (y = 0),
                        (v = 0),
                        (r.mode = 3);
                    case 3:
                      for (; v < 32; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      r.head && (r.head.time = y),
                        512 & r.flags &&
                          ((j[0] = 255 & y),
                          (j[1] = (y >>> 8) & 255),
                          (j[2] = (y >>> 16) & 255),
                          (j[3] = (y >>> 24) & 255),
                          (r.check = s(r.check, j, 4, 0))),
                        (y = 0),
                        (v = 0),
                        (r.mode = 4);
                    case 4:
                      for (; v < 16; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      r.head && ((r.head.xflags = 255 & y), (r.head.os = y >> 8)),
                        512 & r.flags && ((j[0] = 255 & y), (j[1] = (y >>> 8) & 255), (r.check = s(r.check, j, 2, 0))),
                        (y = 0),
                        (v = 0),
                        (r.mode = 5);
                    case 5:
                      if (1024 & r.flags) {
                        for (; v < 16; ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        (r.length = y),
                          r.head && (r.head.extra_len = y),
                          512 & r.flags && ((j[0] = 255 & y), (j[1] = (y >>> 8) & 255), (r.check = s(r.check, j, 2, 0))),
                          (y = 0),
                          (v = 0);
                      } else r.head && (r.head.extra = null);
                      r.mode = 6;
                    case 6:
                      if (
                        1024 & r.flags &&
                        ((M = r.length) > m && (M = m),
                        M &&
                          (r.head &&
                            ((C = r.head.extra_len - r.length),
                            r.head.extra || (r.head.extra = new Array(r.head.extra_len)),
                            n.arraySet(r.head.extra, l, d, M, C)),
                          512 & r.flags && (r.check = s(r.check, l, M, d)),
                          (m -= M),
                          (d += M),
                          (r.length -= M)),
                        r.length)
                      )
                        break t;
                      (r.length = 0), (r.mode = 7);
                    case 7:
                      if (2048 & r.flags) {
                        if (0 === m) break t;
                        M = 0;
                        do {
                          (C = l[d + M++]), r.head && C && r.length < 65536 && (r.head.name += String.fromCharCode(C));
                        } while (C && M < m);
                        if ((512 & r.flags && (r.check = s(r.check, l, M, d)), (m -= M), (d += M), C)) break t;
                      } else r.head && (r.head.name = null);
                      (r.length = 0), (r.mode = 8);
                    case 8:
                      if (4096 & r.flags) {
                        if (0 === m) break t;
                        M = 0;
                        do {
                          (C = l[d + M++]), r.head && C && r.length < 65536 && (r.head.comment += String.fromCharCode(C));
                        } while (C && M < m);
                        if ((512 & r.flags && (r.check = s(r.check, l, M, d)), (m -= M), (d += M), C)) break t;
                      } else r.head && (r.head.comment = null);
                      r.mode = 9;
                    case 9:
                      if (512 & r.flags) {
                        for (; v < 16; ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        if (y !== (65535 & r.check)) {
                          (t.msg = 'header crc mismatch'), (r.mode = f);
                          break;
                        }
                        (y = 0), (v = 0);
                      }
                      r.head && ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)), (t.adler = r.check = 0), (r.mode = h);
                      break;
                    case 10:
                      for (; v < 32; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      (t.adler = r.check = c(y)), (y = 0), (v = 0), (r.mode = 11);
                    case 11:
                      if (0 === r.havedict)
                        return (t.next_out = g), (t.avail_out = _), (t.next_in = d), (t.avail_in = m), (r.hold = y), (r.bits = v), 2;
                      (t.adler = r.check = 1), (r.mode = h);
                    case h:
                      if (5 === e || 6 === e) break t;
                    case 13:
                      if (r.last) {
                        (y >>>= 7 & v), (v -= 7 & v), (r.mode = 27);
                        break;
                      }
                      for (; v < 3; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      switch (((r.last = 1 & y), (v -= 1), 3 & (y >>>= 1))) {
                        case 0:
                          r.mode = 14;
                          break;
                        case 1:
                          if ((b(r), (r.mode = 20), 6 === e)) {
                            (y >>>= 2), (v -= 2);
                            break t;
                          }
                          break;
                        case 2:
                          r.mode = 17;
                          break;
                        case 3:
                          (t.msg = 'invalid block type'), (r.mode = f);
                      }
                      (y >>>= 2), (v -= 2);
                      break;
                    case 14:
                      for (y >>>= 7 & v, v -= 7 & v; v < 32; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      if ((65535 & y) != ((y >>> 16) ^ 65535)) {
                        (t.msg = 'invalid stored block lengths'), (r.mode = f);
                        break;
                      }
                      if (((r.length = 65535 & y), (y = 0), (v = 0), (r.mode = 15), 6 === e)) break t;
                    case 15:
                      r.mode = 16;
                    case 16:
                      if ((M = r.length)) {
                        if ((M > m && (M = m), M > _ && (M = _), 0 === M)) break t;
                        n.arraySet(p, l, d, M, g), (m -= M), (d += M), (_ -= M), (g += M), (r.length -= M);
                        break;
                      }
                      r.mode = h;
                      break;
                    case 17:
                      for (; v < 14; ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      if (
                        ((r.nlen = 257 + (31 & y)),
                        (y >>>= 5),
                        (v -= 5),
                        (r.ndist = 1 + (31 & y)),
                        (y >>>= 5),
                        (v -= 5),
                        (r.ncode = 4 + (15 & y)),
                        (y >>>= 4),
                        (v -= 4),
                        r.nlen > 286 || r.ndist > 30)
                      ) {
                        (t.msg = 'too many length or distance symbols'), (r.mode = f);
                        break;
                      }
                      (r.have = 0), (r.mode = 18);
                    case 18:
                      for (; r.have < r.ncode; ) {
                        for (; v < 3; ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        (r.lens[z[r.have++]] = 7 & y), (y >>>= 3), (v -= 3);
                      }
                      for (; r.have < 19; ) r.lens[z[r.have++]] = 0;
                      if (
                        ((r.lencode = r.lendyn),
                        (r.lenbits = 7),
                        (k = { bits: r.lenbits }),
                        (N = o(0, r.lens, 0, 19, r.lencode, 0, r.work, k)),
                        (r.lenbits = k.bits),
                        N)
                      ) {
                        (t.msg = 'invalid code lengths set'), (r.mode = f);
                        break;
                      }
                      (r.have = 0), (r.mode = 19);
                    case 19:
                      for (; r.have < r.nlen + r.ndist; ) {
                        for (
                          ;
                          (S = ((U = r.lencode[y & ((1 << r.lenbits) - 1)]) >>> 16) & 255), (P = 65535 & U), !((T = U >>> 24) <= v);

                        ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        if (P < 16) (y >>>= T), (v -= T), (r.lens[r.have++] = P);
                        else {
                          if (16 === P) {
                            for (x = T + 2; v < x; ) {
                              if (0 === m) break t;
                              m--, (y += l[d++] << v), (v += 8);
                            }
                            if (((y >>>= T), (v -= T), 0 === r.have)) {
                              (t.msg = 'invalid bit length repeat'), (r.mode = f);
                              break;
                            }
                            (C = r.lens[r.have - 1]), (M = 3 + (3 & y)), (y >>>= 2), (v -= 2);
                          } else if (17 === P) {
                            for (x = T + 3; v < x; ) {
                              if (0 === m) break t;
                              m--, (y += l[d++] << v), (v += 8);
                            }
                            (v -= T), (C = 0), (M = 3 + (7 & (y >>>= T))), (y >>>= 3), (v -= 3);
                          } else {
                            for (x = T + 7; v < x; ) {
                              if (0 === m) break t;
                              m--, (y += l[d++] << v), (v += 8);
                            }
                            (v -= T), (C = 0), (M = 11 + (127 & (y >>>= T))), (y >>>= 7), (v -= 7);
                          }
                          if (r.have + M > r.nlen + r.ndist) {
                            (t.msg = 'invalid bit length repeat'), (r.mode = f);
                            break;
                          }
                          for (; M--; ) r.lens[r.have++] = C;
                        }
                      }
                      if (r.mode === f) break;
                      if (0 === r.lens[256]) {
                        (t.msg = 'invalid code -- missing end-of-block'), (r.mode = f);
                        break;
                      }
                      if (
                        ((r.lenbits = 9),
                        (k = { bits: r.lenbits }),
                        (N = o(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, k)),
                        (r.lenbits = k.bits),
                        N)
                      ) {
                        (t.msg = 'invalid literal/lengths set'), (r.mode = f);
                        break;
                      }
                      if (
                        ((r.distbits = 6),
                        (r.distcode = r.distdyn),
                        (k = { bits: r.distbits }),
                        (N = o(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, k)),
                        (r.distbits = k.bits),
                        N)
                      ) {
                        (t.msg = 'invalid distances set'), (r.mode = f);
                        break;
                      }
                      if (((r.mode = 20), 6 === e)) break t;
                    case 20:
                      r.mode = 21;
                    case 21:
                      if (m >= 6 && _ >= 258) {
                        (t.next_out = g),
                          (t.avail_out = _),
                          (t.next_in = d),
                          (t.avail_in = m),
                          (r.hold = y),
                          (r.bits = v),
                          a(t, E),
                          (g = t.next_out),
                          (p = t.output),
                          (_ = t.avail_out),
                          (d = t.next_in),
                          (l = t.input),
                          (m = t.avail_in),
                          (y = r.hold),
                          (v = r.bits),
                          r.mode === h && (r.back = -1);
                        break;
                      }
                      for (
                        r.back = 0;
                        (S = ((U = r.lencode[y & ((1 << r.lenbits) - 1)]) >>> 16) & 255), (P = 65535 & U), !((T = U >>> 24) <= v);

                      ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      if (S && 0 == (240 & S)) {
                        for (
                          R = T, D = S, O = P;
                          (S = ((U = r.lencode[O + ((y & ((1 << (R + D)) - 1)) >> R)]) >>> 16) & 255),
                            (P = 65535 & U),
                            !(R + (T = U >>> 24) <= v);

                        ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        (y >>>= R), (v -= R), (r.back += R);
                      }
                      if (((y >>>= T), (v -= T), (r.back += T), (r.length = P), 0 === S)) {
                        r.mode = 26;
                        break;
                      }
                      if (32 & S) {
                        (r.back = -1), (r.mode = h);
                        break;
                      }
                      if (64 & S) {
                        (t.msg = 'invalid literal/length code'), (r.mode = f);
                        break;
                      }
                      (r.extra = 15 & S), (r.mode = 22);
                    case 22:
                      if (r.extra) {
                        for (x = r.extra; v < x; ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        (r.length += y & ((1 << r.extra) - 1)), (y >>>= r.extra), (v -= r.extra), (r.back += r.extra);
                      }
                      (r.was = r.length), (r.mode = 23);
                    case 23:
                      for (
                        ;
                        (S = ((U = r.distcode[y & ((1 << r.distbits) - 1)]) >>> 16) & 255), (P = 65535 & U), !((T = U >>> 24) <= v);

                      ) {
                        if (0 === m) break t;
                        m--, (y += l[d++] << v), (v += 8);
                      }
                      if (0 == (240 & S)) {
                        for (
                          R = T, D = S, O = P;
                          (S = ((U = r.distcode[O + ((y & ((1 << (R + D)) - 1)) >> R)]) >>> 16) & 255),
                            (P = 65535 & U),
                            !(R + (T = U >>> 24) <= v);

                        ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        (y >>>= R), (v -= R), (r.back += R);
                      }
                      if (((y >>>= T), (v -= T), (r.back += T), 64 & S)) {
                        (t.msg = 'invalid distance code'), (r.mode = f);
                        break;
                      }
                      (r.offset = P), (r.extra = 15 & S), (r.mode = 24);
                    case 24:
                      if (r.extra) {
                        for (x = r.extra; v < x; ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        (r.offset += y & ((1 << r.extra) - 1)), (y >>>= r.extra), (v -= r.extra), (r.back += r.extra);
                      }
                      if (r.offset > r.dmax) {
                        (t.msg = 'invalid distance too far back'), (r.mode = f);
                        break;
                      }
                      r.mode = 25;
                    case 25:
                      if (0 === _) break t;
                      if (((M = E - _), r.offset > M)) {
                        if ((M = r.offset - M) > r.whave && r.sane) {
                          (t.msg = 'invalid distance too far back'), (r.mode = f);
                          break;
                        }
                        M > r.wnext ? ((M -= r.wnext), (A = r.wsize - M)) : (A = r.wnext - M),
                          M > r.length && (M = r.length),
                          (B = r.window);
                      } else (B = p), (A = g - r.offset), (M = r.length);
                      M > _ && (M = _), (_ -= M), (r.length -= M);
                      do {
                        p[g++] = B[A++];
                      } while (--M);
                      0 === r.length && (r.mode = 21);
                      break;
                    case 26:
                      if (0 === _) break t;
                      (p[g++] = r.length), _--, (r.mode = 21);
                      break;
                    case 27:
                      if (r.wrap) {
                        for (; v < 32; ) {
                          if (0 === m) break t;
                          m--, (y |= l[d++] << v), (v += 8);
                        }
                        if (
                          ((E -= _),
                          (t.total_out += E),
                          (r.total += E),
                          E && (t.adler = r.check = r.flags ? s(r.check, p, E, g - E) : i(r.check, p, E, g - E)),
                          (E = _),
                          (r.flags ? y : c(y)) !== r.check)
                        ) {
                          (t.msg = 'incorrect data check'), (r.mode = f);
                          break;
                        }
                        (y = 0), (v = 0);
                      }
                      r.mode = 28;
                    case 28:
                      if (r.wrap && r.flags) {
                        for (; v < 32; ) {
                          if (0 === m) break t;
                          m--, (y += l[d++] << v), (v += 8);
                        }
                        if (y !== (4294967295 & r.total)) {
                          (t.msg = 'incorrect length check'), (r.mode = f);
                          break;
                        }
                        (y = 0), (v = 0);
                      }
                      r.mode = 29;
                    case 29:
                      N = 1;
                      break t;
                    case f:
                      N = -3;
                      break t;
                    case 31:
                      return -4;
                    default:
                      return u;
                  }
                return (
                  (t.next_out = g),
                  (t.avail_out = _),
                  (t.next_in = d),
                  (t.avail_in = m),
                  (r.hold = y),
                  (r.bits = v),
                  (r.wsize || (E !== t.avail_out && r.mode < f && (r.mode < 27 || 4 !== e))) && I(t, t.output, t.next_out, E - t.avail_out)
                    ? ((r.mode = 31), -4)
                    : ((w -= t.avail_in),
                      (E -= t.avail_out),
                      (t.total_in += w),
                      (t.total_out += E),
                      (r.total += E),
                      r.wrap && E && (t.adler = r.check = r.flags ? s(r.check, p, E, t.next_out - E) : i(r.check, p, E, t.next_out - E)),
                      (t.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === h ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0)),
                      ((0 === w && 0 === E) || 4 === e) && 0 === N && (N = -5),
                      N)
                );
              }),
              (e.inflateEnd = function (t) {
                if (!t || !t.state) return u;
                var e = t.state;
                return e.window && (e.window = null), (t.state = null), 0;
              }),
              (e.inflateGetHeader = function (t, e) {
                var r;
                return t && t.state ? (0 == (2 & (r = t.state).wrap) ? u : ((r.head = e), (e.done = !1), 0)) : u;
              }),
              (e.inflateSetDictionary = function (t, e) {
                var r,
                  n = e.length;
                return t && t.state
                  ? 0 !== (r = t.state).wrap && 11 !== r.mode
                    ? u
                    : 11 === r.mode && i(1, e, n, 0) !== r.check
                    ? -3
                    : I(t, e, n, n)
                    ? ((r.mode = 31), -4)
                    : ((r.havedict = 1), 0)
                  : u;
              }),
              (e.inflateInfo = 'pako inflate (from Nodeca project)');
          },
          881: (t, e, r) => {
            var n = r(761),
              i = 15,
              s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
              a = [
                16,
                16,
                16,
                16,
                16,
                16,
                16,
                16,
                17,
                17,
                17,
                17,
                18,
                18,
                18,
                18,
                19,
                19,
                19,
                19,
                20,
                20,
                20,
                20,
                21,
                21,
                21,
                21,
                16,
                72,
                78,
              ],
              o = [
                1,
                2,
                3,
                4,
                5,
                7,
                9,
                13,
                17,
                25,
                33,
                49,
                65,
                97,
                129,
                193,
                257,
                385,
                513,
                769,
                1025,
                1537,
                2049,
                3073,
                4097,
                6145,
                8193,
                12289,
                16385,
                24577,
                0,
                0,
              ],
              u = [
                16,
                16,
                16,
                16,
                17,
                17,
                18,
                18,
                19,
                19,
                20,
                20,
                21,
                21,
                22,
                22,
                23,
                23,
                24,
                24,
                25,
                25,
                26,
                26,
                27,
                27,
                28,
                28,
                29,
                29,
                64,
                64,
              ];
            t.exports = function (t, e, r, h, f, c, l, p) {
              var d,
                g,
                m,
                _,
                y,
                v,
                b,
                I,
                w,
                E = p.bits,
                M = 0,
                A = 0,
                B = 0,
                T = 0,
                S = 0,
                P = 0,
                R = 0,
                D = 0,
                O = 0,
                C = 0,
                N = null,
                k = 0,
                x = new n.Buf16(16),
                U = new n.Buf16(16),
                j = null,
                z = 0;
              for (M = 0; M <= i; M++) x[M] = 0;
              for (A = 0; A < h; A++) x[e[r + A]]++;
              for (S = E, T = i; T >= 1 && 0 === x[T]; T--);
              if ((S > T && (S = T), 0 === T)) return (f[c++] = 20971520), (f[c++] = 20971520), (p.bits = 1), 0;
              for (B = 1; B < T && 0 === x[B]; B++);
              for (S < B && (S = B), D = 1, M = 1; M <= i; M++) if (((D <<= 1), (D -= x[M]) < 0)) return -1;
              if (D > 0 && (0 === t || 1 !== T)) return -1;
              for (U[1] = 0, M = 1; M < i; M++) U[M + 1] = U[M] + x[M];
              for (A = 0; A < h; A++) 0 !== e[r + A] && (l[U[e[r + A]]++] = A);
              if (
                (0 === t
                  ? ((N = j = l), (v = 19))
                  : 1 === t
                  ? ((N = s), (k -= 257), (j = a), (z -= 257), (v = 256))
                  : ((N = o), (j = u), (v = -1)),
                (C = 0),
                (A = 0),
                (M = B),
                (y = c),
                (P = S),
                (R = 0),
                (m = -1),
                (_ = (O = 1 << S) - 1),
                (1 === t && O > 852) || (2 === t && O > 592))
              )
                return 1;
              for (;;) {
                (b = M - R),
                  l[A] < v ? ((I = 0), (w = l[A])) : l[A] > v ? ((I = j[z + l[A]]), (w = N[k + l[A]])) : ((I = 96), (w = 0)),
                  (d = 1 << (M - R)),
                  (B = g = 1 << P);
                do {
                  f[y + (C >> R) + (g -= d)] = (b << 24) | (I << 16) | w | 0;
                } while (0 !== g);
                for (d = 1 << (M - 1); C & d; ) d >>= 1;
                if ((0 !== d ? ((C &= d - 1), (C += d)) : (C = 0), A++, 0 == --x[M])) {
                  if (M === T) break;
                  M = e[r + l[A]];
                }
                if (M > S && (C & _) !== m) {
                  for (0 === R && (R = S), y += B, D = 1 << (P = M - R); P + R < T && !((D -= x[P + R]) <= 0); ) P++, (D <<= 1);
                  if (((O += 1 << P), (1 === t && O > 852) || (2 === t && O > 592))) return 1;
                  f[(m = C & _)] = (S << 24) | (P << 16) | (y - c) | 0;
                }
              }
              return 0 !== C && (f[y + C] = ((M - R) << 24) | (64 << 16) | 0), (p.bits = S), 0;
            };
          },
          950: (t) => {
            t.exports = {
              2: 'need dictionary',
              1: 'stream end',
              0: '',
              '-1': 'file error',
              '-2': 'stream error',
              '-3': 'data error',
              '-4': 'insufficient memory',
              '-5': 'buffer error',
              '-6': 'incompatible version',
            };
          },
          564: (t, e, r) => {
            var n = r(761);
            function i(t) {
              for (var e = t.length; --e >= 0; ) t[e] = 0;
            }
            var s = 256,
              a = 286,
              o = 30,
              u = 15,
              h = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
              f = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
              c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
              l = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
              p = new Array(576);
            i(p);
            var d = new Array(60);
            i(d);
            var g = new Array(512);
            i(g);
            var m = new Array(256);
            i(m);
            var _ = new Array(29);
            i(_);
            var y,
              v,
              b,
              I = new Array(o);
            function w(t, e, r, n, i) {
              (this.static_tree = t),
                (this.extra_bits = e),
                (this.extra_base = r),
                (this.elems = n),
                (this.max_length = i),
                (this.has_stree = t && t.length);
            }
            function E(t, e) {
              (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
            }
            function M(t) {
              return t < 256 ? g[t] : g[256 + (t >>> 7)];
            }
            function A(t, e) {
              (t.pending_buf[t.pending++] = 255 & e), (t.pending_buf[t.pending++] = (e >>> 8) & 255);
            }
            function B(t, e, r) {
              t.bi_valid > 16 - r
                ? ((t.bi_buf |= (e << t.bi_valid) & 65535), A(t, t.bi_buf), (t.bi_buf = e >> (16 - t.bi_valid)), (t.bi_valid += r - 16))
                : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += r));
            }
            function T(t, e, r) {
              B(t, r[2 * e], r[2 * e + 1]);
            }
            function S(t, e) {
              var r = 0;
              do {
                (r |= 1 & t), (t >>>= 1), (r <<= 1);
              } while (--e > 0);
              return r >>> 1;
            }
            function P(t, e, r) {
              var n,
                i,
                s = new Array(16),
                a = 0;
              for (n = 1; n <= u; n++) s[n] = a = (a + r[n - 1]) << 1;
              for (i = 0; i <= e; i++) {
                var o = t[2 * i + 1];
                0 !== o && (t[2 * i] = S(s[o]++, o));
              }
            }
            function R(t) {
              var e;
              for (e = 0; e < a; e++) t.dyn_ltree[2 * e] = 0;
              for (e = 0; e < o; e++) t.dyn_dtree[2 * e] = 0;
              for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
              (t.dyn_ltree[512] = 1), (t.opt_len = t.static_len = 0), (t.last_lit = t.matches = 0);
            }
            function D(t) {
              t.bi_valid > 8 ? A(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0);
            }
            function O(t, e, r, n) {
              var i = 2 * e,
                s = 2 * r;
              return t[i] < t[s] || (t[i] === t[s] && n[e] <= n[r]);
            }
            function C(t, e, r) {
              for (
                var n = t.heap[r], i = r << 1;
                i <= t.heap_len && (i < t.heap_len && O(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !O(e, n, t.heap[i], t.depth));

              )
                (t.heap[r] = t.heap[i]), (r = i), (i <<= 1);
              t.heap[r] = n;
            }
            function N(t, e, r) {
              var n,
                i,
                a,
                o,
                u = 0;
              if (0 !== t.last_lit)
                do {
                  (n = (t.pending_buf[t.d_buf + 2 * u] << 8) | t.pending_buf[t.d_buf + 2 * u + 1]),
                    (i = t.pending_buf[t.l_buf + u]),
                    u++,
                    0 === n
                      ? T(t, i, e)
                      : (T(t, (a = m[i]) + s + 1, e),
                        0 !== (o = h[a]) && B(t, (i -= _[a]), o),
                        T(t, (a = M(--n)), r),
                        0 !== (o = f[a]) && B(t, (n -= I[a]), o));
                } while (u < t.last_lit);
              T(t, 256, e);
            }
            function k(t, e) {
              var r,
                n,
                i,
                s = e.dyn_tree,
                a = e.stat_desc.static_tree,
                o = e.stat_desc.has_stree,
                h = e.stat_desc.elems,
                f = -1;
              for (t.heap_len = 0, t.heap_max = 573, r = 0; r < h; r++)
                0 !== s[2 * r] ? ((t.heap[++t.heap_len] = f = r), (t.depth[r] = 0)) : (s[2 * r + 1] = 0);
              for (; t.heap_len < 2; )
                (s[2 * (i = t.heap[++t.heap_len] = f < 2 ? ++f : 0)] = 1),
                  (t.depth[i] = 0),
                  t.opt_len--,
                  o && (t.static_len -= a[2 * i + 1]);
              for (e.max_code = f, r = t.heap_len >> 1; r >= 1; r--) C(t, s, r);
              i = h;
              do {
                (r = t.heap[1]),
                  (t.heap[1] = t.heap[t.heap_len--]),
                  C(t, s, 1),
                  (n = t.heap[1]),
                  (t.heap[--t.heap_max] = r),
                  (t.heap[--t.heap_max] = n),
                  (s[2 * i] = s[2 * r] + s[2 * n]),
                  (t.depth[i] = (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1),
                  (s[2 * r + 1] = s[2 * n + 1] = i),
                  (t.heap[1] = i++),
                  C(t, s, 1);
              } while (t.heap_len >= 2);
              (t.heap[--t.heap_max] = t.heap[1]),
                (function (t, e) {
                  var r,
                    n,
                    i,
                    s,
                    a,
                    o,
                    h = e.dyn_tree,
                    f = e.max_code,
                    c = e.stat_desc.static_tree,
                    l = e.stat_desc.has_stree,
                    p = e.stat_desc.extra_bits,
                    d = e.stat_desc.extra_base,
                    g = e.stat_desc.max_length,
                    m = 0;
                  for (s = 0; s <= u; s++) t.bl_count[s] = 0;
                  for (h[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < 573; r++)
                    (s = h[2 * h[2 * (n = t.heap[r]) + 1] + 1] + 1) > g && ((s = g), m++),
                      (h[2 * n + 1] = s),
                      n > f ||
                        (t.bl_count[s]++,
                        (a = 0),
                        n >= d && (a = p[n - d]),
                        (o = h[2 * n]),
                        (t.opt_len += o * (s + a)),
                        l && (t.static_len += o * (c[2 * n + 1] + a)));
                  if (0 !== m) {
                    do {
                      for (s = g - 1; 0 === t.bl_count[s]; ) s--;
                      t.bl_count[s]--, (t.bl_count[s + 1] += 2), t.bl_count[g]--, (m -= 2);
                    } while (m > 0);
                    for (s = g; 0 !== s; s--)
                      for (n = t.bl_count[s]; 0 !== n; )
                        (i = t.heap[--r]) > f ||
                          (h[2 * i + 1] !== s && ((t.opt_len += (s - h[2 * i + 1]) * h[2 * i]), (h[2 * i + 1] = s)), n--);
                  }
                })(t, e),
                P(s, f, t.bl_count);
            }
            function x(t, e, r) {
              var n,
                i,
                s = -1,
                a = e[1],
                o = 0,
                u = 7,
                h = 4;
              for (0 === a && ((u = 138), (h = 3)), e[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++)
                (i = a),
                  (a = e[2 * (n + 1) + 1]),
                  (++o < u && i === a) ||
                    (o < h
                      ? (t.bl_tree[2 * i] += o)
                      : 0 !== i
                      ? (i !== s && t.bl_tree[2 * i]++, t.bl_tree[32]++)
                      : o <= 10
                      ? t.bl_tree[34]++
                      : t.bl_tree[36]++,
                    (o = 0),
                    (s = i),
                    0 === a ? ((u = 138), (h = 3)) : i === a ? ((u = 6), (h = 3)) : ((u = 7), (h = 4)));
            }
            function U(t, e, r) {
              var n,
                i,
                s = -1,
                a = e[1],
                o = 0,
                u = 7,
                h = 4;
              for (0 === a && ((u = 138), (h = 3)), n = 0; n <= r; n++)
                if (((i = a), (a = e[2 * (n + 1) + 1]), !(++o < u && i === a))) {
                  if (o < h)
                    do {
                      T(t, i, t.bl_tree);
                    } while (0 != --o);
                  else
                    0 !== i
                      ? (i !== s && (T(t, i, t.bl_tree), o--), T(t, 16, t.bl_tree), B(t, o - 3, 2))
                      : o <= 10
                      ? (T(t, 17, t.bl_tree), B(t, o - 3, 3))
                      : (T(t, 18, t.bl_tree), B(t, o - 11, 7));
                  (o = 0), (s = i), 0 === a ? ((u = 138), (h = 3)) : i === a ? ((u = 6), (h = 3)) : ((u = 7), (h = 4));
                }
            }
            i(I);
            var j = !1;
            function z(t, e, r, i) {
              B(t, 0 + (i ? 1 : 0), 3),
                (function (t, e, r, i) {
                  D(t), i && (A(t, r), A(t, ~r)), n.arraySet(t.pending_buf, t.window, e, r, t.pending), (t.pending += r);
                })(t, e, r, !0);
            }
            (e.p = function (t) {
              j ||
                ((function () {
                  var t,
                    e,
                    r,
                    n,
                    i,
                    s = new Array(16);
                  for (r = 0, n = 0; n < 28; n++) for (_[n] = r, t = 0; t < 1 << h[n]; t++) m[r++] = n;
                  for (m[r - 1] = n, i = 0, n = 0; n < 16; n++) for (I[n] = i, t = 0; t < 1 << f[n]; t++) g[i++] = n;
                  for (i >>= 7; n < o; n++) for (I[n] = i << 7, t = 0; t < 1 << (f[n] - 7); t++) g[256 + i++] = n;
                  for (e = 0; e <= u; e++) s[e] = 0;
                  for (t = 0; t <= 143; ) (p[2 * t + 1] = 8), t++, s[8]++;
                  for (; t <= 255; ) (p[2 * t + 1] = 9), t++, s[9]++;
                  for (; t <= 279; ) (p[2 * t + 1] = 7), t++, s[7]++;
                  for (; t <= 287; ) (p[2 * t + 1] = 8), t++, s[8]++;
                  for (P(p, 287, s), t = 0; t < o; t++) (d[2 * t + 1] = 5), (d[2 * t] = S(t, 5));
                  (y = new w(p, h, 257, a, u)), (v = new w(d, f, 0, o, u)), (b = new w(new Array(0), c, 0, 19, 7));
                })(),
                (j = !0)),
                (t.l_desc = new E(t.dyn_ltree, y)),
                (t.d_desc = new E(t.dyn_dtree, v)),
                (t.bl_desc = new E(t.bl_tree, b)),
                (t.bi_buf = 0),
                (t.bi_valid = 0),
                R(t);
            }),
              (e.m = z),
              (e.h = function (t, e, r, n) {
                var i,
                  a,
                  o = 0;
                t.level > 0
                  ? (2 === t.strm.data_type &&
                      (t.strm.data_type = (function (t) {
                        var e,
                          r = 4093624447;
                        for (e = 0; e <= 31; e++, r >>>= 1) if (1 & r && 0 !== t.dyn_ltree[2 * e]) return 0;
                        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                        for (e = 32; e < s; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
                        return 0;
                      })(t)),
                    k(t, t.l_desc),
                    k(t, t.d_desc),
                    (o = (function (t) {
                      var e;
                      for (
                        x(t, t.dyn_ltree, t.l_desc.max_code), x(t, t.dyn_dtree, t.d_desc.max_code), k(t, t.bl_desc), e = 18;
                        e >= 3 && 0 === t.bl_tree[2 * l[e] + 1];
                        e--
                      );
                      return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                    })(t)),
                    (i = (t.opt_len + 3 + 7) >>> 3),
                    (a = (t.static_len + 3 + 7) >>> 3) <= i && (i = a))
                  : (i = a = r + 5),
                  r + 4 <= i && -1 !== e
                    ? z(t, e, r, n)
                    : 4 === t.strategy || a === i
                    ? (B(t, 2 + (n ? 1 : 0), 3), N(t, p, d))
                    : (B(t, 4 + (n ? 1 : 0), 3),
                      (function (t, e, r, n) {
                        var i;
                        for (B(t, e - 257, 5), B(t, r - 1, 5), B(t, n - 4, 4), i = 0; i < n; i++) B(t, t.bl_tree[2 * l[i] + 1], 3);
                        U(t, t.dyn_ltree, e - 1), U(t, t.dyn_dtree, r - 1);
                      })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1),
                      N(t, t.dyn_ltree, t.dyn_dtree)),
                  R(t),
                  n && D(t);
              }),
              (e.l = function (t, e, r) {
                return (
                  (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
                  (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                  (t.pending_buf[t.l_buf + t.last_lit] = 255 & r),
                  t.last_lit++,
                  0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[2 * (m[r] + s + 1)]++, t.dyn_dtree[2 * M(e)]++),
                  t.last_lit === t.lit_bufsize - 1
                );
              }),
              (e.g = function (t) {
                B(t, 2, 3),
                  T(t, 256, p),
                  (function (t) {
                    16 === t.bi_valid
                      ? (A(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                      : t.bi_valid >= 8 && ((t.pending_buf[t.pending++] = 255 & t.bi_buf), (t.bi_buf >>= 8), (t.bi_valid -= 8));
                  })(t);
              });
          },
          744: (t) => {
            t.exports = function () {
              (this.input = null),
                (this.next_in = 0),
                (this.avail_in = 0),
                (this.total_in = 0),
                (this.output = null),
                (this.next_out = 0),
                (this.avail_out = 0),
                (this.total_out = 0),
                (this.msg = ''),
                (this.state = null),
                (this.data_type = 2),
                (this.adler = 0);
            };
          },
          347: (t, e, r) => {
            var n, i;
            r.d(e, { s: () => n, S: () => i }),
              (function (t) {
                (t[(t.Inport = 0)] = 'Inport'), (t[(t.Outport = 1)] = 'Outport'), (t[(t.Undefined = 2)] = 'Undefined');
              })(n || (n = {})),
              (function (t) {
                (t[(t.STOPPED = 0)] = 'STOPPED'), (t[(t.RUNNING = 1)] = 'RUNNING');
              })(i || (i = {}));
          },
          676: (t, e, r) => {
            r.d(e, { D: () => n });
            const n = 0;
          },
          641: (t, e, r) => {
            var n;
            r.d(e, { OM: () => a, Le: () => s, nc: () => i, n_: () => o }),
              (function (t) {
                (t[(t.Float32Audio = 0)] = 'Float32Audio'), (t[(t.TypedArray = 1)] = 'TypedArray');
              })(n || (n = {}));
            class i {
              constructor() {
                this.type = n.TypedArray;
              }
              serialize() {
                return { type: this.type };
              }
            }
            class s {
              constructor(t, e) {
                (this.channels = 0), (this.sampleRate = 0), (this.type = n.Float32Audio), (this.channels = t), (this.sampleRate = e);
              }
              static fromAudioBuffer(t) {
                return new s(t.numberOfChannels, t.sampleRate);
              }
              get isInterleaved() {
                return !0;
              }
              serialize() {
                return { channels: this.channels, sampleRate: this.sampleRate, type: this.type };
              }
            }
            class a {
              constructor(t, e) {
                (this.buffer = t), (this._ = e);
              }
              getAsAudioBuffer(t) {
                if (this._ instanceof s && this._.channels > 0) {
                  const e = new Float32Array(this.buffer),
                    r = e.length / this._.channels,
                    n = t.createBuffer(this._.channels, r, this._.sampleRate);
                  for (let t = 0; t < this._.channels; t++) {
                    const r = n.getChannelData(t);
                    for (let i = 0, s = r.length; i < s; i++) r[i] = e[i * n.numberOfChannels + t];
                  }
                  return n;
                }
                const e = new Float32Array(this.buffer),
                  r = t.createBuffer(1, e.length, t.sampleRate);
                return r.copyToChannel(e, 0), r;
              }
            }
            const o = (t) => {
              switch (t.type) {
                case n.Float32Audio:
                  return new s(t.channels, t.sampleRate);
                case n.TypedArray:
                  return new i();
                default:
                  throw new Error(`Unable to deserialize RNBODataDesc of type ${t.type}`);
              }
            };
          },
          191: (t, e, r) => {
            r.d(e, { v: () => o });
            var n = r(163),
              i = r(347),
              s = r(389),
              a = r(133);
            class o {
              constructor() {
                (this.I = 0),
                  (this.M = 44100),
                  (this.A = 64),
                  (this.outgoingEvent = new s.BM()),
                  (this.parameterChangeEvent = new s.BM()),
                  (this.B = this.sampsToMs(this.A));
              }
              static getNonConversionObject() {
                return {
                  applyStepsToNormalizedParameterValue: function (t) {
                    return t;
                  },
                  convertToNormalizedParameterValue: function (t) {
                    return t;
                  },
                  convertFromNormalizedParameterValue: function (t) {
                    return t;
                  },
                  getNumParameters: function () {
                    return 0;
                  },
                  constrainParameterValue: function (t) {
                    return t;
                  },
                  isPolyphonic: !1,
                  subpatches: [],
                };
              }
              static deserializeConversion(t) {
                if (t) {
                  const e = {},
                    r = Object.keys(t);
                  for (let n = 0; n < r.length; n++) {
                    const i = r[n];
                    if ('subpatches' === i) {
                      const r = Object.keys(t.subpatches);
                      for (let n = 0; n < r.length; n++) {
                        const i = r[n],
                          s = t.subpatches[i],
                          a = o.deserializeConversion(s);
                        s.isPolyphonic ? (e[i] = [a]) : (e[i] = a);
                      }
                    } else e[i] = a.evalFunction(t[i]);
                  }
                  return e;
                }
                return this.getNonConversionObject();
              }
              getSampleRate() {
                return this.M;
              }
              getSamplesPerBlock() {
                return this.A;
              }
              sampsToMs(t) {
                return (t / this.M) * 1e3;
              }
              getNumInputChannels() {
                return this.T ? this.T.numInputChannels : 0;
              }
              getNumOutputChannels() {
                return this.T ? this.T.numOutputChannels : 0;
              }
              getNumMIDIInputPorts() {
                return this.T ? this.T.numMidiInputPorts : 0;
              }
              getNumMIDIOutputPorts() {
                return this.T ? this.T.numMidiOutputPorts : 0;
              }
              getNumParameters() {
                return this.T ? this.T.numParameters : 0;
              }
              getNumSignalInParameters() {
                return this.T ? this.T.numSignalInParameters : 0;
              }
              getNumSignalOutParameters() {
                return this.T ? this.T.numSignalOutParameters : 0;
              }
              getPatcherSerial() {
                return void 0 !== this.T ? this.T.patcherSerial : 0;
              }
              getParameterName(t) {
                if (!this.T || t >= this.T.parameters.length) throw new Error(`Parameter index ${t} out of bounds.`);
                return this.T.parameters[t].name;
              }
              getParameterId(t) {
                if (!this.T || t >= this.T.parameters.length) throw new Error(`Parameter index ${t} out of bounds.`);
                return this.T.parameters[t].paramId;
              }
              getParameterToNormalizedFunction(t) {
                return (e) => this.P.convertToNormalizedParameterValue(t, e);
              }
              getParameterFromNormalizedFunction(t) {
                return (e) => this.P.convertFromNormalizedParameterValue(t, e);
              }
              constrainParameterValue(t) {
                return (e) => this.P.constrainParameterValue(t, e);
              }
              getParameterInfo(t) {
                if (!this.T || t >= this.T.parameters.length) throw new Error(`Parameter index ${t} out of bounds.`);
                const e = this.T.parameters[t];
                let r, n;
                switch (e.type) {
                  case 'ParameterTypeBang':
                    n = a.ParameterTypeBang;
                    break;
                  case 'ParameterTypeCount':
                    n = a.ParameterTypeCount;
                    break;
                  case 'ParameterTypeList':
                    n = a.ParameterTypeList;
                    break;
                  case 'ParameterTypeNumber':
                    n = a.ParameterTypeNumber;
                    break;
                  case 'ParameterTypeSignal':
                    n = a.ParameterTypeSignal;
                    break;
                  default:
                    throw new Error(`Unknown Parameter Type from patcher description ${e.type}`);
                }
                switch (e.ioType) {
                  case 'IOTypeInput':
                    r = a.IOTypeInput;
                    break;
                  case 'IOTypeOutput':
                    r = a.IOTypeOutput;
                    break;
                  case 'IOTypeUndefined':
                    r = a.IOTypeUndefined;
                    break;
                  default:
                    throw new Error(`Unknown Parameter IOType from patcher description ${e.type}`);
                }
                return {
                  displayName: e.displayName,
                  enumValues: e.enumValues,
                  exponent: e.exponent,
                  id: e.paramId,
                  index: t,
                  initialValue: e.initialValue,
                  ioType: r,
                  isEnum: e.isEnum,
                  max: e.maximum,
                  min: e.minimum,
                  name: e.name,
                  signalIndex: e.signalIndex,
                  steps: e.steps,
                  type: n,
                  unit: e.unit,
                  visible: e.visible,
                };
              }
              getNumExternalDataRefs() {
                return void 0 !== this.T ? this.T.externalDataRefs.length : 0;
              }
              getExternalDataId(t) {
                return void 0 !== this.T ? this.T.externalDataRefs[t].id : '';
              }
              getExternalDataRefIds() {
                let t;
                return (
                  this.T &&
                    ((t = []),
                    Object.keys(this.T.externalDataRefs).forEach((e) => {
                      let r = this.T.externalDataRefs[e];
                      t.push(r.id);
                    })),
                  t
                );
              }
              getExternalDataRefInfos() {
                return void 0 !== this.T ? this.T.externalDataRefs : [];
              }
              getNumMessages() {
                return void 0 !== this.T ? this.T.inports.length + this.T.outports.length : 0;
              }
              getMessageInfos() {
                let t = [];
                return (
                  void 0 !== this.T &&
                    (Object.keys(this.T.outports).forEach((e) => {
                      t.push({ tag: this.T.outports[e].tag, type: i.s.Outport, meta: this.T.outports[e].meta });
                    }),
                    Object.keys(this.T.inports).forEach((e) => {
                      t.push({ tag: this.T.inports[e].tag, type: i.s.Inport, meta: this.T.inports[e].meta });
                    })),
                  t
                );
              }
              removeAllSubscriptions() {
                this.outgoingEvent.removeAllSubscriptions(), this.parameterChangeEvent.removeAllSubscriptions();
              }
              setPatcherDesc(t) {
                return (0, n.mG)(this, void 0, void 0, function* () {
                  (this.T = t), (this.P = o.deserializeConversion(this.T.paramConversion));
                });
              }
            }
          },
          916: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { s: () => WASMEngine });
            var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163),
              _baseEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191),
              _wasmHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158),
              _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);
            class WASMEngine extends _baseEngine__WEBPACK_IMPORTED_MODULE_0__.v {
              getCurrentTime() {
                return this.R.getCurrentTime();
              }
              setCurrentTime(t) {
                this.R.isReady() && this.R.setCurrentTime(t);
              }
              prepareToProcess(t, e, r) {
                (r || t !== this.M || e !== this.A) && this.R.prepareToProcess(t, e);
              }
              process(t, e, r, n, i, s, a) {
                this.R.process(t, e, r, n, i);
              }
              scheduleMidiEvent(t, e) {
                this.scheduleEvent(new _event__WEBPACK_IMPORTED_MODULE_2__.Ym(this.I, t, e));
              }
              handleParameterEvent(t) {
                this.parameterChangeEvent.emit(new _event__WEBPACK_IMPORTED_MODULE_2__.DB(t.time, t.index, t.value, t.source));
              }
              handleMidiEvent(t) {
                this.outgoingEvent.emit(new _event__WEBPACK_IMPORTED_MODULE_2__.Ym(t.time, t.port, [t.b1, t.b2, t.b3], void 0));
              }
              handleMessageEvent(t) {
                this.outgoingEvent.emit(
                  new _event__WEBPACK_IMPORTED_MODULE_2__.f3(
                    t.time,
                    this.R.resolveTag(t.tag),
                    0 === t.type ? t.numValue : 1 === t.type ? this.R.retrieveArray(t.listValue) : void 0,
                    this.R.resolveTag(t.objectId)
                  )
                );
              }
              handlePresetEvent(t) {
                this.outgoingEvent.emit(new _event__WEBPACK_IMPORTED_MODULE_2__.bt(t.time, _event__WEBPACK_IMPORTED_MODULE_2__.l0.Touched));
              }
              getParameterValue(t) {
                return this.R.getParameterValue(t);
              }
              get isSync() {
                return !0;
              }
              scheduleEvent(t) {
                this.R.scheduleEvent(t);
              }
              setPatcherCode(code) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                  return new Promise((resolve, reject) => {
                    let restoredRnboModule;
                    const restoredWASM = code + 'restoredRnboModule = rnbo_module;';
                    eval(restoredWASM),
                      restoredRnboModule().then(
                        (t) => (delete t.then, (this.R = new _wasmHelper__WEBPACK_IMPORTED_MODULE_1__.z(this, t)), resolve())
                      );
                  });
                });
              }
              setExternalData(t, e, r) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                  this.R.setExternalData(t, e, r);
                });
              }
              releaseExternalData(t) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                  const [e, r] = this.R.releaseExternalData(t);
                  return { data: e, typeDesc: r };
                });
              }
              getPreset() {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, function* () {
                  return JSON.parse(this.R.getPreset());
                });
              }
              setPreset(t) {
                this.R.setPreset(JSON.stringify(t));
              }
            }
          },
          158: (t, e, r) => {
            r.d(e, { z: () => a });
            var n = r(641),
              i = r(555),
              s = r(856);
            class a {
              constructor(t, e) {
                (this.O = 0), (this.C = 0), (this.N = !1), (this.k = new s.aO()), (this.U = e);
                let r = new this.U.CoreObject();
                this.j = r;
                let n = {
                    handleParameterEvent: t.handleParameterEvent.bind(t),
                    handleMidiEvent: t.handleMidiEvent.bind(t),
                    handleMessageEvent: t.handleMessageEvent.bind(t),
                    handlePresetEvent: t.handlePresetEvent.bind(t),
                  },
                  i = this.U.EventHandler.implement(n);
                this.F = r.createParameterInterface(i);
                for (let t = 0; t < r.getNumParameters(); t++) {
                  let e = r.getParameterInfo(t);
                  this.k.addParam(e, r.getParameterName(t));
                }
                (this.O = r.getNumInputChannels() + r.getNumSignalInParameters()), (this.C = r.getNumOutputChannels()), (this.N = !0);
              }
              isReady() {
                return this.N;
              }
              pushArray(t) {
                let e = this.j.getArrayPassingHEAP(t.length);
                return this.U.HEAPF64.set(t, e >> 3), e;
              }
              retrieveArray(t) {
                let e = [];
                for (let r = 0; r < t.size(); r++) e.push(t.get(r));
                return e;
              }
              setExternalData(t, e, r) {
                const i = new Uint8Array(e),
                  s = this.j.getNewMemoryBuffer(i.byteLength);
                this.U.HEAPU8.set(i, s),
                  r instanceof n.Le
                    ? this.j.setExternalAudioBuffer(t, s, i.byteLength, r.channels, r.sampleRate)
                    : r instanceof n.nc && this.j.setExternalUntypedBuffer(t, s, i.byteLength);
              }
              releaseExternalData(t) {
                let e,
                  r = this.j.getDataRefIndex(t),
                  i = this.j.getDataRefType(r),
                  s = this.j.getDataRefData(r),
                  a = new Uint8Array(s.sizeInBytes);
                return (
                  a.set(this.U.HEAPU8.subarray(s.data, s.data + s.sizeInBytes)),
                  (e = 1 == i.type ? new n.Le(i.channels, i.sampleRate) : new n.nc()),
                  this.j.releaseDataRef(r),
                  [a.buffer, e]
                );
              }
              getCurrentTime() {
                return this.j.getCurrentTime();
              }
              setCurrentTime(t) {
                this.j.setCurrentTime(t);
              }
              prepareToProcess(t, e) {
                this.j.prepareToProcess(t, e);
              }
              process(t, e, r, n, i, s) {
                let a = 0,
                  o = 0;
                for (let r = 0; r < e && a < this.O; r++) {
                  let e = t[r],
                    n = this.j.getInputChannel(a);
                  this.U.HEAPF64.set(e, n >> 3), a++;
                }
                if (s)
                  for (let t = a; t < this.O; t++) {
                    let e = this.k.getParamName(t);
                    if (void 0 !== e) {
                      let r = this.j.getInputChannel(t);
                      this.U.HEAPF64.set(this.k.getParamArray(t, s[e], i), r >> 3), a++;
                    }
                  }
                this.j.process(a, this.C, i);
                for (let t = 0; t < n && o < this.C; t++) {
                  let e = r[t],
                    n = this.j.getOutputChannel(o) >> 3;
                  e.set(this.U.HEAPF64.subarray(n, n + e.length)), o++;
                }
              }
              resolveTag(t) {
                return this.j.resolveTag(t);
              }
              scheduleEvent(t) {
                t.type === i.m5.MIDIEvent
                  ? this.j.scheduleMidiEvent(t.time, t.port, t.data[0], t.data[1], t.data[2])
                  : t.type === i.m5.ParameterEvent
                  ? this.j.scheduleParameterEvent(t.target, t.time, t.value, t.source)
                  : t.type === i.m5.MessageEvent
                  ? Array.isArray(t.payload)
                    ? this.j.sendListMessage(t.tag, t.objectId, this.pushArray(t.payload), t.payload.length, t.time)
                    : 'number' == typeof t.payload
                    ? this.j.sendNumMessage(t.tag, t.objectId, t.payload, t.time)
                    : void 0 === t.payload && this.j.sendBangMessage(t.tag, t.objectId, t.time)
                  : t.type === i.m5.TransportEvent
                  ? this.j.scheduleTransportEvent(t.time, t.state)
                  : t.type === i.m5.TempoEvent
                  ? this.j.scheduleTempoEvent(t.time, t.tempo)
                  : t.type === i.m5.BeatTimeEvent
                  ? this.j.scheduleBeatTimeEvent(t.time, t.beattime)
                  : t.type === i.m5.TimeSignatureEvent && this.j.scheduleTimeSignatureEvent(t.time, t.numerator, t.denominator);
              }
              getNumParameters() {
                return this.j.getNumParameters();
              }
              getParameterValue(t) {
                return this.j.getParameterValue(t);
              }
              numIns() {
                return this.O;
              }
              numOuts() {
                return this.C;
              }
              getPreset() {
                return this.j.getPreset();
              }
              setPreset(t) {
                this.j.setPreset(t);
              }
            }
          },
          555: (t, e, r) => {
            r.d(e, {
              j4: () => u,
              J0: () => _,
              J9: () => h,
              Lk: () => f,
              VH: () => i,
              m5: () => n,
              Ym: () => l,
              f3: () => c,
              DB: () => p,
              bt: () => d,
              l0: () => s,
              j6: () => v,
              gs: () => m,
              QU: () => y,
              cr: () => g,
              gA: () => a,
              f4: () => b,
            });
            var n,
              i,
              s,
              a,
              o = r(676);
            !(function (t) {
              (t[(t.BufferTransfer = 0)] = 'BufferTransfer'),
                (t[(t.ClockEvent = 1)] = 'ClockEvent'),
                (t[(t.DataRefEvent = 2)] = 'DataRefEvent'),
                (t[(t.MessageEvent = 3)] = 'MessageEvent'),
                (t[(t.MIDIEvent = 4)] = 'MIDIEvent'),
                (t[(t.ParameterEvent = 5)] = 'ParameterEvent'),
                (t[(t.PresetEvent = 6)] = 'PresetEvent'),
                (t[(t.StartupEvent = 7)] = 'StartupEvent'),
                (t[(t.TransportEvent = 8)] = 'TransportEvent'),
                (t[(t.TempoEvent = 9)] = 'TempoEvent'),
                (t[(t.BeatTimeEvent = 10)] = 'BeatTimeEvent'),
                (t[(t.TimeSignatureEvent = 11)] = 'TimeSignatureEvent');
            })(n || (n = {}));
            class u {
              constructor(t = o.D, e) {
                (this.invalid = !1), (this.time = t), (this.eventTarget = e);
              }
              serialize() {
                return { eventTarget: this.eventTarget, invalid: this.invalid, source: this.source, time: this.time };
              }
            }
            class h extends u {
              constructor(t, e, r, i) {
                super(t, i), (this.type = n.ClockEvent), (this.clockIndex = e), (this.value = r);
              }
              get hasValue() {
                return void 0 !== this.value;
              }
              serialize() {
                return Object.assign(super.serialize(), { clockIndex: this.clockIndex, type: this.type, value: this.value });
              }
            }
            !(function (t) {
              t[(t.Update = 1)] = 'Update';
            })(i || (i = {}));
            class f extends u {
              constructor(t, e, r, i) {
                super(t, i), (this.type = n.DataRefEvent), (this.dataRefIndex = e), (this.action = r);
              }
              serialize() {
                return Object.assign(super.serialize(), { action: this.action, dataRefIndex: this.dataRefIndex, type: this.type });
              }
            }
            class c extends u {
              constructor(t, e, r, i = '', s) {
                super(t, s), (this.type = n.MessageEvent), (this.objectId = i), (this.tag = e), (this.payload = r);
              }
              serialize() {
                return Object.assign(super.serialize(), { payload: this.payload, objectId: this.objectId, tag: this.tag, type: this.type });
              }
            }
            class l extends u {
              constructor(t, e, r, i) {
                if ((super(t, i), (this.type = n.MIDIEvent), r.length > 3))
                  throw new Error(`MIDIData can only contain a maximum of 3 bytes. Received ${r.length}`);
                if (((this.data = r), this.data.length < 3)) {
                  const t = r.length;
                  (this.data.length = 3), (this.data = this.data.fill(void 0, t, 3));
                }
                let s = 0;
                for (let t = 0; t < 3; t++) void 0 !== r[t] && s++;
                if (s < 1) throw new Error('MIDIData must at least have the first byte set.');
                (this.length = s), (this.status = 240 & r[0]), (this.channel = 15 & r[0]), (this.port = e);
              }
              serialize() {
                return Object.assign(super.serialize(), { channel: this.channel, data: this.data, port: this.port, type: this.type });
              }
            }
            class p extends u {
              constructor(t, e, r, i, s) {
                super(t, s), (this.type = n.ParameterEvent), (this.target = e), (this.value = r), (this.source = i);
              }
              serialize() {
                return Object.assign(super.serialize(), { target: this.target, type: this.type, value: this.value });
              }
            }
            !(function (t) {
              (t[(t.Set = 1)] = 'Set'), (t[(t.Touched = 2)] = 'Touched');
            })(s || (s = {}));
            class d extends u {
              constructor(t, e, r) {
                super(t, void 0), (this.type = n.PresetEvent), (this.action = e), (this.preset = r);
              }
              serialize() {
                return Object.assign(super.serialize(), { action: this.action, type: this.type, preset: this.preset });
              }
            }
            class g extends u {
              constructor(t, e) {
                super(t, void 0), (this.type = n.TransportEvent), (this.state = e);
              }
              serialize() {
                return Object.assign(super.serialize(), { state: this.state, type: this.type });
              }
            }
            class m extends u {
              constructor(t, e) {
                super(t, void 0), (this.type = n.TempoEvent), (this.tempo = e);
              }
              serialize() {
                return Object.assign(super.serialize(), { tempo: this.tempo, type: this.type });
              }
            }
            class _ extends u {
              constructor(t, e) {
                super(t, void 0), (this.type = n.BeatTimeEvent), (this.beattime = e);
              }
              serialize() {
                return Object.assign(super.serialize(), { beattime: this.beattime, type: this.type });
              }
            }
            class y extends u {
              constructor(t, e, r) {
                super(t, void 0), (this.type = n.TimeSignatureEvent), (this.numerator = e), (this.denominator = r);
              }
              serialize() {
                return Object.assign(super.serialize(), { numerator: this.numerator, denominator: this.denominator, type: this.type });
              }
            }
            !(function (t) {
              (t[(t.BEGIN = 0)] = 'BEGIN'), (t[(t.END = 1)] = 'END');
            })(a || (a = {}));
            class v extends u {
              constructor(t, e) {
                super(t, void 0), (this.type = n.StartupEvent), (this.phase = e);
              }
              serialize() {
                return Object.assign(super.serialize(), { phase: this.phase, type: this.type });
              }
            }
            const b = (t) => {
              switch (t.type) {
                case n.ClockEvent:
                  return new h(t.time, t.clockIndex, t.value, t.eventTarget);
                case n.DataRefEvent:
                  return new f(t.time, t.dataRefIndex, t.action, t.eventTarget);
                case n.MessageEvent:
                  return new c(t.time, t.tag, t.payload, t.objectId, t.eventTarget);
                case n.MIDIEvent:
                  return new l(t.time, t.port, t.data, t.eventTarget);
                case n.ParameterEvent:
                  return new p(t.time, t.target, t.value, t.source, t.eventTarget);
                case n.PresetEvent:
                  return new d(t.time, t.action, t.preset);
                case n.TransportEvent:
                  return new g(t.time, t.state);
                case n.TempoEvent:
                  return new m(t.time, t.tempo);
                case n.BeatTimeEvent:
                  return new _(t.time, t.beattime);
                case n.TimeSignatureEvent:
                  return new y(t.time, t.numerator, t.denominator);
                case n.StartupEvent:
                  return new v(t.time, t.phase);
                default:
                  throw new Error(`Unable to deserialize RNBOEvent of type ${t.type}`);
              }
            };
          },
          400: (t, e, r) => {
            var n, i;
            r.d(e, { r: () => n, E: () => i }),
              (function (t) {
                (t[(t.Number = 0)] = 'Number'),
                  (t[(t.Bang = 1)] = 'Bang'),
                  (t[(t.List = 2)] = 'List'),
                  (t[(t.Signal = 3)] = 'Signal'),
                  (t[(t.Count = 4)] = 'Count'),
                  (t[(t.Enum = 5)] = 'Enum');
              })(n || (n = {})),
              (function (t) {
                (t[(t.All = 0)] = 'All'), (t[(t.Internal = 1)] = 'Internal');
              })(i || (i = {}));
          },
          856: (t, e, r) => {
            r.d(e, { jN: () => u, IR: () => s, V2: () => o, BX: () => a, EX: () => n.E, rH: () => n.r, aO: () => c, zT: () => f });
            var n = r(400),
              i = r(389);
            function s(t) {
              return class extends t {
                constructor(...t) {
                  super(), (this.changeEvent = new i.BM()), (this.L = new i.BM());
                  const e = t[0];
                  (this.X = e.notificationSetting),
                    (this.convertFromNormalizedValue = e.scaling.convertFromNormalized),
                    (this.convertToNormalizedValue = e.scaling.convertToNormalized),
                    (this.constrainParameterValue = e.scaling.constrainParameterValue),
                    (this.initialValue = e.initialValue),
                    (this.V = e.initialValue),
                    (this.displayName = e.displayName || e.name),
                    (this.exponent = e.exponent),
                    (this.id = e.id),
                    (this.index = e.index),
                    (this.min = e.min),
                    (this.max = e.max),
                    (this.name = e.name),
                    (this.steps = e.steps),
                    (this.unit = e.unit || '');
                }
                get notificationSetting() {
                  return this.X;
                }
                get normalizedValue() {
                  return this.convertToNormalizedValue(this.V);
                }
                set normalizedValue(t) {
                  this.q(this.convertFromNormalizedValue(t));
                }
                $(t) {
                  this.X = t;
                }
                q(t) {
                  (t = this.constrainParameterValue(t)),
                    this.V !== t && ((this.V = t), this.L.emit(this), this.notificationSetting === n.E.All && this.changeEvent.emit(t));
                }
                W(t) {
                  (this.V = t), this.changeEvent.emit(t);
                }
              };
            }
            class a extends s(Object) {
              constructor(t) {
                super(t), (this.type = n.r.Number);
              }
              get value() {
                return this.V;
              }
              set value(t) {
                this.q(t);
              }
            }
            class o extends s(Object) {
              constructor(t) {
                super(t), (this.type = n.r.Enum), (this.G = t.enumValues);
              }
              get enumValues() {
                return this.G.slice();
              }
              get enumValue() {
                return this.G[this.value];
              }
              set enumValue(t) {
                const e = this.G.indexOf(t);
                if (e < 0) throw new Error(`Invalid EnumValue. ${t} is not an available value on the enum parameter ${this.name}`);
                this.value = e;
              }
              get value() {
                return this.V;
              }
              set value(t) {
                this.q(t);
              }
            }
            class u extends s(Object) {
              constructor() {
                super(...arguments), (this.type = n.r.Bang);
              }
              get isActive() {
                return 1 === this.V;
              }
              bang() {
                this.q(1);
              }
            }
            var h = r(133);
            const f = (t, e, r, i) =>
              t.type === n.r.Number && t.enumValues.length
                ? new o(Object.assign(Object.assign({}, t), { scaling: i, index: e, notificationSetting: r }))
                : t.type === n.r.Bang
                ? new u(Object.assign(Object.assign({}, t), { scaling: i, index: e, notificationSetting: r }))
                : (t.type, n.r.Number, new a(Object.assign(Object.assign({}, t), { scaling: i, index: e, notificationSetting: r })));
            class c {
              constructor() {
                (this.K = {}), (this.Y = new Float32Array(128));
              }
              addParam(t, e) {
                t.type == h.ParameterTypeSignal &&
                  t.ioType === h.IOTypeInput &&
                  (this.K[t.signalIndex] = { name: e, param: new Float32Array(128) });
              }
              getParamName(t) {
                let e = this.K[t];
                return void 0 !== e ? e.name : void 0;
              }
              getParamArray(t, e, r) {
                if (e.length == r) return e;
                {
                  let n = this.K[t];
                  return n.param.length != r && (n.param = new Float32Array(r)), n.param.fill(e[0]);
                }
              }
            }
          },
          389: (t, e, r) => {
            r.d(e, { f8: () => n, e1: () => i, I7: () => s, EL: () => o, BM: () => h });
            const n = (() => {
              try {
                if ('object' == typeof WebAssembly && 'function' == typeof WebAssembly.instantiate) {
                  const t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                  if (t instanceof WebAssembly.Module) return new WebAssembly.Instance(t) instanceof WebAssembly.Instance;
                }
              } catch (t) {}
              return !1;
            })();
            class i {
              fromRNBOtime(t) {
                return 0.001 * t;
              }
              toRNBOtime(t) {
                return 1e3 * t;
              }
            }
            const s = 'undefined' != typeof isSecureContext && isSecureContext && 'undefined' != typeof AudioWorkletNode;
            let a = Math.pow(10, 4);
            const o = () => (
                a >= Number.MAX_SAFE_INTEGER && (a = Math.pow(10, 4)),
                parseInt(`${Date.now().toString(10).slice(-3)}${(a++).toString(10).slice(-4)}`, 10)
              ),
              u = (t) => t.slice();
            class h {
              constructor() {
                (this.Z = []), (this.H = []);
              }
              get listenerCount() {
                return this.Z.length + this.H.length;
              }
              emit(t) {
                if (this.Z.length) {
                  const e = u(this.Z);
                  for (let r = 0, n = e.length; r < n; r++) e[r](t);
                }
                if (this.H.length) {
                  const e = u(this.H);
                  for (let r = 0, n = e.length; r < n; r++) e[r](t);
                  e.forEach((t) => this.unsubscribe(t));
                }
              }
              once(t) {
                return this.H.push(t), { unsubscribe: () => this.unsubscribe(t) };
              }
              subscribe(t) {
                return this.Z.push(t), { unsubscribe: () => this.unsubscribe(t) };
              }
              unsubscribe(t) {
                const e = this.Z.indexOf(t);
                e >= 0 && this.Z.splice(e, 1);
                const r = this.H.indexOf(t);
                r >= 0 && this.H.splice(r, 1);
              }
              removeAllSubscriptions() {
                (this.Z = []), (this.H = []);
              }
            }
          },
          163: (t, e, r) => {
            function n(t, e, r, n) {
              return new (r || (r = Promise))(function (i, s) {
                function a(t) {
                  try {
                    u(n.next(t));
                  } catch (t) {
                    s(t);
                  }
                }
                function o(t) {
                  try {
                    u(n.throw(t));
                  } catch (t) {
                    s(t);
                  }
                }
                function u(t) {
                  var e;
                  t.done
                    ? i(t.value)
                    : ((e = t.value),
                      e instanceof r
                        ? e
                        : new r(function (t) {
                            t(e);
                          })).then(a, o);
                }
                u((n = n.apply(t, e || [])).next());
              });
            }
            r.d(e, { mG: () => n });
          },
          264: (t) => {
            t.exports = {
              src: [
                {
                  code:
                    'class RNBOPatcher{constructor(){this._currentTime=0,this.audioProcessSampleCount=0,this.sampleOffsetIntoNextAudioBuffer=0,this.vs=0,this.maxvs=0,this.sr=44100,this.invsr=2267573696e-14,this.zeroBuffer=0,this.dummyBuffer=0,this.voiceIndex=0,this.noteNumber=0}getParameterIndexForID(e){return-1}getNumMidiInputPorts(){return 0}processMidiEvent(e,t,s,r){this.updateTime(e)}getNumMidiOutputPorts(){return 0}process(e,t,s,r,i){this.vs=i,this.updateTime(this.getEngine().getCurrentTime()),this.audioProcessSampleCount=this.msToSamps(this._currentTime,this.sr)}prepareToProcess(e,t){this.vs=t,this.maxvs=t,this.zeroBuffer=resizeSignal(this.zeroBuffer,0,t),this.dummyBuffer=resizeSignal(this.dummyBuffer,0,t),this.sr=e,this.invsr=1/e}msToSamps(e,t){return rnbo_floor(e*t*.001)}sampsToMs(e){return e*(1e3*this.invsr)}getNumInputChannels(){return 0}getNumOutputChannels(){return 0}getDataRef(e){return 0}getNumDataRefs(){return 0}fillDataRef(e,t){e}processDataViewUpdate(e,t){this.updateTime(t)}initialize(e){this.assign_defaults(),this.setState(e),this.initializeObjects(e),this.allocateDataRefs(),this.startup(e)}initializeObjects(e){}allocateDataRefs(){}startup(e){}setIsMuted(e){}getPatcherSerial(){return 7}getState(e){e[eventTargetKey]=this,e[patcherSerialKey]=this.getPatcherSerial(),e.p7=1,e.p7_noteNumber=this.noteNumber}setState(e){e[patcherSerialKey]==this.getPatcherSerial()&&(containsValue(e[eventTargetKey])&&this.getEngine().updatePatcherEventTarget(e[eventTargetKey],this),containsValue(e.p7_noteNumber)&&(this.noteNumber=e.p7_noteNumber))}setParameterValue(e,t,s){this.updateTime(s)}processParameterEvent(e,t,s){this.setParameterValue(e,t,s)}processNormalizedParameterEvent(e,t,s){this.setParameterValueNormalized(e,t,s)}getParameterValue(e){return 0}getNumSignalInParameters(){return 0}getNumParameters(){return 0}getParameterName(e){return"bogus"}getParameterId(e){return"bogus"}getParameterInfo(e,t){e}sendParameter(e){this.getEngine().notifyParameterValueChanged(e,this.getParameterValue(e))}processClockEvent(e,t,s,r){this.updateTime(e)}processOutletAtCurrentTime(e,t,s){}processOutletEvent(e,t,s,r){this.updateTime(r),this.processOutletAtCurrentTime(e,t,s)}sendOutlet(e,t){this.getEngine().sendOutlet(this,e,t)}schedule(e,t){this.getEngine().scheduleClockEvent(this,e,t+this._currentTime)}scheduleValue(e,t,s){this.getEngine().scheduleClockEventWithValue(this,e,t+this._currentTime,s)}stop(e){this.getEngine().flushClockEvents(this,e,!1)}stopWithValue(e,v){this.getEngine().flushClockEventsWithValue(this,e,v,!1)}processNumMessage(e,o,t,s){this.updateTime(t)}processListMessage(e,o,t,s){this.updateTime(t)}resolveTag(e){return""}sendMidiEvent(e,t,s,r){this.getEngine().sendMidiEvent(e,t,s,r)}sendMidiEventList(e,t){this.getEngine().sendMidiEventList(e,t)}updateTime(e){this._currentTime=e,this.sampleOffsetIntoNextAudioBuffer=this.msToSamps(e,this.sr)-this.vs-this.audioProcessSampleCount}assign_defaults(){}setEngineAndPatcher(e,t){this._engineInterface=e,this._parentPatcher=t}getEngine(){return this._engineInterface}getPatcher(){return this._parentPatcher}}rnboObj=new RNBOPatcher;',
                  encoding: 'utf-8',
                  type: 'js',
                },
              ],
              options: { classname: 'rnbomatic', minifyOutput: !0 },
              desc: {
                parameters: [],
                numParameters: 0,
                numSignalInParameters: 0,
                layouts: [{ name: 'layout', boxes: [] }],
                numInputChannels: 0,
                numOutputChannels: 0,
                patcherSerial: 0,
                externalDataRefs: [],
              },
            };
          },
        },
        __webpack_module_cache__ = {};
      function __webpack_require__(t) {
        var e = __webpack_module_cache__[t];
        if (void 0 !== e) return e.exports;
        var r = (__webpack_module_cache__[t] = { exports: {} });
        return __webpack_modules__[t](r, r.exports, __webpack_require__), r.exports;
      }
      (__webpack_require__.n = (t) => {
        var e = t && t.J ? () => t.default : () => t;
        return __webpack_require__.d(e, { a: e }), e;
      }),
        (__webpack_require__.d = (t, e) => {
          for (var r in e)
            __webpack_require__.o(e, r) && !__webpack_require__.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
        }),
        (__webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (__webpack_require__.r = (t) => {
          'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, 'J', { value: !0 });
        });
      var __webpack_exports__ = {};
      return (
        (() => {
          __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, {
              BangParameter: () => a.jN,
              BaseDevice: () => m,
              BaseEvent: () => u.j4,
              BeatTimeEvent: () => u.J0,
              CommonParameterMixin: () => a.IR,
              DataBuffer: () => i.OM,
              DeviceType: () => d,
              EnumParameter: () => a.V2,
              EventSubject: () => s.BM,
              EventType: () => u.m5,
              MIDIEvent: () => u.Ym,
              MessageEvent: () => u.f3,
              MessagePortType: () => n.s,
              NumberParameter: () => a.BX,
              ParameterNotificationSetting: () => a.EX,
              ParameterType: () => a.rH,
              PresetEvent: () => u.bt,
              RNBOPresetEventAction: () => u.l0,
              ScriptDevice: () => B,
              TempoEvent: () => u.gs,
              TimeNow: () => C.D,
              TimeSignatureEvent: () => u.QU,
              TransportEvent: () => u.cr,
              TransportState: () => n.S,
              WorkletDevice: () => O,
              createDevice: () => x,
              version: () => N,
            });
          var t = __webpack_require__(163),
            e = __webpack_require__(845),
            r = __webpack_require__.n(e),
            n = __webpack_require__(347),
            i = __webpack_require__(641),
            s = __webpack_require__(389),
            a = __webpack_require__(856),
            o = __webpack_require__(400),
            u = __webpack_require__(555);
          const h = { notificationSetting: o.E.All };
          class f {
            constructor(t) {
              (this.tt = new Map()),
                (this.et = new Map()),
                (this.id = (0, s.EL)()),
                (this.parameterChangeEvent = new s.BM()),
                (this.rt = (t) => {
                  const e = this.tt.get(t.target);
                  if (!e) return;
                  const r = t.value;
                  (e.type !== o.r.Bang && r === e.value) || (e.W(r), this.parameterChangeEvent.emit(e));
                }),
                (this.nt = (t) => {
                  const e = t.index,
                    r = t.type === o.r.Bang ? 1 : t.value,
                    n = new u.DB(0, e, r, this.id, void 0);
                  this.it && this.it.scheduleEvent(n), this.notificationSetting === o.E.All && this.parameterChangeEvent.emit(t);
                });
              const e = Object.assign({}, h, t);
              this.X = e.notificationSetting;
            }
            st(t) {
              return this.tt.get(t) || void 0;
            }
            ot() {
              for (const t of this.tt.values()) t.L.removeAllSubscriptions(), t.changeEvent.removeAllSubscriptions();
              this.tt.clear(), this.et.clear();
            }
            ut() {
              if (!this.it) throw new Error('Cannot populate ParameterInterface without setting engine first.');
              this.ot();
              for (let t = 0, e = this.it.getNumParameters(); t < e; t++) {
                const e = this.it.getParameterInfo(t);
                if (!e) continue;
                if (!e.visible) continue;
                const r = (0, a.zT)(e, t, this.notificationSetting, {
                  convertFromNormalized: this.it.getParameterFromNormalizedFunction(t),
                  convertToNormalized: this.it.getParameterToNormalizedFunction(t),
                  constrainParameterValue: this.it.constrainParameterValue(t),
                });
                r.L.subscribe(this.nt), this.tt.set(t, r), this.et.set(e.id, r);
              }
            }
            setEngine(t) {
              if (this.it) throw new Error("ParamInterface already has an engine, which can't be overridden.");
              (this.it = t), this.it.parameterChangeEvent.subscribe(this.rt), this.ut();
            }
            get notificationSetting() {
              return this.X;
            }
            set notificationSetting(t) {
              for (const e of this.tt.values()) e.$(t);
              this.X = t;
            }
            get numParameters() {
              return this.tt.size;
            }
            get parameters() {
              return Array.from(this.tt.values());
            }
            get parametersById() {
              return this.et;
            }
            getParameterName(t) {
              const e = this.st(t);
              return e ? e.name : void 0;
            }
            destroy() {
              this.it.parameterChangeEvent.unsubscribe(this.rt),
                (this.it = void 0),
                this.ot(),
                this.parameterChangeEvent.removeAllSubscriptions();
            }
          }
          var c;
          function l(t) {
            return void 0 !== t.file;
          }
          function p(t) {
            return void 0 !== t.url;
          }
          !(function (t) {
            (t[(t.AudioBuffer = 1)] = 'AudioBuffer'),
              (t[(t.DataBuffer = 2)] = 'DataBuffer'),
              (t[(t.ReferenceBuffer = 3)] = 'ReferenceBuffer');
          })(c || (c = {}));
          var d,
            g = __webpack_require__(834).Buffer;
          !(function (t) {
            (t.Script = 'script'), (t.Worklet = 'worklet'), (t.Invalid = 'invalid');
          })(d || (d = {}));
          class m {
            constructor({ context: t, parameterNotificationSetting: e, type: r }) {
              (this.ht = !1),
                (this.ft = 'wasm'),
                (this.ct = new s.e1()),
                (this.lt = !0),
                (this.midiEvent = new s.BM()),
                (this.messageEvent = new s.BM()),
                (this.parameterChangeEvent = new s.BM()),
                (this.invalidateEvent = new s.BM()),
                (this.presetTouchedEvent = new s.BM()),
                (this.dt = (t) => {
                  switch (t.type) {
                    case u.m5.ClockEvent:
                    case u.m5.DataRefEvent:
                    case u.m5.StartupEvent:
                      break;
                    case u.m5.MIDIEvent:
                      return void this.midiEvent.emit(t);
                    case u.m5.MessageEvent:
                      return void this.messageEvent.emit(t);
                    case u.m5.PresetEvent:
                      if (t.action == u.l0.Touched) return void this.presetTouchedEvent.emit();
                    default:
                      throw (console.error(t), new Error(`Unknown or unsupported RNBOEvent type "${t.type}"`));
                  }
                }),
                (this.gt = (t) => {
                  this.parameterChangeEvent.emit(t);
                }),
                (this._t = t),
                (this.yt = r),
                (this.F = new f({ notificationSetting: e }));
            }
            vt() {
              if (this.ht)
                throw new Error(
                  'Error while trying to overwrite immutable patcher of an existing device. Please create a new Device using RNBO.createDevice instead.'
                );
            }
            It(t, e, r) {
              this.it && this.it.prepareToProcess(t, e, r);
            }
            wt() {
              if (this.isInvalid)
                throw new Error('Error: This device has become invalid due to creating a new device from it and is therefore unusable.');
            }
            Et(t) {
              const e = g.from(t.code, t.encoding);
              return 'zlib' === t.compression ? r().inflate(e.toString('binary'), { to: 'string' }) : e.toString('utf-8');
            }
            get context() {
              return this.wt(), this._t;
            }
            get inports() {
              return this.wt(), this.it.getMessageInfos().filter((t) => t.type === n.s.Inport);
            }
            get isValid() {
              return this.lt;
            }
            get isInvalid() {
              return !this.lt;
            }
            get numInputChannels() {
              return this.wt(), this.it ? this.it.getNumInputChannels() : 0;
            }
            get numOutputChannels() {
              return this.wt(), this.it ? this.it.getNumOutputChannels() : 0;
            }
            get numMIDIInputPorts() {
              return this.wt(), this.it ? this.it.getNumMIDIInputPorts() : 0;
            }
            get numMIDIOutputPorts() {
              return this.wt(), this.it ? this.it.getNumMIDIOutputPorts() : 0;
            }
            get numParameters() {
              return this.wt(), this.F.numParameters;
            }
            get outports() {
              return this.wt(), this.it.getMessageInfos().filter((t) => t.type === n.s.Outport);
            }
            get parameters() {
              return this.wt(), this.F.parameters;
            }
            get messages() {
              return this.wt(), this.it.getMessageInfos();
            }
            get parametersById() {
              return this.wt(), this.F.parametersById;
            }
            get parameterNotificationSetting() {
              return this.wt(), this.F.notificationSetting;
            }
            set parameterNotificationSetting(t) {
              this.wt(), (this.F.notificationSetting = t);
            }
            get sourceType() {
              return this.ft;
            }
            get type() {
              return this.isInvalid ? d.Invalid : this.yt;
            }
            get dataBufferIds() {
              return this.it.getExternalDataRefIds();
            }
            get dataBufferDescriptions() {
              return this.it.getExternalDataRefInfos();
            }
            setDataBuffer(e, r, n, s) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                if (!this.dataBufferDescriptions.find((t) => t.id === e))
                  throw new Error(`Unknown DataBuffer id. A DataBuffer with the id "${e}" does not exist within the device.`);
                let t, a;
                if (r instanceof AudioBuffer) {
                  a = i.Le.fromAudioBuffer(r);
                  const e = r.numberOfChannels,
                    n = new Float32Array(r.length * r.numberOfChannels),
                    s = [];
                  for (let t = 0; t < e; t++) {
                    const e = new Float32Array(r.length);
                    r.copyFromChannel(e, t, 0), s.push(e);
                  }
                  for (let t = 0; t < e; t++) for (let i = 0, a = r.length; i < a; i++) n[i * e + t] = s[t][i];
                  t = n.buffer;
                } else {
                  if (!n || n < 0 || isNaN(n)) throw new Error('Invalid channel count. Expecting a numeric value >= 1');
                  if (!s || s < 0 || isNaN(s)) throw new Error('Invalid sample rate. Expecting a numeric value >= 1');
                  (t = ArrayBuffer.isView(r) ? r.buffer.slice(0) : r.slice(0)), (a = new i.Le(n, s));
                }
                yield this.it.setExternalData(e, t, a);
              });
            }
            releaseDataBuffer(e) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                if (!this.dataBufferDescriptions.find((t) => t.id === e))
                  throw new Error(`Unknown DataBuffer id. A DataBuffer with the id "${e}" does not exist within the device.`);
                const { data: t, typeDesc: r } = yield this.it.releaseExternalData(e);
                return new i.OM(t, r);
              });
            }
            static fetchAudioData(e, r) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                let t = yield fetch(e),
                  n = yield t.arrayBuffer();
                return new Promise((t, e) => {
                  r.decodeAudioData(n, t, e);
                });
              });
            }
            static bufferDescriptionHasRemoteURL(t) {
              return !!p(t) || !(!l(t) || (!t.file.startsWith('http:') && !t.file.startsWith('https:')));
            }
            loadDataBufferDependencies(e) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                return Promise.all(
                  e.map((e) =>
                    (0, t.mG)(this, void 0, void 0, function* () {
                      try {
                        let t;
                        if ((p(e) ? (t = e.url) : l(e) && (t = e.file), t)) {
                          const r = yield m.fetchAudioData(t, this.context);
                          return this.setDataBuffer(e.id, r), { type: 'success', id: e.id };
                        }
                        throw new Error(`Skipping invalid buffer info id: ${e.id}, type: ${e.type}`);
                      } catch (t) {
                        return { type: 'fail', error: t, id: e.id };
                      }
                    })
                  )
                );
              });
            }
            scheduleEvent(t) {
              this.wt(), this.it && this.it.scheduleEvent(t);
            }
            destroy() {
              this.wt(),
                this.F.destroy(),
                this.it && this.it.removeAllSubscriptions(),
                (this.it = void 0),
                this.Mt && this.Mt.disconnect(),
                (this.Mt = void 0),
                delete this.F,
                delete this.ct,
                delete this._t,
                (this.lt = !1),
                this.invalidateEvent.emit(),
                this.invalidateEvent.removeAllSubscriptions(),
                this.messageEvent.removeAllSubscriptions(),
                this.midiEvent.removeAllSubscriptions(),
                this.parameterChangeEvent.removeAllSubscriptions();
            }
            getPreset() {
              return (0, t.mG)(this, void 0, void 0, function* () {
                return this.it.getPreset();
              });
            }
            setPreset(t) {
              return this.it.setPreset(t);
            }
          }
          var _ = __webpack_require__(191),
            y = __webpack_require__(133);
          const v = __webpack_require__(264);
          function b(t, e) {
            return t.time - e.time;
          }
          function I(t) {
            t.sort(b);
          }
          class w extends _.v {
            constructor() {
              super(),
                (this.At = !1),
                (this.Bt = !1),
                (this.Tt = void 0),
                (this.St = -1),
                (this.Pt = []),
                (this.At = !1),
                this.setPatcherDesc(v.desc),
                this.setPatcherCode(v.src[0].code);
            }
            Rt(t) {
              const e = t.eventTarget || this.Dt;
              if (((t.time = Math.max(t.time, this.I)), (this.Tt = t), t.type === u.m5.ParameterEvent)) {
                const r = t;
                e.setParameterValue(r.target, r.value, t.time);
              } else if (t.type === u.m5.MIDIEvent) {
                const r = t;
                e.processMidiEvent(r.time, r.port, r.data, r.length);
              } else if (t.type === u.m5.ClockEvent) {
                const r = t;
                e.processClockEvent(r.time, r.clockIndex, r.hasValue, r.value);
              } else if (t.type === u.m5.DataRefEvent) {
                const r = t;
                r.action === u.VH.Update && e.processDataViewUpdate(r.dataRefIndex, r.time);
              } else if (t.type === u.m5.MessageEvent) {
                const r = t;
                Array.isArray(r.payload)
                  ? e.processListMessage(y.TAG(r.tag), y.TAG(r.objectId), r.time, r.payload)
                  : void 0 === r.payload
                  ? e.processBangMessage(y.TAG(r.tag), y.TAG(r.objectId), r.time)
                  : e.processNumMessage(y.TAG(r.tag), y.TAG(r.objectId), r.time, r.payload);
              } else if (t.type === u.m5.PresetEvent) {
                const e = t;
                e.action === u.l0.Set && ((this.Bt = !0), this.Dt.setPreset(e.time, e.preset), (this.Bt = !1));
              } else if (t.type === u.m5.TransportEvent) {
                const e = t;
                this.Dt.processTransportEvent(e.time, e.state);
              } else if (t.type === u.m5.TempoEvent) {
                const e = t;
                this.Dt.processTempoEvent(e.time, e.tempo);
              } else if (t.type === u.m5.BeatTimeEvent) {
                const e = t;
                this.Dt.processBeatTimeEvent(e.time, e.beattime);
              } else if (t.type === u.m5.TimeSignatureEvent) {
                const e = t;
                this.Dt.processTimeSignatureEvent(e.time, e.numerator, e.denominator);
              } else if (t.type === u.m5.StartupEvent) {
                const e = t;
                this.Bt = e.phase === u.gA.BEGIN;
              }
              this.Tt = void 0;
            }
            getCurrentTime() {
              return this.I;
            }
            setCurrentTime(t) {
              this.I = t;
            }
            prepareToProcess(t, e, r) {
              (r || t !== this.M || e !== this.A) &&
                ((this.M = t), (this.A = e), (this.B = this.sampsToMs(this.A)), this.isSync && this.Dt.prepareToProcess(this.M, this.A));
            }
            process(t, e, r, n, i, s, a) {
              const o = Math.min(e, this.getNumInputChannels() + this.getNumSignalInParameters()),
                u = Math.min(n, this.getNumOutputChannels()),
                h = Math.min(i, this.A);
              for (
                this.St = this.I + this.B,
                  void 0 !== this.midiInput && (this.Pt.push.apply(this.Pt, s), (this.At = !0)),
                  this.At && (I(this.Pt), (this.At = !1));
                this.Pt.length > 0 && this.Pt[0].time < this.St;

              )
                this.Rt(this.Pt.shift());
              this.Dt.process(t, o, r, u, h), (this.I = this.St), (this.St = -1);
            }
            scheduleMidiEvent(t, e) {
              this.scheduleEvent(new u.Ym(this.I, t, e, this.Dt));
            }
            notifyParameterValueChanged(t, e) {
              let r = this.Tt ? this.Tt.source : void 0;
              this.parameterChangeEvent.emit(new u.DB(this.getCurrentTime(), t, e, r));
            }
            scheduleParameterChange(t, e, r) {
              this.scheduleEvent(new u.DB(this.getCurrentTime(), t, e, void 0));
            }
            sendNumMessage(t, e, r) {
              const n = new u.f3(this.I, this.Dt.resolveTag(t), r, this.Dt.resolveTag(e));
              this.outgoingEvent.emit(n);
            }
            sendBangMessage(t, e) {
              const r = new u.f3(this.I, this.Dt.resolveTag(t), void 0, this.Dt.resolveTag(e));
              this.outgoingEvent.emit(r);
            }
            sendListMessage(t, e, r) {
              const n = new u.f3(this.I, this.Dt.resolveTag(t), r, this.Dt.resolveTag(e));
              this.outgoingEvent.emit(n);
            }
            getParameterValue(t) {
              return this.Dt.getParameterValue(t);
            }
            flushClockEvents(t, e, r) {
              this.flushClockEventsWithValue(t, e, void 0, r);
            }
            flushClockEventsWithValue(t, e, r, n) {
              for (let i = 0; i < this.Pt.length; i++)
                if (this.Pt[i] instanceof u.J9) {
                  const s = this.Pt[i];
                  s.eventTarget !== t ||
                    (s.clockIndex !== e && void 0 !== s.clockIndex) ||
                    (void 0 !== r && s.value !== r) ||
                    (this.Pt.splice(i, 1), n && this.Rt(s), i--);
                }
            }
            deleteClockEvents(t) {
              this.flushClockEvents(t, void 0, !1);
            }
            scheduleClockEvent(t, e, r) {
              this.scheduleClockEventWithValue(t, e, r, void 0);
            }
            scheduleClockEventWithValue(t, e, r, n) {
              this.scheduleEvent(new u.J9(r, e, n, t));
            }
            sendMidiEvent(t, e, r, n) {
              const i = new u.Ym(this.getCurrentTime(), t, [e, r, n], void 0);
              this.outgoingEvent.emit(i);
            }
            sendMidiEventList(t, e) {
              let r;
              for (r = 2; r < e.length; r += 3) this.sendMidiEvent(t, e[r - 2], e[r - 1], e[r]);
              if (((r -= 3), r < e.length)) {
                var n = r - e.length;
                this.sendMidiEvent(t, e[r], n > 1 ? e[r + 1] : void 0, n > 2 ? e[r + 2] : void 0);
              }
            }
            sendOutlet(t, e, r) {
              console.log('sendOutlet', t, e, r);
            }
            updatePatcherEventTarget(t, e) {
              for (let r = 0; r < this.Pt.length; r++)
                this.Pt[r].eventTarget === t && ((this.Pt[r].eventTarget = e), (this.Pt[r].invalid = !1));
            }
            rescheduleEventTarget(t) {
              for (let e = 0; e < this.Pt.length; e++) this.Pt[e].eventTarget === t && (this.Pt[e].invalid = !1);
            }
            isInProcess() {
              return this.St > -1;
            }
            sendDataRefUpdated(t) {
              this.scheduleEvent(new u.Lk(this.getCurrentTime(), t, u.VH.Update, this.Dt));
            }
            get isSync() {
              return !0;
            }
            scheduleEvent(t) {
              this.Pt.push(t), this.isInProcess() ? I(this.Pt) : (this.At = !0);
            }
            setPatcherCode(e) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                const t = {};
                this.Dt && this.Dt.getState(t), (this.Dt = y.deserializeSrc(e));
                for (let t = 0; t < this.Pt.length; t++) this.Pt[t].eventTarget && (this.Pt[t].invalid = !0);
                this.Dt.setEngineAndPatcher(this, null),
                  this.scheduleEvent(new u.j6(this.I, u.gA.BEGIN)),
                  this.Dt.initialize(t),
                  this.scheduleEvent(new u.j6(this.I, u.gA.END)),
                  this.Dt.prepareToProcess(this.M, this.A, !0);
                for (let t = this.Pt.length - 1; t >= 0; t--) this.Pt[t].invalid && this.Pt.splice(t, 1);
              });
            }
            setExternalData(e, r, n) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                const t = this.Dt.getNumDataRefs();
                for (let s = 0; s < t; s++) {
                  const t = this.Dt.getDataRef(s);
                  if (t.name == e) {
                    (t.arrayBuffer = r),
                      n instanceof i.Le && ((t.channels = n.channels), (t.sampleRate = n.sampleRate)),
                      this.sendDataRefUpdated(s);
                    break;
                  }
                }
              });
            }
            releaseExternalData(e) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                const t = this.Dt.getNumDataRefs();
                let r, n;
                for (let s = 0; s < t; s++) {
                  const t = this.Dt.getDataRef(s);
                  if (t.name == e) {
                    (r = t.arrayBuffer),
                      (t.arrayBuffer = new ArrayBuffer(0)),
                      t.channels ? ((n = new i.Le(t.channels, t.sampleRate)), (t.channels = 0), (t.sampleRate = 0)) : (n = new i.nc()),
                      this.sendDataRefUpdated(s);
                    break;
                  }
                }
                if (!r) throw new Error(`Invalid DataBuffer. No DataBuffer with id ${e} found.`);
                return { data: r, typeDesc: n };
              });
            }
            getPreset() {
              return (0, t.mG)(this, void 0, void 0, function* () {
                let t = {};
                return this.Dt.getPreset(t), t;
              });
            }
            setPreset(t) {
              this.scheduleEvent(new u.bt(this.I, u.l0.Set, t));
            }
            presetTouched() {
              this.Bt || this.outgoingEvent.emit(new u.bt(this.I, u.l0.Touched, void 0));
            }
          }
          var E,
            M,
            A = __webpack_require__(916);
          class B extends m {
            constructor({ bufferSize: t = 1024, context: e, parameterNotificationSetting: r }, n) {
              super({ context: e, parameterNotificationSetting: r, type: d.Script }),
                (this.bufferSize = t),
                (this.it = n && 'wasm' !== n.sourceType ? n.it : void 0);
            }
            Ot(t) {
              const e = [],
                r = [],
                n = t.inputBuffer,
                i = t.outputBuffer,
                s = n ? n.numberOfChannels : 0,
                a = i ? i.numberOfChannels : 0;
              for (let t = 0; t < Math.max(s, a); t++) t < s && (e[t] = n.getChannelData(t)), t < a && (r[t] = i.getChannelData(t));
              this.Ct(1e3 * t.playbackTime),
                this.It(t.outputBuffer.sampleRate, this.bufferSize, !1),
                this.Nt(e, s, r, a, this.bufferSize, null, null);
            }
            Nt(t, e, r, n, i, s, a) {
              this.it && this.it.process(t, e, r, n, i, s || void 0, a || void 0);
            }
            Ct(t) {
              this.it && this.it.setCurrentTime(t);
            }
            get node() {
              return this.wt(), this.Mt;
            }
            setPatcher(e, r) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                this.vt(),
                  this.it || (this.it = 'wasm' === r.type ? new A.s() : new w()),
                  (this.ft = r.type),
                  yield this.it.setPatcherDesc(e),
                  yield this.it.setPatcherCode(this.Et(r)),
                  this.F.setEngine(this.it),
                  this.F.parameterChangeEvent.subscribe(this.gt),
                  this.it.outgoingEvent.subscribe(this.dt),
                  (this.Mt = this.context.createScriptProcessor(
                    this.bufferSize,
                    this.numInputChannels,
                    Math.max(this.numOutputChannels, 1)
                  )),
                  (this.node.onaudioprocess = this.Ot.bind(this));
              });
            }
          }
          !(function (t) {
            (t[(t.LoadPatcher = 0)] = 'LoadPatcher'),
              (t[(t.ScheduleEvent = 1)] = 'ScheduleEvent'),
              (t[(t.TransferBuffer = 2)] = 'TransferBuffer'),
              (t[(t.ReleaseBuffer = 3)] = 'ReleaseBuffer'),
              (t[(t.SetPreset = 4)] = 'SetPreset'),
              (t[(t.GetPreset = 5)] = 'GetPreset');
          })(E || (E = {})),
            (function (t) {
              (t[(t.LoadPatcherFinished = 1e3)] = 'LoadPatcherFinished'),
                (t[(t.OutgoingEvent = 1002)] = 'OutgoingEvent'),
                (t[(t.ReleasedBuffer = 1003)] = 'ReleasedBuffer'),
                (t[(t.TransferBufferFinished = 1004)] = 'TransferBufferFinished'),
                (t[(t.GetPresetResponse = 1005)] = 'GetPresetResponse');
            })(M || (M = {}));
          class T extends _.v {
            constructor() {
              super(),
                (this.kt = new s.BM()),
                (this.xt = new s.BM()),
                (this.Ut = (t) => {
                  if (t.id !== M.OutgoingEvent || t.payload.type !== u.m5.ParameterEvent)
                    if (t.id !== M.OutgoingEvent) {
                      if (
                        t.id !== M.LoadPatcherFinished &&
                        t.id !== M.TransferBufferFinished &&
                        t.id !== M.ReleasedBuffer &&
                        t.id !== M.GetPresetResponse
                      )
                        throw new Error(`Unhandled RNBOProcessor event with type ${t.id}`);
                    } else this.outgoingEvent.emit(t.payload);
                  else this.parameterChangeEvent.emit(t.payload);
                }),
                this.kt.subscribe(this.Ut);
            }
            get eventSubjects() {
              return { fromProcessorEvent: this.kt, toProcessorEvent: this.xt };
            }
            notifyParameterValueChanged(t, e, r, n) {
              this.parameterChangeEvent.emit(new u.DB(t, e, r, n, void 0));
            }
            prepareToProcess(t, e, r) {}
            process(t, e, r, n, i, s, a) {
              throw new Error();
            }
            get isSync() {
              return !1;
            }
            scheduleEvent(t) {
              this.xt.emit({ id: E.ScheduleEvent, payload: t });
            }
            setExternalData(t, e, r) {
              return new Promise((n, i) => {
                const s = this.kt.subscribe((e) => {
                  e.id === M.TransferBufferFinished && e.payload.memoryId === t && (s.unsubscribe(), n());
                });
                this.xt.emit({ id: E.TransferBuffer, payload: { memoryId: t, data: e, typeDesc: r } });
              });
            }
            releaseExternalData(t) {
              return new Promise((e, r) => {
                const n = this.kt.subscribe((r) => {
                  r.id === M.ReleasedBuffer &&
                    r.payload.memoryId === t &&
                    (n.unsubscribe(), e({ data: r.payload.data, typeDesc: (0, i.n_)(r.payload.typeDesc) }));
                });
                this.xt.emit({ id: E.ReleaseBuffer, payload: { memoryId: t } });
              });
            }
            getPreset() {
              return (0, t.mG)(this, void 0, void 0, function* () {
                return new Promise((t, e) => {
                  const r = this.kt.subscribe((e) => {
                    e.id === M.GetPresetResponse && (r.unsubscribe(), t(e.payload.preset));
                  });
                  this.xt.emit({ id: E.GetPreset });
                });
              });
            }
            setPreset(t) {
              this.xt.emit({ id: E.SetPreset, payload: { preset: t } });
            }
            setPatcherCode(e) {
              return (0, t.mG)(this, void 0, void 0, function* () {});
            }
          }
          const S = () => {
            if (!s.I7) throw new Error('Missing AudioWorklet Support');
            return class extends AudioWorkletNode {
              constructor(t, e, r, n) {
                super(t, e, n),
                  (this.jt = (t) => {
                    const [e, r] = t.data;
                    if (e !== M.OutgoingEvent)
                      if (e !== M.LoadPatcherFinished)
                        if (e !== M.TransferBufferFinished)
                          if (e !== M.ReleasedBuffer) {
                            if (e !== M.GetPresetResponse) throw new Error(`Unable to handle received processor message of type ${e}`);
                            this.zt.fromProcessorEvent.emit({ id: e, payload: r });
                          } else this.zt.fromProcessorEvent.emit({ id: e, payload: r });
                        else this.zt.fromProcessorEvent.emit({ id: e, payload: r });
                      else this.zt.fromProcessorEvent.emit({ id: e, payload: r });
                    else this.zt.fromProcessorEvent.emit({ id: e, payload: (0, u.f4)(r) });
                  }),
                  (this.Ft = (t) => {
                    t.id !== E.ScheduleEvent
                      ? t.id !== E.TransferBuffer
                        ? t.id !== E.ReleaseBuffer
                          ? t.id !== E.GetPreset
                            ? t.id !== E.SetPreset || this.port.postMessage([t.id, { preset: t.payload.preset }])
                            : this.port.postMessage([t.id])
                          : this.port.postMessage([t.id, { memoryId: t.payload.memoryId }])
                        : this.port.postMessage(
                            [t.id, { data: t.payload.data, memoryId: t.payload.memoryId, typeDesc: t.payload.typeDesc.serialize() }],
                            [t.payload.data]
                          )
                      : this.port.postMessage([t.id, t.payload.serialize()]);
                  }),
                  (this.zt = r),
                  this.zt.toProcessorEvent.subscribe(this.Ft),
                  (this.port.onmessage = this.jt),
                  this.port.start();
              }
              loadPatcher() {
                return (0, t.mG)(this, void 0, void 0, function* () {
                  return new Promise((t) => {
                    const e = this.zt.fromProcessorEvent.subscribe((r) => {
                      r.id === M.LoadPatcherFinished && (e.unsubscribe(), t());
                    });
                    this.port.postMessage([E.LoadPatcher]);
                  });
                });
              }
            };
          };
          var P = __webpack_require__(834).Buffer;
          const R = __webpack_require__(264),
            D = {
              js:
                '(()=>{var __webpack_modules__={133:(module,__unused_webpack_exports,__webpack_require__)=>{var Float32Buffer=__webpack_require__(852).Float32Buffer,Float64Buffer=__webpack_require__(852).Float64Buffer,Float32MultiBuffer=__webpack_require__(852).Float32MultiBuffer,Float64MultiBuffer=__webpack_require__(852).Float64MultiBuffer,IntBuffer=__webpack_require__(852).IntBuffer,UInt8Buffer=__webpack_require__(852).UInt8Buffer,ExternalLoaderFactory=__webpack_require__(126).ExternalLoaderFactory;let Xoshiro=__webpack_require__(925);var patcherSerialKey="XX__PatcherSerialKey__XX",eventTargetKey="XX__EventTargetKey__XX",ParameterTypeNumber=0,ParameterTypeBang=1,ParameterTypeList=2,ParameterTypeSignal=3,ParameterTypeCount=4,IOTypeInput=0,IOTypeOutput=1,IOTypeUndefined=2,INVALID_INDEX=Number.MAX_SAFE_INTEGER;function rand01(){return Math.random()}function pi01(){return Math.PI}var rnbo_abs=Math.abs,rnbo_fabs=Math.abs,rnbo_acos=Math.acos,rnbo_acosh=Math.acosh,rnbo_asin=Math.asin,rnbo_asinh=Math.asinh,rnbo_atan=Math.atan,rnbo_atan2=Math.atan2,rnbo_atanh=Math.atanh,rnbo_cbrt=Math.cbrt,rnbo_ceil=Math.ceil,rnbo_cos=Math.cos,rnbo_cosh=Math.cosh,rnbo_exp=Math.exp,rnbo_expm1=Math.expm1,rnbo_floor=Math.floor,rnbo_fround=Math.round,rnbo_imul=Math.imul,rnbo_log=Math.log,rnbo_log10=Math.log10,rnbo_log1p=Math.log1p,rnbo_log2=Math.log2,rnbo_pow=Math.pow,rnbo_round=rnbo_fround,rnbo_sign=Math.sign,rnbo_sin=Math.sin,rnbo_sinh=Math.sinh,rnbo_sqrt=Math.sqrt,rnbo_tan=Math.tan,rnbo_tanh=Math.tanh,trunc=Math.trunc,rnbo_trunc=Math.trunc,rnbo_number_max=()=>Math.MAX_VALUE,rnbo_isnan=isNaN;function fixnan(t){return isNaN(t)?0:t}function fract(t){return t%1}function fixdenorm(t){return t}function isdenorm(t){return!1}var fastsin=Math.sin,fastcos=Math.cos,fastexp=Math.exp,fastpow=Math.pow,fasttan=Math.tan;function nextpoweroftwo(t){return 0===t?1:(t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)+1)}var MAX_32BIT_INT=Math.pow(2,32);function uint32_add(t,e){var r=t+e;return r>=MAX_32BIT_INT&&(r-=MAX_32BIT_INT),Math.trunc(r)}function uint32_trunc(t){return t>>>0}function uint32_rshift(t,e){return t>>>e}function imod(t,e){return(0|t)%(0|e)}function imod_nocast(t,e){return t%e}function getArrayValueAtIndex(t,e){return t[e]}function allocateArray(t,e){return new Array(t)}function createListCopy(t){return t.slice(0)}function jsCreateListCopy(t){return createListCopy(t)}function list(){let t=[];for(let e=0;e<arguments.length;e++){let r=arguments[e];if(Array.isArray(r))for(let e=0;e<r.length;e++)t.push(r[e]);else t.push(r)}return t}function resizeSignal(t,e,r){for(var n=t||[],i=e;i<r;i++)n[i]=0;return n}function zeroSignal(t,e){t&&t.fill(0)}function fillSignal(t,e,r,n){t&&t.fill(r,n)}function copySignal(t,e,r){for(let n=0;n<r;n++)t[n]=e[n]}function containsValue(t){return void 0!==t}function addressOf(t){return t}function systemticks(){return Date.now()}function bitwiseFloat(t){var e=new Uint32Array(1);return e[0]=t,new DataView(e.buffer).getFloat32(0,!0)}function imul(t,e){return Math.imul(t,e)}var MIDI_StatusByteReceived=1,MIDI_SecondByteReceived=2,MIDI_NoteOff=3,MIDI_NoteOn=4,MIDI_Aftertouch=5,MIDI_CC=6,MIDI_ProgramChange=7,MIDI_ChannelPressure=8,MIDI_PitchBend=9,MIDI_Sysex_Started=10,MIDI_Sysex_Complete=11,MIDI_Generic=99,MIDI_InvalidByte=-1,MIDI_NoteOffMask=128,MIDI_NoteOnMask=144,MIDI_AfterTouchMask=160,MIDI_CCMask=176,MIDI_ProgramChangeMask=192,MIDI_ChannelPressureMask=208,MIDI_PitchBendMask=224,MIDI_QuarterFrame=241,MIDI_SongPos=242,MIDI_SongSel=243,MIDI_TuneRequest=246,MIDI_SysexStart=240,MIDI_SysexEnd=247,MIDI_Clock=248,MIDI_Start=250,MIDI_Continue=251,MIDI_Stop=252,MIDI_ActiveSense=254,MIDI_Reset=255,MIDI_CC_Sustain=64,MIDI_CC_Sostenuto=66,MIDI_CC_AllNotesOff=123,MIDI_CC_PressureMSB=70,MIDI_CC_PressureLSB=102,MIDI_CC_TimbreMSB=74,MIDI_CC_TimbreLSB=106,MIDI_NoteState_Off=0,MIDI_NoteState_On=1,MIDI_NoteState_Sustained=2,CLOCKS_PER_SEC=1;function parseMidi(t,e,r){if(240==e)return MIDI_Sysex_Started;if(t==MIDI_Sysex_Started)return 247==e?MIDI_Sysex_Complete:e<=127?t:MIDI_InvalidByte;if(e>127)return MIDI_StatusByteReceived;var n=240&r;return t==MIDI_StatusByteReceived?n==MIDI_ProgramChangeMask?MIDI_ProgramChange:n==MIDI_ChannelPressureMask?MIDI_ChannelPressure:MIDI_SecondByteReceived:t==MIDI_SecondByteReceived?n==MIDI_NoteOffMask||n==MIDI_NoteOnMask&&0==e?MIDI_NoteOff:n==MIDI_NoteOnMask?MIDI_NoteOn:n==MIDI_AfterTouchMask?MIDI_Aftertouch:n==MIDI_CCMask?MIDI_CC:n==MIDI_PitchBendMask?MIDI_PitchBend:MIDI_Generic:t}function getMIDIChannel(t){var e=240&t;return e>=128&&e<=224?15&t:0}function initDataRef(t,e){var r={};return r.name=t,r.isValid=!1,r.wantsFillFlag=!1,r.bytesToAllocate=0,r.channels=0,r.sampleRate=0,r.internal=e,r.index=-1,r.wantsFill=function(){return this.wantsFillFlag},r.setWantsFill=function(t){this.wantsFillFlag=t},r.requestSizeInBytes=function(t,e){(t>this.bytesToAllocate||e)&&(this.bytesToAllocate=t)},r.getRequestedSizeInBytes=function(){return this.bytesToAllocate},r.resetRequestedSizeInByte=function(){this.bytesToAllocate=0},r.getSizeInBytes=function(){return this.arrayBuffer.byteLength},r.hasRequestedSize=function(){return this.bytesToAllocate>0},r.isInternal=function(){return this.internal},r.getIndex=function(){return this.index},r.setIndex=function(t){this.index=t},r.clear=function(){r.arrayBuffer=new ArrayBuffer(0)},r.clear(),r}function initMultiRef(){var t={index:0,current:0,dataRefs:[],count:0};for(let e=0;e<arguments.length;e++)t.dataRefs.push(arguments[e]),t.count++;return t.setCurrent=function(t){t>=0&&t<this.count&&(this.current=t)},t.getIndex=function(){return this.index},t.setIndex=function(t){this.index=t},t}function updateMultiRef(t,e,r){e.setCurrent&&e.getIndex&&(e.setCurrent(r),t.getEngine().sendDataRefUpdated(e.getIndex()))}function updateDataRef(t,e){t.getEngine().sendDataRefUpdated(e.getIndex())}function FIXEDSIZEARRAYINIT(){let t=arguments[0];if(void 0!==t){let e=new Array(t);if(e.fill(0),void 0!==arguments[1]){let r=Array.from(arguments);r.splice(0,1);for(let n=0;n<t;n++)e[n]=FIXEDSIZEARRAYINIT.apply(null,r)}return e}return new Array}function TAG(t){let e=0;for(let r=0;r<t.length;r++){e=t.charCodeAt(r)+(e<<6)+(e<<16)-e}return 0|e}function serializeArrayToList(t,e){return t}function deserializeArrayFromList(t,e,r){t}function serializeDataRef(t){return t.resetRequestedSizeInByte(),t}function _evalSrc(src){var rnboObj;return eval(src),rnboObj}function getSubState(t,e){return void 0===t[e]&&(t[e]={}),t[e]}function getSubStateAt(t,e,r){return void 0===t[e]&&(t[e]=[]),void 0===t[e][r]&&(t[e][r]={}),t[e][r]}function stateIsEmpty(t){return 0===Object.keys(t).length}function TransportState(t){return t}function RNBO_UNUSED(){}let xoshiro_reset=Xoshiro.reset,xoshiro_next=Xoshiro.next;module.exports={deserializeSrc:function(t){return _evalSrc(t)},deserializeJSON:function(t){var e=t;return"string"==typeof e&&(e={src:t}),_evalSrc(e.src)},extractOptionsFromJSON:function(t){var e=t;return"string"==typeof e&&(e=JSON.parse(t)),e.options?e.options:{}},evalFunction(functionAsString){var tmpFunction,functionAsString="tmpFunction = "+functionAsString;return eval(functionAsString),tmpFunction},nextpoweroftwo,ParameterTypeNumber,ParameterTypeBang,ParameterTypeList,ParameterTypeSignal,ParameterTypeCount,IOTypeInput,IOTypeOutput,IOTypeUndefined:IOTypeUndefined.length,TAG}},852:t=>{function e(){let t=this.dataRef.getSizeInBytes()/this.BASEARRAYVIEW.BYTES_PER_ELEMENT,e=this.getChannels();return e?t/e:0}function r(t,e){let r=t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e;this.requestedChannels=e,this.dataRef.requestSizeInBytes(r,!1)}function n(t,e){return this[this.getChannels()*Math.floor(e)+t]}function i(t,e){const r=this.getChannels();return t<0||t>=r||e<0||e>=this.getSize()?0:this[r*Math.floor(e)+t]}function s(t,e,r){this[this.getChannels()*Math.floor(e)+t]=r}function o(t,e,r){const n=this.getChannels();t<0||t>=n||e<0||e>=this.getSize()||(this[n*Math.floor(e)+t]=r)}function u(){return this.dataRef.channels}function a(){return this.dataRef.sampleRate}function h(t){this.dataRef.sampleRate=t}function f(){this.dataRef.clear()}function c(t){if(t!==this.dataRef.channels){let e=this.getSize();return this.clear(),this.dataRef.channels=t,this.setSize(e)}return this}function l(){if(this.isAudioBuffer&&this.requestedChannels!==this.getChannels()&&0!==this.requestedChannels&&(this.getChannels()>0&&this.setZero(),this.dataRef.channels=this.requestedChannels,this.requestedChannels=0),this.dataRef.bytesToAllocate>0&&(this.dataRef.bytesToAllocate!==this.dataRef.getSizeInBytes()||!this.dataRef.isInternallyAllocated)){let t;if(this.dataRef.isInternallyAllocated){let e=Math.min(this.dataRef.arrayBuffer.byteLength,this.dataRef.bytesToAllocate);e/=this.BASEARRAYVIEW.BYTES_PER_ELEMENT,t=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer,0,e)}this.dataRef.arrayBuffer=new ArrayBuffer(this.dataRef.bytesToAllocate),this.dataRef.isInternallyAllocated=!0;let e=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer);return t?e.set(t):this.dataRef.wantsFillFlag=!0,b(e,this.dataRef,this.BASEARRAYVIEW),this.isAudioBuffer&&I(e),e}return this}function d(t){let e=this.getChannels();return this.requestedChannels=e,this.dataRef.requestSizeInBytes(t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e,!0),this.allocateIfNeeded()}function p(){this.fill&&this.fill(0)}function m(){return this.touched}function g(t){this.touched=t}function _(t){this.dataRef.setWantsFill(t)}function y(){return this.dataRef.getIndex()}function b(t,n,i){t.dataRef=n,t.BASEARRAYVIEW=i,t.getSize=e,t.requestSize=r,t.setSize=d,t.allocateIfNeeded=l,t.setZero=p,t.clear=f,t.getChannels=u,t.getSampleRate=a,t.setWantsFill=_,t.getIndex=y,n.setZero=function(){t.setZero()},t.touched=!1,t.getTouched=m,t.setTouched=g}function I(t){t.getSample=n,t.getSampleSafe=i,t.setSample=s,t.setSampleSafe=o,t.setChannels=c,t.setSampleRate=h,t.isAudioBuffer=!0,t.requestedChannels=0}let w=function(t,e){let r;return r=t.arrayBuffer?new e(t.arrayBuffer):{},b(r,t,e),r};(w.prototype=Object.create(null)).constructor=w;let v=function(t,e){let r=w.call(this,t,e);return I(r),r};(v.prototype=Object.create(w)).constructor=v;let M=function(t){return v.call(this,t,Float32Array)};(M.prototype=Object.create(v.prototype)).constructor=M;let E=function(t){return v.call(this,t,Float64Array)};(E.prototype=Object.create(v.prototype)).constructor=E;let T=function(t,e){let r=new e(t.dataRefs[t.current]);return r.multiRef=t,r.setCurrent=function(t){this.multiRef.setCurrent(Math.round(t))},r.getIndex=function(){return this.multiRef.getIndex()},r};T.prototype=Object.create(null),T.constructor=T;let B=function(t){return T.call(this,t,M)};(B.prototype=Object.create(T.prototype)).constructor=B;let S=function(t){return T.call(this,t,E)};(S.prototype=Object.create(T.prototype)).constructor=S;let A=function(t){return w.call(this,t,Int32Array)};(A.prototype=Object.create(w.prototype)).constructor=A;let P=function(t){return w.call(this,t,Uint8Array)};(P.prototype=Object.create(w.prototype)).constructor=P,t.exports={Float32Buffer:M,Float64Buffer:E,Float32MultiBuffer:B,Float64MultiBuffer:S,IntBuffer:A,UInt8Buffer:P}},126:t=>{var e=function(){};(e.prototype=Object.create(null)).constructor=e,e.prototype.setEngineAndPatcher=function(){},e.prototype.initialize=function(){},e.prototype.getNumParameters=function(){return 0},e.prototype.setParameterValue=function(){},e.prototype.prepareToProcess=function(){},e.prototype.process=function(){},t.exports={ExternalLoaderFactory:function(){return console.log("WARNING: Externals are not yet supported in Javascript"),new e}}},925:t=>{function e(t,e,r,n){r[n]=t[e]+0x9e3779b97f4a7c15n,r[n]=0xbf58476d1ce4e5b9n*(r[n]^r[n]>>30n),r[n]=0x94d049bb133111ebn*(r[n]^r[n]>>27n),r[n]=r[n]^r[n]>>31n}t.exports={reset:function(t,r){let n=new BigUint64Array(1);n[0]=BigInt(Math.trunc(1e6*t)),e(n,0,r,0),e(r,0,r,1),e(r,1,r,2),e(r,2,r,3)},next:function(t){let e=new BigUint64Array(1),r=new BigUint64Array(1);return r[0]=t[0]+t[3],e[0]=t[1]<<17n,t[2]^=t[0],t[3]^=t[1],t[1]^=t[2],t[0]^=t[3],t[2]^=e[0],t[3]=t[3]<<45n|t[3]>>19n,r[0]=r[0]>>11n,2220446049250313e-31*Number(r[0])-1}}},766:(t,e)=>{e.byteLength=function(t){var e=a(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,s=a(t),o=s[0],u=s[1],h=new i(function(t,e,r){return 3*(e+r)/4-r}(0,o,u)),f=0,c=u>0?o-4:o;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[f++]=e>>16&255,h[f++]=e>>8&255,h[f++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[f++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[f++]=e>>8&255,h[f++]=255&e);return h},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,s=[],o=16383,u=0,a=n-i;u<a;u+=o)s.push(h(t,u,u+o>a?a:u+o));1===i?(e=t[n-1],s.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],s.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return s.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,u=s.length;o<u;++o)r[o]=s[o],n[s.charCodeAt(o)]=o;function a(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,n){for(var i,s,o=[],u=e;u<n;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),o.push(r[(s=i)>>18&63]+r[s>>12&63]+r[s>>6&63]+r[63&s]);return o.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},834:(t,e,r)=>{\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\nconst n=r(766),i=r(181),s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=function(t){+t!=t&&(t=0);return a.alloc(+t)},e.INSPECT_MAX_BYTES=50;const o=2147483647;function u(t){if(t>o)throw new RangeError(\'The value "\'+t+\'" is invalid for option "size"\');const e=new Uint8Array(t);return Object.setPrototypeOf(e,a.prototype),e}function a(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError(\'The "string" argument must be of type string. Received type number\');return c(t)}return h(t,e,r)}function h(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!a.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|m(t,e);let n=u(r);const i=n.write(t,e);i!==r&&(n=n.slice(0,i));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){const e=new Uint8Array(t);return d(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer))return d(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return d(t,e,r);if("number"==typeof t)throw new TypeError(\'The "value" argument must not be of type number. Received type number\');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return a.from(n,e,r);const i=function(t){if(a.isBuffer(t)){const e=0|p(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||Y(t.length)?u(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return a.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function f(t){if("number"!=typeof t)throw new TypeError(\'"size" argument must be of type number\');if(t<0)throw new RangeError(\'The value "\'+t+\'" is invalid for option "size"\')}function c(t){return f(t),u(t<0?0:0|p(t))}function l(t){const e=t.length<0?0:0|p(t.length),r=u(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function d(t,e,r){if(e<0||t.byteLength<e)throw new RangeError(\'"offset" is outside of buffer bounds\');if(t.byteLength<e+(r||0))throw new RangeError(\'"length" is outside of buffer bounds\');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,a.prototype),n}function p(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function m(t,e){if(a.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError(\'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type \'+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(t).length;default:if(i)return n?-1:W(t).length;e=(""+e).toLowerCase(),i=!0}}function g(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,r);case"utf8":case"utf-8":return B(this,e,r);case"ascii":return A(this,e,r);case"latin1":case"binary":return P(this,e,r);case"base64":return T(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return D(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function _(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function y(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=a.from(e,n)),a.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){let s,o=1,u=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;o=2,u/=2,a/=2,r/=2}function h(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let n=-1;for(s=r;s<u;s++)if(h(t,s)===h(e,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===a)return n*o}else-1!==n&&(s-=s-n),n=-1}else for(r+a>u&&(r=u-a),s=r;s>=0;s--){let r=!0;for(let n=0;n<a;n++)if(h(t,s+n)!==h(e,n)){r=!1;break}if(r)return s}return-1}function I(t,e,r,n){r=Number(r)||0;const i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;const s=e.length;let o;for(n>s/2&&(n=s/2),o=0;o<n;++o){const n=parseInt(e.substr(2*o,2),16);if(Y(n))return o;t[r+o]=n}return o}function w(t,e,r,n){return K(W(e,t.length-r),t,r,n)}function v(t,e,r,n){return K(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function M(t,e,r,n){return K(G(e),t,r,n)}function E(t,e,r,n){return K(function(t,e){let r,n,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)r=t.charCodeAt(o),n=r>>8,i=r%256,s.push(i),s.push(n);return s}(e,t.length-r),t,r,n)}function T(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function B(t,e,r){r=Math.min(t.length,r);const n=[];let i=e;for(;i<r;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=r){let r,n,u,a;switch(o){case 1:e<128&&(s=e);break;case 2:r=t[i+1],128==(192&r)&&(a=(31&e)<<6|63&r,a>127&&(s=a));break;case 3:r=t[i+1],n=t[i+2],128==(192&r)&&128==(192&n)&&(a=(15&e)<<12|(63&r)<<6|63&n,a>2047&&(a<55296||a>57343)&&(s=a));break;case 4:r=t[i+1],n=t[i+2],u=t[i+3],128==(192&r)&&128==(192&n)&&128==(192&u)&&(a=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&u,a>65535&&a<1114112&&(s=a))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(t){const e=t.length;if(e<=S)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=S));return r}(n)}e.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(t,e,r){return h(t,e,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(t,e,r){return function(t,e,r){return f(t),t<=0?u(t):void 0!==e?"string"==typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},a.allocUnsafe=function(t){return c(t)},a.allocUnsafeSlow=function(t){return c(t)},a.isBuffer=function(t){return null!=t&&!0===t.t&&t!==a.prototype},a.compare=function(t,e){if(J(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError(\'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array\');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!Array.isArray(t))throw new TypeError(\'"list" argument must be an Array of Buffers\');if(0===t.length)return a.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=a.allocUnsafe(e);let i=0;for(r=0;r<t.length;++r){let e=t[r];if(J(e,Uint8Array))i+e.length>n.length?(a.isBuffer(e)||(e=a.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else{if(!a.isBuffer(e))throw new TypeError(\'"list" argument must be an Array of Buffers\');e.copy(n,i)}i+=e.length}return n},a.byteLength=m,a.prototype.t=!0,a.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)_(this,e,e+1);return this},a.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)_(this,e,e+3),_(this,e+1,e+2);return this},a.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)_(this,e,e+7),_(this,e+1,e+6),_(this,e+2,e+5),_(this,e+3,e+4);return this},a.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?B(this,0,t):g.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},s&&(a.prototype[s]=a.prototype.inspect),a.prototype.compare=function(t,e,r,n,i){if(J(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw new TypeError(\'The "target" argument must be one of type Buffer or Uint8Array. Received type \'+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;let s=(i>>>=0)-(n>>>=0),o=(r>>>=0)-(e>>>=0);const u=Math.min(s,o),h=this.slice(n,i),f=t.slice(e,r);for(let t=0;t<u;++t)if(h[t]!==f[t]){s=h[t],o=f[t];break}return s<o?-1:o<s?1:0},a.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},a.prototype.indexOf=function(t,e,r){return y(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return y(this,t,e,r,!1)},a.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let s=!1;for(;;)switch(n){case"hex":return I(this,t,e,r);case"utf8":case"utf-8":return w(this,t,e,r);case"ascii":case"latin1":case"binary":return v(this,t,e,r);case"base64":return M(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this.i||this,0)}};const S=4096;function A(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function P(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function O(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=Z[t[n]];return i}function D(t,e,r){const n=t.slice(e,r);let i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}function N(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,r,n,i,s){if(!a.isBuffer(t))throw new TypeError(\'"buffer" argument must be a Buffer instance\');if(e>i||e<s)throw new RangeError(\'"value" argument is out of bounds\');if(r+n>t.length)throw new RangeError("Index out of range")}function x(t,e,r,n,i){$(e,n,i,t,r,7);let s=Number(e&BigInt(4294967295));t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,r}function C(t,e,r,n,i){$(e,n,i,t,r,7);let s=Number(e&BigInt(4294967295));t[r+7]=s,s>>=8,t[r+6]=s,s>>=8,t[r+5]=s,s>>=8,t[r+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=o,o>>=8,t[r+2]=o,o>>=8,t[r+1]=o,o>>=8,t[r]=o,r+8}function k(t,e,r,n,i,s){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function U(t,e,r,n,s){return e=+e,r>>>=0,s||k(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function j(t,e,r,n,s){return e=+e,r>>>=0,s||k(t,0,r,8),i.write(t,e,r,n,52,8),r+8}a.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,a.prototype),n},a.prototype.readUintLE=a.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||N(t,e,this.length);let n=this[t],i=1,s=0;for(;++s<e&&(i*=256);)n+=this[t+s]*i;return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||N(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},a.prototype.readUint8=a.prototype.readUInt8=function(t,e){return t>>>=0,e||N(t,1,this.length),this[t]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(t,e){return t>>>=0,e||N(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(t,e){return t>>>=0,e||N(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(t,e){return t>>>=0,e||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(t,e){return t>>>=0,e||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readBigUInt64LE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),a.prototype.readBigUInt64BE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),a.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||N(t,e,this.length);let n=this[t],i=1,s=0;for(;++s<e&&(i*=256);)n+=this[t+s]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},a.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||N(t,e,this.length);let n=e,i=1,s=this[t+--n];for(;n>0&&(i*=256);)s+=this[t+--n]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},a.prototype.readInt8=function(t,e){return t>>>=0,e||N(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,e){t>>>=0,e||N(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(t,e){t>>>=0,e||N(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(t,e){return t>>>=0,e||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return t>>>=0,e||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readBigInt64LE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),a.prototype.readBigInt64BE=H((function(t){V(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||L(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),a.prototype.readFloatLE=function(t,e){return t>>>=0,e||N(t,4,this.length),i.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return t>>>=0,e||N(t,4,this.length),i.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return t>>>=0,e||N(t,8,this.length),i.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return t>>>=0,e||N(t,8,this.length),i.read(this,t,!1,52,8)},a.prototype.writeUintLE=a.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){R(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){R(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,255,0),this[e]=255&t,e+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeBigUInt64LE=H((function(t,e=0){return x(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeBigUInt64BE=H((function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);R(this,t,e,r,n-1,-n)}let i=0,s=1,o=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+r},a.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);R(this,t,e,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeBigInt64LE=H((function(t,e=0){return x(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeBigInt64BE=H((function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeFloatLE=function(t,e,r){return U(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return U(this,t,e,!1,r)},a.prototype.writeDoubleLE=function(t,e,r){return j(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return j(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,n){if(!a.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},a.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{const s=a.isBuffer(t)?t:a.from(t,n),o=s.length;if(0===o)throw new TypeError(\'The value "\'+t+\'" is invalid for argument "value"\');for(i=0;i<r-e;++i)this[i+e]=s[i%o]}return this};const X={};function z(t,e,r){X[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function F(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function $(t,e,r,n,i,s){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(s+1)}${n}`:`>= -(2${n} ** ${8*(s+1)-1}${n}) and < 2 ** ${8*(s+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new X.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,r){V(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||L(e,t.length-(r+1))}(n,i,s)}function V(t,e){if("number"!=typeof t)throw new X.ERR_INVALID_ARG_TYPE(e,"number",t)}function L(t,e,r){if(Math.floor(t)!==t)throw V(t,r),new X.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new X.ERR_BUFFER_OUT_OF_BOUNDS;throw new X.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}z("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),z("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),z("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=F(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=F(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function W(t,e){let r;e=e||1/0;const n=t.length;let i=null;const s=[];for(let o=0;o<n;++o){if(r=t.charCodeAt(o),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;s.push(r)}else if(r<2048){if((e-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function G(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function K(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Y(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function H(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},181:(t,e)=>{\n/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */\ne.read=function(t,e,r,n,i){var s,o,u=8*i-n-1,a=(1<<u)-1,h=a>>1,f=-7,c=r?i-1:0,l=r?-1:1,d=t[e+c];for(c+=l,s=d&(1<<-f)-1,d>>=-f,f+=u;f>0;s=256*s+t[e+c],c+=l,f-=8);for(o=s&(1<<-f)-1,s>>=-f,f+=n;f>0;o=256*o+t[e+c],c+=l,f-=8);if(0===s)s=1-h;else{if(s===a)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=h}return(d?-1:1)*o*Math.pow(2,s-n)},e.write=function(t,e,r,n,i,s){var o,u,a,h=8*s-i-1,f=(1<<h)-1,c=f>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,p=n?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-o))<1&&(o--,a*=2),(e+=o+c>=1?l/a:l*Math.pow(2,1-c))*a>=2&&(o++,a/=2),o+c>=f?(u=0,o=f):o+c>=1?(u=(e*a-1)*Math.pow(2,i),o+=c):(u=e*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;t[r+d]=255&u,d+=p,u/=256,i-=8);for(o=o<<i|u,h+=i;h>0;t[r+d]=255&o,d+=p,o/=256,h-=8);t[r+d-p]|=128*m}},264:t=>{t.exports={src:[{code:\'class RNBOPatcher{constructor(){this._currentTime=0,this.audioProcessSampleCount=0,this.sampleOffsetIntoNextAudioBuffer=0,this.vs=0,this.maxvs=0,this.sr=44100,this.invsr=2267573696e-14,this.zeroBuffer=0,this.dummyBuffer=0,this.voiceIndex=0,this.noteNumber=0}getParameterIndexForID(e){return-1}getNumMidiInputPorts(){return 0}processMidiEvent(e,t,s,r){this.updateTime(e)}getNumMidiOutputPorts(){return 0}process(e,t,s,r,i){this.vs=i,this.updateTime(this.getEngine().getCurrentTime()),this.audioProcessSampleCount=this.msToSamps(this._currentTime,this.sr)}prepareToProcess(e,t){this.vs=t,this.maxvs=t,this.zeroBuffer=resizeSignal(this.zeroBuffer,0,t),this.dummyBuffer=resizeSignal(this.dummyBuffer,0,t),this.sr=e,this.invsr=1/e}msToSamps(e,t){return rnbo_floor(e*t*.001)}sampsToMs(e){return e*(1e3*this.invsr)}getNumInputChannels(){return 0}getNumOutputChannels(){return 0}getDataRef(e){return 0}getNumDataRefs(){return 0}fillDataRef(e,t){e}processDataViewUpdate(e,t){this.updateTime(t)}initialize(e){this.assign_defaults(),this.setState(e),this.initializeObjects(e),this.allocateDataRefs(),this.startup(e)}initializeObjects(e){}allocateDataRefs(){}startup(e){}setIsMuted(e){}getPatcherSerial(){return 7}getState(e){e[eventTargetKey]=this,e[patcherSerialKey]=this.getPatcherSerial(),e.p7=1,e.p7_noteNumber=this.noteNumber}setState(e){e[patcherSerialKey]==this.getPatcherSerial()&&(containsValue(e[eventTargetKey])&&this.getEngine().updatePatcherEventTarget(e[eventTargetKey],this),containsValue(e.p7_noteNumber)&&(this.noteNumber=e.p7_noteNumber))}setParameterValue(e,t,s){this.updateTime(s)}processParameterEvent(e,t,s){this.setParameterValue(e,t,s)}processNormalizedParameterEvent(e,t,s){this.setParameterValueNormalized(e,t,s)}getParameterValue(e){return 0}getNumSignalInParameters(){return 0}getNumParameters(){return 0}getParameterName(e){return"bogus"}getParameterId(e){return"bogus"}getParameterInfo(e,t){e}sendParameter(e){this.getEngine().notifyParameterValueChanged(e,this.getParameterValue(e))}processClockEvent(e,t,s,r){this.updateTime(e)}processOutletAtCurrentTime(e,t,s){}processOutletEvent(e,t,s,r){this.updateTime(r),this.processOutletAtCurrentTime(e,t,s)}sendOutlet(e,t){this.getEngine().sendOutlet(this,e,t)}schedule(e,t){this.getEngine().scheduleClockEvent(this,e,t+this._currentTime)}scheduleValue(e,t,s){this.getEngine().scheduleClockEventWithValue(this,e,t+this._currentTime,s)}stop(e){this.getEngine().flushClockEvents(this,e,!1)}stopWithValue(e,v){this.getEngine().flushClockEventsWithValue(this,e,v,!1)}processNumMessage(e,o,t,s){this.updateTime(t)}processListMessage(e,o,t,s){this.updateTime(t)}resolveTag(e){return""}sendMidiEvent(e,t,s,r){this.getEngine().sendMidiEvent(e,t,s,r)}sendMidiEventList(e,t){this.getEngine().sendMidiEventList(e,t)}updateTime(e){this._currentTime=e,this.sampleOffsetIntoNextAudioBuffer=this.msToSamps(e,this.sr)-this.vs-this.audioProcessSampleCount}assign_defaults(){}setEngineAndPatcher(e,t){this._engineInterface=e,this._parentPatcher=t}getEngine(){return this._engineInterface}getPatcher(){return this._parentPatcher}}rnboObj=new RNBOPatcher;\',encoding:"utf-8",type:"js"}],options:{classname:"rnbomatic",minifyOutput:!0},desc:{parameters:[],numParameters:0,numSignalInParameters:0,layouts:[{name:"layout",boxes:[]}],numInputChannels:0,numOutputChannels:0,patcherSerial:0,externalDataRefs:[]}}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](r,r.exports,__webpack_require__),r.exports}var __webpack_exports__={};(()=>{var t;function e(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))}!function(t){t[t.Float32Audio=0]="Float32Audio",t[t.TypedArray=1]="TypedArray"}(t||(t={}));class r{constructor(){this.type=t.TypedArray}serialize(){return{type:this.type}}}class n{constructor(e,r){this.channels=0,this.sampleRate=0,this.type=t.Float32Audio,this.channels=e,this.sampleRate=r}static fromAudioBuffer(t){return new n(t.numberOfChannels,t.sampleRate)}get isInterleaved(){return!0}serialize(){return{channels:this.channels,sampleRate:this.sampleRate,type:this.type}}}var i,s;!function(t){t[t.Inport=0]="Inport",t[t.Outport=1]="Outport",t[t.Undefined=2]="Undefined"}(i||(i={})),function(t){t[t.STOPPED=0]="STOPPED",t[t.RUNNING=1]="RUNNING"}(s||(s={}));(()=>{try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){const t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(t instanceof WebAssembly.Module)return new WebAssembly.Instance(t)instanceof WebAssembly.Instance}}catch(t){}})();"undefined"!=typeof isSecureContext&&isSecureContext;Math.pow(10,4);const o=t=>t.slice();class u{constructor(){this.o=[],this.u=[]}get listenerCount(){return this.o.length+this.u.length}emit(t){if(this.o.length){const e=o(this.o);for(let r=0,n=e.length;r<n;r++)e[r](t)}if(this.u.length){const e=o(this.u);for(let r=0,n=e.length;r<n;r++)e[r](t);e.forEach((t=>this.unsubscribe(t)))}}once(t){return this.u.push(t),{unsubscribe:()=>this.unsubscribe(t)}}subscribe(t){return this.o.push(t),{unsubscribe:()=>this.unsubscribe(t)}}unsubscribe(t){const e=this.o.indexOf(t);e>=0&&this.o.splice(e,1);const r=this.u.indexOf(t);r>=0&&this.u.splice(r,1)}removeAllSubscriptions(){this.o=[],this.u=[]}}var a=__webpack_require__(133);class h{constructor(){this.h=0,this.l=44100,this.p=64,this.outgoingEvent=new u,this.parameterChangeEvent=new u,this.m=this.sampsToMs(this.p)}static getNonConversionObject(){return{applyStepsToNormalizedParameterValue:function(t){return t},convertToNormalizedParameterValue:function(t){return t},convertFromNormalizedParameterValue:function(t){return t},getNumParameters:function(){return 0},constrainParameterValue:function(t){return t},isPolyphonic:!1,subpatches:[]}}static deserializeConversion(t){if(t){const e={},r=Object.keys(t);for(let n=0;n<r.length;n++){const i=r[n];if("subpatches"===i){const r=Object.keys(t.subpatches);for(let n=0;n<r.length;n++){const i=r[n],s=t.subpatches[i],o=h.deserializeConversion(s);s.isPolyphonic?e[i]=[o]:e[i]=o}}else e[i]=a.evalFunction(t[i])}return e}return this.getNonConversionObject()}getSampleRate(){return this.l}getSamplesPerBlock(){return this.p}sampsToMs(t){return t/this.l*1e3}getNumInputChannels(){return this.g?this.g.numInputChannels:0}getNumOutputChannels(){return this.g?this.g.numOutputChannels:0}getNumMIDIInputPorts(){return this.g?this.g.numMidiInputPorts:0}getNumMIDIOutputPorts(){return this.g?this.g.numMidiOutputPorts:0}getNumParameters(){return this.g?this.g.numParameters:0}getNumSignalInParameters(){return this.g?this.g.numSignalInParameters:0}getNumSignalOutParameters(){return this.g?this.g.numSignalOutParameters:0}getPatcherSerial(){return void 0!==this.g?this.g.patcherSerial:0}getParameterName(t){if(!this.g||t>=this.g.parameters.length)throw new Error(`Parameter index ${t} out of bounds.`);return this.g.parameters[t].name}getParameterId(t){if(!this.g||t>=this.g.parameters.length)throw new Error(`Parameter index ${t} out of bounds.`);return this.g.parameters[t].paramId}getParameterToNormalizedFunction(t){return e=>this._.convertToNormalizedParameterValue(t,e)}getParameterFromNormalizedFunction(t){return e=>this._.convertFromNormalizedParameterValue(t,e)}constrainParameterValue(t){return e=>this._.constrainParameterValue(t,e)}getParameterInfo(t){if(!this.g||t>=this.g.parameters.length)throw new Error(`Parameter index ${t} out of bounds.`);const e=this.g.parameters[t];let r,n;switch(e.type){case"ParameterTypeBang":n=a.ParameterTypeBang;break;case"ParameterTypeCount":n=a.ParameterTypeCount;break;case"ParameterTypeList":n=a.ParameterTypeList;break;case"ParameterTypeNumber":n=a.ParameterTypeNumber;break;case"ParameterTypeSignal":n=a.ParameterTypeSignal;break;default:throw new Error(`Unknown Parameter Type from patcher description ${e.type}`)}switch(e.ioType){case"IOTypeInput":r=a.IOTypeInput;break;case"IOTypeOutput":r=a.IOTypeOutput;break;case"IOTypeUndefined":r=a.IOTypeUndefined;break;default:throw new Error(`Unknown Parameter IOType from patcher description ${e.type}`)}return{displayName:e.displayName,enumValues:e.enumValues,exponent:e.exponent,id:e.paramId,index:t,initialValue:e.initialValue,ioType:r,isEnum:e.isEnum,max:e.maximum,min:e.minimum,name:e.name,signalIndex:e.signalIndex,steps:e.steps,type:n,unit:e.unit,visible:e.visible}}getNumExternalDataRefs(){return void 0!==this.g?this.g.externalDataRefs.length:0}getExternalDataId(t){return void 0!==this.g?this.g.externalDataRefs[t].id:""}getExternalDataRefIds(){let t;return this.g&&(t=[],Object.keys(this.g.externalDataRefs).forEach((e=>{let r=this.g.externalDataRefs[e];t.push(r.id)}))),t}getExternalDataRefInfos(){return void 0!==this.g?this.g.externalDataRefs:[]}getNumMessages(){return void 0!==this.g?this.g.inports.length+this.g.outports.length:0}getMessageInfos(){let t=[];return void 0!==this.g&&(Object.keys(this.g.outports).forEach((e=>{t.push({tag:this.g.outports[e].tag,type:i.Outport,meta:this.g.outports[e].meta})})),Object.keys(this.g.inports).forEach((e=>{t.push({tag:this.g.inports[e].tag,type:i.Inport,meta:this.g.inports[e].meta})}))),t}removeAllSubscriptions(){this.outgoingEvent.removeAllSubscriptions(),this.parameterChangeEvent.removeAllSubscriptions()}setPatcherDesc(t){return e(this,void 0,void 0,(function*(){this.g=t,this._=h.deserializeConversion(this.g.paramConversion)}))}}var f,c,l,d;!function(t){t[t.BufferTransfer=0]="BufferTransfer",t[t.ClockEvent=1]="ClockEvent",t[t.DataRefEvent=2]="DataRefEvent",t[t.MessageEvent=3]="MessageEvent",t[t.MIDIEvent=4]="MIDIEvent",t[t.ParameterEvent=5]="ParameterEvent",t[t.PresetEvent=6]="PresetEvent",t[t.StartupEvent=7]="StartupEvent",t[t.TransportEvent=8]="TransportEvent",t[t.TempoEvent=9]="TempoEvent",t[t.BeatTimeEvent=10]="BeatTimeEvent",t[t.TimeSignatureEvent=11]="TimeSignatureEvent"}(f||(f={}));class p{constructor(t=0,e){this.invalid=!1,this.time=t,this.eventTarget=e}serialize(){return{eventTarget:this.eventTarget,invalid:this.invalid,source:this.source,time:this.time}}}class m extends p{constructor(t,e,r,n){super(t,n),this.type=f.ClockEvent,this.clockIndex=e,this.value=r}get hasValue(){return void 0!==this.value}serialize(){return Object.assign(super.serialize(),{clockIndex:this.clockIndex,type:this.type,value:this.value})}}!function(t){t[t.Update=1]="Update"}(c||(c={}));class g extends p{constructor(t,e,r,n){super(t,n),this.type=f.DataRefEvent,this.dataRefIndex=e,this.action=r}serialize(){return Object.assign(super.serialize(),{action:this.action,dataRefIndex:this.dataRefIndex,type:this.type})}}class _ extends p{constructor(t,e,r,n="",i){super(t,i),this.type=f.MessageEvent,this.objectId=n,this.tag=e,this.payload=r}serialize(){return Object.assign(super.serialize(),{payload:this.payload,objectId:this.objectId,tag:this.tag,type:this.type})}}class y extends p{constructor(t,e,r,n){if(super(t,n),this.type=f.MIDIEvent,r.length>3)throw new Error(`MIDIData can only contain a maximum of 3 bytes. Received ${r.length}`);if(this.data=r,this.data.length<3){const t=r.length;this.data.length=3,this.data=this.data.fill(void 0,t,3)}let i=0;for(let t=0;t<3;t++)void 0!==r[t]&&i++;if(i<1)throw new Error("MIDIData must at least have the first byte set.");this.length=i,this.status=240&r[0],this.channel=15&r[0],this.port=e}serialize(){return Object.assign(super.serialize(),{channel:this.channel,data:this.data,port:this.port,type:this.type})}}class b extends p{constructor(t,e,r,n,i){super(t,i),this.type=f.ParameterEvent,this.target=e,this.value=r,this.source=n}serialize(){return Object.assign(super.serialize(),{target:this.target,type:this.type,value:this.value})}}!function(t){t[t.Set=1]="Set",t[t.Touched=2]="Touched"}(l||(l={}));class I extends p{constructor(t,e,r){super(t,void 0),this.type=f.PresetEvent,this.action=e,this.preset=r}serialize(){return Object.assign(super.serialize(),{action:this.action,type:this.type,preset:this.preset})}}class w extends p{constructor(t,e){super(t,void 0),this.type=f.TransportEvent,this.state=e}serialize(){return Object.assign(super.serialize(),{state:this.state,type:this.type})}}class v extends p{constructor(t,e){super(t,void 0),this.type=f.TempoEvent,this.tempo=e}serialize(){return Object.assign(super.serialize(),{tempo:this.tempo,type:this.type})}}class M extends p{constructor(t,e){super(t,void 0),this.type=f.BeatTimeEvent,this.beattime=e}serialize(){return Object.assign(super.serialize(),{beattime:this.beattime,type:this.type})}}class E extends p{constructor(t,e,r){super(t,void 0),this.type=f.TimeSignatureEvent,this.numerator=e,this.denominator=r}serialize(){return Object.assign(super.serialize(),{numerator:this.numerator,denominator:this.denominator,type:this.type})}}!function(t){t[t.BEGIN=0]="BEGIN",t[t.END=1]="END"}(d||(d={}));class T extends p{constructor(t,e){super(t,void 0),this.type=f.StartupEvent,this.phase=e}serialize(){return Object.assign(super.serialize(),{phase:this.phase,type:this.type})}}const B=__webpack_require__(264);function S(t,e){return t.time-e.time}function A(t){t.sort(S)}class P extends h{constructor(){super(),this.I=!1,this.v=!1,this.M=void 0,this.T=-1,this.B=[],this.I=!1,this.setPatcherDesc(B.desc),this.setPatcherCode(B.src[0].code)}S(t){const e=t.eventTarget||this.A;if(t.time=Math.max(t.time,this.h),this.M=t,t.type===f.ParameterEvent){const r=t;e.setParameterValue(r.target,r.value,t.time)}else if(t.type===f.MIDIEvent){const r=t;e.processMidiEvent(r.time,r.port,r.data,r.length)}else if(t.type===f.ClockEvent){const r=t;e.processClockEvent(r.time,r.clockIndex,r.hasValue,r.value)}else if(t.type===f.DataRefEvent){const r=t;r.action===c.Update&&e.processDataViewUpdate(r.dataRefIndex,r.time)}else if(t.type===f.MessageEvent){const r=t;Array.isArray(r.payload)?e.processListMessage(a.TAG(r.tag),a.TAG(r.objectId),r.time,r.payload):void 0===r.payload?e.processBangMessage(a.TAG(r.tag),a.TAG(r.objectId),r.time):e.processNumMessage(a.TAG(r.tag),a.TAG(r.objectId),r.time,r.payload)}else if(t.type===f.PresetEvent){const e=t;e.action===l.Set&&(this.v=!0,this.A.setPreset(e.time,e.preset),this.v=!1)}else if(t.type===f.TransportEvent){const e=t;this.A.processTransportEvent(e.time,e.state)}else if(t.type===f.TempoEvent){const e=t;this.A.processTempoEvent(e.time,e.tempo)}else if(t.type===f.BeatTimeEvent){const e=t;this.A.processBeatTimeEvent(e.time,e.beattime)}else if(t.type===f.TimeSignatureEvent){const e=t;this.A.processTimeSignatureEvent(e.time,e.numerator,e.denominator)}else if(t.type===f.StartupEvent){const e=t;this.v=e.phase===d.BEGIN}this.M=void 0}getCurrentTime(){return this.h}setCurrentTime(t){this.h=t}prepareToProcess(t,e,r){(r||t!==this.l||e!==this.p)&&(this.l=t,this.p=e,this.m=this.sampsToMs(this.p),this.isSync&&this.A.prepareToProcess(this.l,this.p))}process(t,e,r,n,i,s,o){const u=Math.min(e,this.getNumInputChannels()+this.getNumSignalInParameters()),a=Math.min(n,this.getNumOutputChannels()),h=Math.min(i,this.p);for(this.T=this.h+this.m,void 0!==this.midiInput&&(this.B.push.apply(this.B,s),this.I=!0),this.I&&(A(this.B),this.I=!1);this.B.length>0&&this.B[0].time<this.T;)this.S(this.B.shift());this.A.process(t,u,r,a,h),this.h=this.T,this.T=-1}scheduleMidiEvent(t,e){this.scheduleEvent(new y(this.h,t,e,this.A))}notifyParameterValueChanged(t,e){let r=this.M?this.M.source:void 0;this.parameterChangeEvent.emit(new b(this.getCurrentTime(),t,e,r))}scheduleParameterChange(t,e,r){this.scheduleEvent(new b(this.getCurrentTime(),t,e,void 0))}sendNumMessage(t,e,r){const n=new _(this.h,this.A.resolveTag(t),r,this.A.resolveTag(e));this.outgoingEvent.emit(n)}sendBangMessage(t,e){const r=new _(this.h,this.A.resolveTag(t),void 0,this.A.resolveTag(e));this.outgoingEvent.emit(r)}sendListMessage(t,e,r){const n=new _(this.h,this.A.resolveTag(t),r,this.A.resolveTag(e));this.outgoingEvent.emit(n)}getParameterValue(t){return this.A.getParameterValue(t)}flushClockEvents(t,e,r){this.flushClockEventsWithValue(t,e,void 0,r)}flushClockEventsWithValue(t,e,r,n){for(let i=0;i<this.B.length;i++)if(this.B[i]instanceof m){const s=this.B[i];s.eventTarget!==t||s.clockIndex!==e&&void 0!==s.clockIndex||void 0!==r&&s.value!==r||(this.B.splice(i,1),n&&this.S(s),i--)}}deleteClockEvents(t){this.flushClockEvents(t,void 0,!1)}scheduleClockEvent(t,e,r){this.scheduleClockEventWithValue(t,e,r,void 0)}scheduleClockEventWithValue(t,e,r,n){this.scheduleEvent(new m(r,e,n,t))}sendMidiEvent(t,e,r,n){const i=new y(this.getCurrentTime(),t,[e,r,n],void 0);this.outgoingEvent.emit(i)}sendMidiEventList(t,e){let r;for(r=2;r<e.length;r+=3)this.sendMidiEvent(t,e[r-2],e[r-1],e[r]);if(r-=3,r<e.length){var n=r-e.length;this.sendMidiEvent(t,e[r],n>1?e[r+1]:void 0,n>2?e[r+2]:void 0)}}sendOutlet(t,e,r){console.log("sendOutlet",t,e,r)}updatePatcherEventTarget(t,e){for(let r=0;r<this.B.length;r++)this.B[r].eventTarget===t&&(this.B[r].eventTarget=e,this.B[r].invalid=!1)}rescheduleEventTarget(t){for(let e=0;e<this.B.length;e++)this.B[e].eventTarget===t&&(this.B[e].invalid=!1)}isInProcess(){return this.T>-1}sendDataRefUpdated(t){this.scheduleEvent(new g(this.getCurrentTime(),t,c.Update,this.A))}get isSync(){return!0}scheduleEvent(t){this.B.push(t),this.isInProcess()?A(this.B):this.I=!0}setPatcherCode(t){return e(this,void 0,void 0,(function*(){const e={};this.A&&this.A.getState(e),this.A=a.deserializeSrc(t);for(let t=0;t<this.B.length;t++)this.B[t].eventTarget&&(this.B[t].invalid=!0);this.A.setEngineAndPatcher(this,null),this.scheduleEvent(new T(this.h,d.BEGIN)),this.A.initialize(e),this.scheduleEvent(new T(this.h,d.END)),this.A.prepareToProcess(this.l,this.p,!0);for(let t=this.B.length-1;t>=0;t--)this.B[t].invalid&&this.B.splice(t,1)}))}setExternalData(t,r,i){return e(this,void 0,void 0,(function*(){const e=this.A.getNumDataRefs();for(let s=0;s<e;s++){const e=this.A.getDataRef(s);if(e.name==t){e.arrayBuffer=r,i instanceof n&&(e.channels=i.channels,e.sampleRate=i.sampleRate),this.sendDataRefUpdated(s);break}}}))}releaseExternalData(t){return e(this,void 0,void 0,(function*(){const e=this.A.getNumDataRefs();let i,s;for(let o=0;o<e;o++){const e=this.A.getDataRef(o);if(e.name==t){i=e.arrayBuffer,e.arrayBuffer=new ArrayBuffer(0),e.channels?(s=new n(e.channels,e.sampleRate),e.channels=0,e.sampleRate=0):s=new r,this.sendDataRefUpdated(o);break}}if(!i)throw new Error(`Invalid DataBuffer. No DataBuffer with id ${t} found.`);return{data:i,typeDesc:s}}))}getPreset(){return e(this,void 0,void 0,(function*(){let t={};return this.A.getPreset(t),t}))}setPreset(t){this.scheduleEvent(new I(this.h,l.Set,t))}presetTouched(){this.v||this.outgoingEvent.emit(new I(this.h,l.Touched,void 0))}}var O,D;function N(t){return class extends t{constructor(...t){super(),this.changeEvent=new u,this.P=new u;const e=t[0];this.O=e.notificationSetting,this.convertFromNormalizedValue=e.scaling.convertFromNormalized,this.convertToNormalizedValue=e.scaling.convertToNormalized,this.constrainParameterValue=e.scaling.constrainParameterValue,this.initialValue=e.initialValue,this.D=e.initialValue,this.displayName=e.displayName||e.name,this.exponent=e.exponent,this.id=e.id,this.index=e.index,this.min=e.min,this.max=e.max,this.name=e.name,this.steps=e.steps,this.unit=e.unit||""}get notificationSetting(){return this.O}get normalizedValue(){return this.convertToNormalizedValue(this.D)}set normalizedValue(t){this.N(this.convertFromNormalizedValue(t))}R(t){this.O=t}N(t){t=this.constrainParameterValue(t),this.D!==t&&(this.D=t,this.P.emit(this),this.notificationSetting===D.All&&this.changeEvent.emit(t))}C(t){this.D=t,this.changeEvent.emit(t)}}}!function(t){t[t.Number=0]="Number",t[t.Bang=1]="Bang",t[t.List=2]="List",t[t.Signal=3]="Signal",t[t.Count=4]="Count",t[t.Enum=5]="Enum"}(O||(O={})),function(t){t[t.All=0]="All",t[t.Internal=1]="Internal"}(D||(D={}));N(Object);N(Object);N(Object);class R{constructor(){this.k={},this.U=new Float32Array(128)}addParam(t,e){t.type==a.ParameterTypeSignal&&t.ioType===a.IOTypeInput&&(this.k[t.signalIndex]={name:e,param:new Float32Array(128)})}getParamName(t){let e=this.k[t];return void 0!==e?e.name:void 0}getParamArray(t,e,r){if(e.length==r)return e;{let n=this.k[t];return n.param.length!=r&&(n.param=new Float32Array(r)),n.param.fill(e[0])}}}var x,C;!function(t){t[t.LoadPatcher=0]="LoadPatcher",t[t.ScheduleEvent=1]="ScheduleEvent",t[t.TransferBuffer=2]="TransferBuffer",t[t.ReleaseBuffer=3]="ReleaseBuffer",t[t.SetPreset=4]="SetPreset",t[t.GetPreset=5]="GetPreset"}(x||(x={})),function(t){t[t.LoadPatcherFinished=1e3]="LoadPatcherFinished",t[t.OutgoingEvent=1002]="OutgoingEvent",t[t.ReleasedBuffer=1003]="ReleasedBuffer",t[t.TransferBufferFinished=1004]="TransferBufferFinished",t[t.GetPresetResponse=1005]="GetPresetResponse"}(C||(C={}));var k=__webpack_require__(834).Buffer;const U=JSON.parse(k.from("XXXX___RNBOPATCHERDESC_REPLACE___XXXX","base64").toString("utf-8")),j=k.from("XXXX___RNBOPATCHERSRC_REPLACE___XXXX","base64").toString("utf-8");class X extends AudioWorkletProcessor{constructor(i){super(i),this.j=new P,this.X=[],this.F=[],this.$=new R,this.V=i=>e(this,void 0,void 0,(function*(){switch(i.data[0]){case x.LoadPatcher:yield this.j.setPatcherDesc(U),yield this.j.setPatcherCode(j);for(let t=0;t<this.j.getNumParameters();t++){const e=this.j.getParameterInfo(t);this.$.addParam(e,this.j.getParameterName(t))}this.X=new Array(this.j.getNumInputChannels()+this.j.getNumSignalInParameters()),this.F=new Array(this.j.getNumOutputChannels()+this.j.getNumSignalOutParameters()),this.j.process([],0,[[]],1,0),this.port.postMessage([C.LoadPatcherFinished]);break;case x.ScheduleEvent:this.j.scheduleEvent((t=>{switch(t.type){case f.ClockEvent:return new m(t.time,t.clockIndex,t.value,t.eventTarget);case f.DataRefEvent:return new g(t.time,t.dataRefIndex,t.action,t.eventTarget);case f.MessageEvent:return new _(t.time,t.tag,t.payload,t.objectId,t.eventTarget);case f.MIDIEvent:return new y(t.time,t.port,t.data,t.eventTarget);case f.ParameterEvent:return new b(t.time,t.target,t.value,t.source,t.eventTarget);case f.PresetEvent:return new I(t.time,t.action,t.preset);case f.TransportEvent:return new w(t.time,t.state);case f.TempoEvent:return new v(t.time,t.tempo);case f.BeatTimeEvent:return new M(t.time,t.beattime);case f.TimeSignatureEvent:return new E(t.time,t.numerator,t.denominator);case f.StartupEvent:return new T(t.time,t.phase);default:throw new Error(`Unable to deserialize RNBOEvent of type ${t.type}`)}})(i.data[1]));break;case x.TransferBuffer:{const e=i.data[1];this.j.setExternalData(e.memoryId,e.data,(e=>{switch(e.type){case t.Float32Audio:return new n(e.channels,e.sampleRate);case t.TypedArray:return new r;default:throw new Error(`Unable to deserialize RNBODataDesc of type ${e.type}`)}})(e.typeDesc)),this.port.postMessage([C.TransferBufferFinished,{memoryId:e.memoryId}]);break}case x.ReleaseBuffer:{const t=i.data[1],{data:e,typeDesc:r}=yield this.j.releaseExternalData(t.memoryId);this.port.postMessage([C.ReleasedBuffer,{memoryId:t.memoryId,data:e,typeDesc:r.serialize()}],[e]);break}case x.GetPreset:{const t=yield this.j.getPreset();this.port.postMessage([C.GetPresetResponse,{preset:t}]);break}case x.SetPreset:{const t=i.data[1];this.j.setPreset(t.preset)}}})),this.L=t=>{this.port.postMessage([C.OutgoingEvent,t.serialize()])},this.q=t=>{this.port.postMessage([C.OutgoingEvent,t.serialize()])},this.j.outgoingEvent.subscribe(this.L),this.j.parameterChangeEvent.subscribe(this.q),this.port.onmessage=this.V,this.port.start()}static get parameterDescriptors(){return XXXX___RNBOPARAMDESCRIPTORS_REPLACE___XXXX}process(t,e,r){let n,i,s=0,o=0;for(n=0;n<t.length;n++){const e=t[n];for(i=0;i<e.length&&(s<this.X.length&&e[i].length);i++)this.X[s]=e[i],s++}for(n=0;n<e.length;n++){const t=e[n];for(i=0;i<t.length&&o<this.F.length;i++)this.F[o]=t[i],o++}const u=o>0?this.F[0].length:s>0?this.X[0].length:e.length>0?e[0][0].length:t.length>0?t[0][0].length:0;for(let t=s;t<this.X.length;t++){const e=this.$.getParamName(t);void 0!==e&&(this.X[t]=this.$.getParamArray(t,r[e],u),s++)}return this.j.setCurrentTime(1e3*currentTime),this.j.prepareToProcess(sampleRate,u),this.j.process(this.X,s,this.F,o,u),!0}}let z="XXXX---RNBOPROCESSORNAME_REPLACE---XXXX";z.startsWith("XXXX---RNBOPROCESSORNAME_REPLACE---")&&(z="RNBOProcessor"),registerProcessor(z,X)})()})();',
              wasm:
                '(()=>{var __webpack_modules__={133:(module,__unused_webpack_exports,__webpack_require__)=>{var Float32Buffer=__webpack_require__(852).Float32Buffer,Float64Buffer=__webpack_require__(852).Float64Buffer,Float32MultiBuffer=__webpack_require__(852).Float32MultiBuffer,Float64MultiBuffer=__webpack_require__(852).Float64MultiBuffer,IntBuffer=__webpack_require__(852).IntBuffer,UInt8Buffer=__webpack_require__(852).UInt8Buffer,ExternalLoaderFactory=__webpack_require__(126).ExternalLoaderFactory;let Xoshiro=__webpack_require__(925);var patcherSerialKey="XX__PatcherSerialKey__XX",eventTargetKey="XX__EventTargetKey__XX",ParameterTypeNumber=0,ParameterTypeBang=1,ParameterTypeList=2,ParameterTypeSignal=3,ParameterTypeCount=4,IOTypeInput=0,IOTypeOutput=1,IOTypeUndefined=2,INVALID_INDEX=Number.MAX_SAFE_INTEGER;function rand01(){return Math.random()}function pi01(){return Math.PI}var rnbo_abs=Math.abs,rnbo_fabs=Math.abs,rnbo_acos=Math.acos,rnbo_acosh=Math.acosh,rnbo_asin=Math.asin,rnbo_asinh=Math.asinh,rnbo_atan=Math.atan,rnbo_atan2=Math.atan2,rnbo_atanh=Math.atanh,rnbo_cbrt=Math.cbrt,rnbo_ceil=Math.ceil,rnbo_cos=Math.cos,rnbo_cosh=Math.cosh,rnbo_exp=Math.exp,rnbo_expm1=Math.expm1,rnbo_floor=Math.floor,rnbo_fround=Math.round,rnbo_imul=Math.imul,rnbo_log=Math.log,rnbo_log10=Math.log10,rnbo_log1p=Math.log1p,rnbo_log2=Math.log2,rnbo_pow=Math.pow,rnbo_round=rnbo_fround,rnbo_sign=Math.sign,rnbo_sin=Math.sin,rnbo_sinh=Math.sinh,rnbo_sqrt=Math.sqrt,rnbo_tan=Math.tan,rnbo_tanh=Math.tanh,trunc=Math.trunc,rnbo_trunc=Math.trunc,rnbo_number_max=()=>Math.MAX_VALUE,rnbo_isnan=isNaN;function fixnan(t){return isNaN(t)?0:t}function fract(t){return t%1}function fixdenorm(t){return t}function isdenorm(t){return!1}var fastsin=Math.sin,fastcos=Math.cos,fastexp=Math.exp,fastpow=Math.pow,fasttan=Math.tan;function nextpoweroftwo(t){return 0===t?1:(t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,(t|=t>>16)+1)}var MAX_32BIT_INT=Math.pow(2,32);function uint32_add(t,e){var n=t+e;return n>=MAX_32BIT_INT&&(n-=MAX_32BIT_INT),Math.trunc(n)}function uint32_trunc(t){return t>>>0}function uint32_rshift(t,e){return t>>>e}function imod(t,e){return(0|t)%(0|e)}function imod_nocast(t,e){return t%e}function getArrayValueAtIndex(t,e){return t[e]}function allocateArray(t,e){return new Array(t)}function createListCopy(t){return t.slice(0)}function jsCreateListCopy(t){return createListCopy(t)}function list(){let t=[];for(let e=0;e<arguments.length;e++){let n=arguments[e];if(Array.isArray(n))for(let e=0;e<n.length;e++)t.push(n[e]);else t.push(n)}return t}function resizeSignal(t,e,n){for(var r=t||[],i=e;i<n;i++)r[i]=0;return r}function zeroSignal(t,e){t&&t.fill(0)}function fillSignal(t,e,n,r){t&&t.fill(n,r)}function copySignal(t,e,n){for(let r=0;r<n;r++)t[r]=e[r]}function containsValue(t){return void 0!==t}function addressOf(t){return t}function systemticks(){return Date.now()}function bitwiseFloat(t){var e=new Uint32Array(1);return e[0]=t,new DataView(e.buffer).getFloat32(0,!0)}function imul(t,e){return Math.imul(t,e)}var MIDI_StatusByteReceived=1,MIDI_SecondByteReceived=2,MIDI_NoteOff=3,MIDI_NoteOn=4,MIDI_Aftertouch=5,MIDI_CC=6,MIDI_ProgramChange=7,MIDI_ChannelPressure=8,MIDI_PitchBend=9,MIDI_Sysex_Started=10,MIDI_Sysex_Complete=11,MIDI_Generic=99,MIDI_InvalidByte=-1,MIDI_NoteOffMask=128,MIDI_NoteOnMask=144,MIDI_AfterTouchMask=160,MIDI_CCMask=176,MIDI_ProgramChangeMask=192,MIDI_ChannelPressureMask=208,MIDI_PitchBendMask=224,MIDI_QuarterFrame=241,MIDI_SongPos=242,MIDI_SongSel=243,MIDI_TuneRequest=246,MIDI_SysexStart=240,MIDI_SysexEnd=247,MIDI_Clock=248,MIDI_Start=250,MIDI_Continue=251,MIDI_Stop=252,MIDI_ActiveSense=254,MIDI_Reset=255,MIDI_CC_Sustain=64,MIDI_CC_Sostenuto=66,MIDI_CC_AllNotesOff=123,MIDI_CC_PressureMSB=70,MIDI_CC_PressureLSB=102,MIDI_CC_TimbreMSB=74,MIDI_CC_TimbreLSB=106,MIDI_NoteState_Off=0,MIDI_NoteState_On=1,MIDI_NoteState_Sustained=2,CLOCKS_PER_SEC=1;function parseMidi(t,e,n){if(240==e)return MIDI_Sysex_Started;if(t==MIDI_Sysex_Started)return 247==e?MIDI_Sysex_Complete:e<=127?t:MIDI_InvalidByte;if(e>127)return MIDI_StatusByteReceived;var r=240&n;return t==MIDI_StatusByteReceived?r==MIDI_ProgramChangeMask?MIDI_ProgramChange:r==MIDI_ChannelPressureMask?MIDI_ChannelPressure:MIDI_SecondByteReceived:t==MIDI_SecondByteReceived?r==MIDI_NoteOffMask||r==MIDI_NoteOnMask&&0==e?MIDI_NoteOff:r==MIDI_NoteOnMask?MIDI_NoteOn:r==MIDI_AfterTouchMask?MIDI_Aftertouch:r==MIDI_CCMask?MIDI_CC:r==MIDI_PitchBendMask?MIDI_PitchBend:MIDI_Generic:t}function getMIDIChannel(t){var e=240&t;return e>=128&&e<=224?15&t:0}function initDataRef(t,e){var n={};return n.name=t,n.isValid=!1,n.wantsFillFlag=!1,n.bytesToAllocate=0,n.channels=0,n.sampleRate=0,n.internal=e,n.index=-1,n.wantsFill=function(){return this.wantsFillFlag},n.setWantsFill=function(t){this.wantsFillFlag=t},n.requestSizeInBytes=function(t,e){(t>this.bytesToAllocate||e)&&(this.bytesToAllocate=t)},n.getRequestedSizeInBytes=function(){return this.bytesToAllocate},n.resetRequestedSizeInByte=function(){this.bytesToAllocate=0},n.getSizeInBytes=function(){return this.arrayBuffer.byteLength},n.hasRequestedSize=function(){return this.bytesToAllocate>0},n.isInternal=function(){return this.internal},n.getIndex=function(){return this.index},n.setIndex=function(t){this.index=t},n.clear=function(){n.arrayBuffer=new ArrayBuffer(0)},n.clear(),n}function initMultiRef(){var t={index:0,current:0,dataRefs:[],count:0};for(let e=0;e<arguments.length;e++)t.dataRefs.push(arguments[e]),t.count++;return t.setCurrent=function(t){t>=0&&t<this.count&&(this.current=t)},t.getIndex=function(){return this.index},t.setIndex=function(t){this.index=t},t}function updateMultiRef(t,e,n){e.setCurrent&&e.getIndex&&(e.setCurrent(n),t.getEngine().sendDataRefUpdated(e.getIndex()))}function updateDataRef(t,e){t.getEngine().sendDataRefUpdated(e.getIndex())}function FIXEDSIZEARRAYINIT(){let t=arguments[0];if(void 0!==t){let e=new Array(t);if(e.fill(0),void 0!==arguments[1]){let n=Array.from(arguments);n.splice(0,1);for(let r=0;r<t;r++)e[r]=FIXEDSIZEARRAYINIT.apply(null,n)}return e}return new Array}function TAG(t){let e=0;for(let n=0;n<t.length;n++){e=t.charCodeAt(n)+(e<<6)+(e<<16)-e}return 0|e}function serializeArrayToList(t,e){return t}function deserializeArrayFromList(t,e,n){t}function serializeDataRef(t){return t.resetRequestedSizeInByte(),t}function _evalSrc(src){var rnboObj;return eval(src),rnboObj}function getSubState(t,e){return void 0===t[e]&&(t[e]={}),t[e]}function getSubStateAt(t,e,n){return void 0===t[e]&&(t[e]=[]),void 0===t[e][n]&&(t[e][n]={}),t[e][n]}function stateIsEmpty(t){return 0===Object.keys(t).length}function TransportState(t){return t}function RNBO_UNUSED(){}let xoshiro_reset=Xoshiro.reset,xoshiro_next=Xoshiro.next;module.exports={deserializeSrc:function(t){return _evalSrc(t)},deserializeJSON:function(t){var e=t;return"string"==typeof e&&(e={src:t}),_evalSrc(e.src)},extractOptionsFromJSON:function(t){var e=t;return"string"==typeof e&&(e=JSON.parse(t)),e.options?e.options:{}},evalFunction(functionAsString){var tmpFunction,functionAsString="tmpFunction = "+functionAsString;return eval(functionAsString),tmpFunction},nextpoweroftwo,ParameterTypeNumber,ParameterTypeBang,ParameterTypeList,ParameterTypeSignal,ParameterTypeCount,IOTypeInput,IOTypeOutput,IOTypeUndefined:IOTypeUndefined.length,TAG}},852:t=>{function e(){let t=this.dataRef.getSizeInBytes()/this.BASEARRAYVIEW.BYTES_PER_ELEMENT,e=this.getChannels();return e?t/e:0}function n(t,e){let n=t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e;this.requestedChannels=e,this.dataRef.requestSizeInBytes(n,!1)}function r(t,e){return this[this.getChannels()*Math.floor(e)+t]}function i(t,e){const n=this.getChannels();return t<0||t>=n||e<0||e>=this.getSize()?0:this[n*Math.floor(e)+t]}function s(t,e,n){this[this.getChannels()*Math.floor(e)+t]=n}function a(t,e,n){const r=this.getChannels();t<0||t>=r||e<0||e>=this.getSize()||(this[r*Math.floor(e)+t]=n)}function o(){return this.dataRef.channels}function u(){return this.dataRef.sampleRate}function h(t){this.dataRef.sampleRate=t}function c(){this.dataRef.clear()}function f(t){if(t!==this.dataRef.channels){let e=this.getSize();return this.clear(),this.dataRef.channels=t,this.setSize(e)}return this}function _(){if(this.isAudioBuffer&&this.requestedChannels!==this.getChannels()&&0!==this.requestedChannels&&(this.getChannels()>0&&this.setZero(),this.dataRef.channels=this.requestedChannels,this.requestedChannels=0),this.dataRef.bytesToAllocate>0&&(this.dataRef.bytesToAllocate!==this.dataRef.getSizeInBytes()||!this.dataRef.isInternallyAllocated)){let t;if(this.dataRef.isInternallyAllocated){let e=Math.min(this.dataRef.arrayBuffer.byteLength,this.dataRef.bytesToAllocate);e/=this.BASEARRAYVIEW.BYTES_PER_ELEMENT,t=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer,0,e)}this.dataRef.arrayBuffer=new ArrayBuffer(this.dataRef.bytesToAllocate),this.dataRef.isInternallyAllocated=!0;let e=new this.BASEARRAYVIEW(this.dataRef.arrayBuffer);return t?e.set(t):this.dataRef.wantsFillFlag=!0,y(e,this.dataRef,this.BASEARRAYVIEW),this.isAudioBuffer&&m(e),e}return this}function l(t){let e=this.getChannels();return this.requestedChannels=e,this.dataRef.requestSizeInBytes(t*this.BASEARRAYVIEW.BYTES_PER_ELEMENT*e,!0),this.allocateIfNeeded()}function I(){this.fill&&this.fill(0)}function M(){return this.touched}function b(t){this.touched=t}function p(t){this.dataRef.setWantsFill(t)}function d(){return this.dataRef.getIndex()}function y(t,r,i){t.dataRef=r,t.BASEARRAYVIEW=i,t.getSize=e,t.requestSize=n,t.setSize=l,t.allocateIfNeeded=_,t.setZero=I,t.clear=c,t.getChannels=o,t.getSampleRate=u,t.setWantsFill=p,t.getIndex=d,r.setZero=function(){t.setZero()},t.touched=!1,t.getTouched=M,t.setTouched=b}function m(t){t.getSample=r,t.getSampleSafe=i,t.setSample=s,t.setSampleSafe=a,t.setChannels=f,t.setSampleRate=h,t.isAudioBuffer=!0,t.requestedChannels=0}let v=function(t,e){let n;return n=t.arrayBuffer?new e(t.arrayBuffer):{},y(n,t,e),n};(v.prototype=Object.create(null)).constructor=v;let D=function(t,e){let n=v.call(this,t,e);return m(n),n};(D.prototype=Object.create(v)).constructor=D;let S=function(t){return D.call(this,t,Float32Array)};(S.prototype=Object.create(D.prototype)).constructor=S;let w=function(t){return D.call(this,t,Float64Array)};(w.prototype=Object.create(D.prototype)).constructor=w;let A=function(t,e){let n=new e(t.dataRefs[t.current]);return n.multiRef=t,n.setCurrent=function(t){this.multiRef.setCurrent(Math.round(t))},n.getIndex=function(){return this.multiRef.getIndex()},n};A.prototype=Object.create(null),A.constructor=A;let g=function(t){return A.call(this,t,S)};(g.prototype=Object.create(A.prototype)).constructor=g;let O=function(t){return A.call(this,t,w)};(O.prototype=Object.create(A.prototype)).constructor=O;let P=function(t){return v.call(this,t,Int32Array)};(P.prototype=Object.create(v.prototype)).constructor=P;let T=function(t){return v.call(this,t,Uint8Array)};(T.prototype=Object.create(v.prototype)).constructor=T,t.exports={Float32Buffer:S,Float64Buffer:w,Float32MultiBuffer:g,Float64MultiBuffer:O,IntBuffer:P,UInt8Buffer:T}},126:t=>{var e=function(){};(e.prototype=Object.create(null)).constructor=e,e.prototype.setEngineAndPatcher=function(){},e.prototype.initialize=function(){},e.prototype.getNumParameters=function(){return 0},e.prototype.setParameterValue=function(){},e.prototype.prepareToProcess=function(){},e.prototype.process=function(){},t.exports={ExternalLoaderFactory:function(){return console.log("WARNING: Externals are not yet supported in Javascript"),new e}}},925:t=>{function e(t,e,n,r){n[r]=t[e]+0x9e3779b97f4a7c15n,n[r]=0xbf58476d1ce4e5b9n*(n[r]^n[r]>>30n),n[r]=0x94d049bb133111ebn*(n[r]^n[r]>>27n),n[r]=n[r]^n[r]>>31n}t.exports={reset:function(t,n){let r=new BigUint64Array(1);r[0]=BigInt(Math.trunc(1e6*t)),e(r,0,n,0),e(n,0,n,1),e(n,1,n,2),e(n,2,n,3)},next:function(t){let e=new BigUint64Array(1),n=new BigUint64Array(1);return n[0]=t[0]+t[3],e[0]=t[1]<<17n,t[2]^=t[0],t[3]^=t[1],t[1]^=t[2],t[0]^=t[3],t[2]^=e[0],t[3]=t[3]<<45n|t[3]>>19n,n[0]=n[0]>>11n,2220446049250313e-31*Number(n[0])-1}}}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](n,n.exports,__webpack_require__),n.exports}var __webpack_exports__={};(()=>{var t;!function(t){t[t.Float32Audio=0]="Float32Audio",t[t.TypedArray=1]="TypedArray"}(t||(t={}));class e{constructor(){this.type=t.TypedArray}serialize(){return{type:this.type}}}class n{constructor(e,n){this.channels=0,this.sampleRate=0,this.type=t.Float32Audio,this.channels=e,this.sampleRate=n}static fromAudioBuffer(t){return new n(t.numberOfChannels,t.sampleRate)}get isInterleaved(){return!0}serialize(){return{channels:this.channels,sampleRate:this.sampleRate,type:this.type}}}var r,i,s,a;!function(t){t[t.BufferTransfer=0]="BufferTransfer",t[t.ClockEvent=1]="ClockEvent",t[t.DataRefEvent=2]="DataRefEvent",t[t.MessageEvent=3]="MessageEvent",t[t.MIDIEvent=4]="MIDIEvent",t[t.ParameterEvent=5]="ParameterEvent",t[t.PresetEvent=6]="PresetEvent",t[t.StartupEvent=7]="StartupEvent",t[t.TransportEvent=8]="TransportEvent",t[t.TempoEvent=9]="TempoEvent",t[t.BeatTimeEvent=10]="BeatTimeEvent",t[t.TimeSignatureEvent=11]="TimeSignatureEvent"}(r||(r={}));class o{constructor(t=0,e){this.invalid=!1,this.time=t,this.eventTarget=e}serialize(){return{eventTarget:this.eventTarget,invalid:this.invalid,source:this.source,time:this.time}}}!function(t){t[t.Update=1]="Update"}(i||(i={}));class u extends o{constructor(t,e,n,i="",s){super(t,s),this.type=r.MessageEvent,this.objectId=i,this.tag=e,this.payload=n}serialize(){return Object.assign(super.serialize(),{payload:this.payload,objectId:this.objectId,tag:this.tag,type:this.type})}}class h extends o{constructor(t,e,n,i){if(super(t,i),this.type=r.MIDIEvent,n.length>3)throw new Error(`MIDIData can only contain a maximum of 3 bytes. Received ${n.length}`);if(this.data=n,this.data.length<3){const t=n.length;this.data.length=3,this.data=this.data.fill(void 0,t,3)}let s=0;for(let t=0;t<3;t++)void 0!==n[t]&&s++;if(s<1)throw new Error("MIDIData must at least have the first byte set.");this.length=s,this.status=240&n[0],this.channel=15&n[0],this.port=e}serialize(){return Object.assign(super.serialize(),{channel:this.channel,data:this.data,port:this.port,type:this.type})}}class c extends o{constructor(t,e,n,i,s){super(t,s),this.type=r.ParameterEvent,this.target=e,this.value=n,this.source=i}serialize(){return Object.assign(super.serialize(),{target:this.target,type:this.type,value:this.value})}}!function(t){t[t.Set=1]="Set",t[t.Touched=2]="Touched"}(s||(s={}));class f extends o{constructor(t,e,n){super(t,void 0),this.type=r.PresetEvent,this.action=e,this.preset=n}serialize(){return Object.assign(super.serialize(),{action:this.action,type:this.type,preset:this.preset})}}!function(t){t[t.BEGIN=0]="BEGIN",t[t.END=1]="END"}(a||(a={}));var _,l;!function(t){t[t.Number=0]="Number",t[t.Bang=1]="Bang",t[t.List=2]="List",t[t.Signal=3]="Signal",t[t.Count=4]="Count",t[t.Enum=5]="Enum"}(_||(_={})),function(t){t[t.All=0]="All",t[t.Internal=1]="Internal"}(l||(l={}));(()=>{try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){const t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(t instanceof WebAssembly.Module)return new WebAssembly.Instance(t)instanceof WebAssembly.Instance}}catch(t){}})();"undefined"!=typeof isSecureContext&&isSecureContext;Math.pow(10,4);const I=t=>t.slice();class M{constructor(){this.t=[],this.i=[]}get listenerCount(){return this.t.length+this.i.length}emit(t){if(this.t.length){const e=I(this.t);for(let n=0,r=e.length;n<r;n++)e[n](t)}if(this.i.length){const e=I(this.i);for(let n=0,r=e.length;n<r;n++)e[n](t);e.forEach((t=>this.unsubscribe(t)))}}once(t){return this.i.push(t),{unsubscribe:()=>this.unsubscribe(t)}}subscribe(t){return this.t.push(t),{unsubscribe:()=>this.unsubscribe(t)}}unsubscribe(t){const e=this.t.indexOf(t);e>=0&&this.t.splice(e,1);const n=this.i.indexOf(t);n>=0&&this.i.splice(n,1)}removeAllSubscriptions(){this.t=[],this.i=[]}}function b(t){return class extends t{constructor(...t){super(),this.changeEvent=new M,this.o=new M;const e=t[0];this.u=e.notificationSetting,this.convertFromNormalizedValue=e.scaling.convertFromNormalized,this.convertToNormalizedValue=e.scaling.convertToNormalized,this.constrainParameterValue=e.scaling.constrainParameterValue,this.initialValue=e.initialValue,this.h=e.initialValue,this.displayName=e.displayName||e.name,this.exponent=e.exponent,this.id=e.id,this.index=e.index,this.min=e.min,this.max=e.max,this.name=e.name,this.steps=e.steps,this.unit=e.unit||""}get notificationSetting(){return this.u}get normalizedValue(){return this.convertToNormalizedValue(this.h)}set normalizedValue(t){this._(this.convertFromNormalizedValue(t))}l(t){this.u=t}_(t){t=this.constrainParameterValue(t),this.h!==t&&(this.h=t,this.o.emit(this),this.notificationSetting===l.All&&this.changeEvent.emit(t))}I(t){this.h=t,this.changeEvent.emit(t)}}}b(Object);b(Object);b(Object);var p=__webpack_require__(133);class d{constructor(){this.M={},this.p=new Float32Array(128)}addParam(t,e){t.type==p.ParameterTypeSignal&&t.ioType===p.IOTypeInput&&(this.M[t.signalIndex]={name:e,param:new Float32Array(128)})}getParamName(t){let e=this.M[t];return void 0!==e?e.name:void 0}getParamArray(t,e,n){if(e.length==n)return e;{let r=this.M[t];return r.param.length!=n&&(r.param=new Float32Array(n)),r.param.fill(e[0])}}}class y{constructor(t,e){this.m=0,this.v=0,this.D=!1,this.S=new d,this.A=e;let n=new this.A.CoreObject;this.g=n;let r={handleParameterEvent:t.handleParameterEvent.bind(t),handleMidiEvent:t.handleMidiEvent.bind(t),handleMessageEvent:t.handleMessageEvent.bind(t),handlePresetEvent:t.handlePresetEvent.bind(t)},i=this.A.EventHandler.implement(r);this.O=n.createParameterInterface(i);for(let t=0;t<n.getNumParameters();t++){let e=n.getParameterInfo(t);this.S.addParam(e,n.getParameterName(t))}this.m=n.getNumInputChannels()+n.getNumSignalInParameters(),this.v=n.getNumOutputChannels(),this.D=!0}isReady(){return this.D}pushArray(t){let e=this.g.getArrayPassingHEAP(t.length);return this.A.HEAPF64.set(t,e>>3),e}retrieveArray(t){let e=[];for(let n=0;n<t.size();n++)e.push(t.get(n));return e}setExternalData(t,r,i){const s=new Uint8Array(r),a=this.g.getNewMemoryBuffer(s.byteLength);this.A.HEAPU8.set(s,a),i instanceof n?this.g.setExternalAudioBuffer(t,a,s.byteLength,i.channels,i.sampleRate):i instanceof e&&this.g.setExternalUntypedBuffer(t,a,s.byteLength)}releaseExternalData(t){let r,i=this.g.getDataRefIndex(t),s=this.g.getDataRefType(i),a=this.g.getDataRefData(i),o=new Uint8Array(a.sizeInBytes);return o.set(this.A.HEAPU8.subarray(a.data,a.data+a.sizeInBytes)),r=1==s.type?new n(s.channels,s.sampleRate):new e,this.g.releaseDataRef(i),[o.buffer,r]}getCurrentTime(){return this.g.getCurrentTime()}setCurrentTime(t){this.g.setCurrentTime(t)}prepareToProcess(t,e){this.g.prepareToProcess(t,e)}process(t,e,n,r,i,s){let a=0,o=0;for(let n=0;n<e&&a<this.m;n++){let e=t[n],r=this.g.getInputChannel(a);this.A.HEAPF64.set(e,r>>3),a++}if(s)for(let t=a;t<this.m;t++){let e=this.S.getParamName(t);if(void 0!==e){let n=this.g.getInputChannel(t);this.A.HEAPF64.set(this.S.getParamArray(t,s[e],i),n>>3),a++}}this.g.process(a,this.v,i);for(let t=0;t<r&&o<this.v;t++){let e=n[t],r=this.g.getOutputChannel(o)>>3;e.set(this.A.HEAPF64.subarray(r,r+e.length)),o++}}resolveTag(t){return this.g.resolveTag(t)}scheduleEvent(t){t.type===r.MIDIEvent?this.g.scheduleMidiEvent(t.time,t.port,t.data[0],t.data[1],t.data[2]):t.type===r.ParameterEvent?this.g.scheduleParameterEvent(t.target,t.time,t.value,t.source):t.type===r.MessageEvent?Array.isArray(t.payload)?this.g.sendListMessage(t.tag,t.objectId,this.pushArray(t.payload),t.payload.length,t.time):"number"==typeof t.payload?this.g.sendNumMessage(t.tag,t.objectId,t.payload,t.time):void 0===t.payload&&this.g.sendBangMessage(t.tag,t.objectId,t.time):t.type===r.TransportEvent?this.g.scheduleTransportEvent(t.time,t.state):t.type===r.TempoEvent?this.g.scheduleTempoEvent(t.time,t.tempo):t.type===r.BeatTimeEvent?this.g.scheduleBeatTimeEvent(t.time,t.beattime):t.type===r.TimeSignatureEvent&&this.g.scheduleTimeSignatureEvent(t.time,t.numerator,t.denominator)}getNumParameters(){return this.g.getNumParameters()}getParameterValue(t){return this.g.getParameterValue(t)}numIns(){return this.m}numOuts(){return this.v}getPreset(){return this.g.getPreset()}setPreset(t){this.g.setPreset(t)}}var m,v;!function(t){t[t.LoadPatcher=0]="LoadPatcher",t[t.ScheduleEvent=1]="ScheduleEvent",t[t.TransferBuffer=2]="TransferBuffer",t[t.ReleaseBuffer=3]="ReleaseBuffer",t[t.SetPreset=4]="SetPreset",t[t.GetPreset=5]="GetPreset"}(m||(m={})),function(t){t[t.LoadPatcherFinished=1e3]="LoadPatcherFinished",t[t.OutgoingEvent=1002]="OutgoingEvent",t[t.ReleasedBuffer=1003]="ReleasedBuffer",t[t.TransferBufferFinished=1004]="TransferBufferFinished",t[t.GetPresetResponse=1005]="GetPresetResponse"}(v||(v={}));class D extends AudioWorkletProcessor{constructor(r){super(r),this.P=128,this.T=r=>{switch(r.data[0]){case m.LoadPatcher:rnbo_module().then((t=>{this.C=new y(this,t),this.port.postMessage([v.LoadPatcherFinished])}));break;case m.ScheduleEvent:const i=r.data[1];this.C.scheduleEvent(i);break;case m.TransferBuffer:{const i=r.data[1],s=(r=>{switch(r.type){case t.Float32Audio:return new n(r.channels,r.sampleRate);case t.TypedArray:return new e;default:throw new Error(`Unable to deserialize RNBODataDesc of type ${r.type}`)}})(i.typeDesc);this.C.setExternalData(i.memoryId,i.data,s),this.port.postMessage([v.TransferBufferFinished,{memoryId:i.memoryId}]);break}case m.ReleaseBuffer:{const t=r.data[1],[e,n]=this.C.releaseExternalData(t.memoryId);this.port.postMessage([v.ReleasedBuffer,{memoryId:t.memoryId,data:e,typeDesc:n.serialize()}],[e]);break}case m.GetPreset:{const t=JSON.parse(this.C.getPreset());this.port.postMessage([v.GetPresetResponse,{preset:t}]);break}case m.SetPreset:{const t=r.data[1];this.C.setPreset(JSON.stringify(t.preset))}}},this.port.onmessage=this.T,this.port.start()}static get parameterDescriptors(){return XXXX___RNBOPARAMDESCRIPTORS_REPLACE___XXXX}handleParameterEvent(t){this.port.postMessage([v.OutgoingEvent,new c(t.time,t.index,t.value,t.source,void 0).serialize()])}handleMidiEvent(t){const e=new h(t.time,t.port,[t.getB1(),t.getB2(),t.getB3()],void 0);this.port.postMessage([v.OutgoingEvent,e.serialize()])}handleMessageEvent(t){const e=new u(t.time,this.C.resolveTag(t.tag),0==t.type?t.numValue:1===t.type?this.C.retrieveArray(t.listValue):void 0,this.C.resolveTag(t.objectId));this.port.postMessage([v.OutgoingEvent,e.serialize()])}handlePresetEvent(t){const e=new f(t.time,s.Touched);this.port.postMessage([v.OutgoingEvent,e.serialize()])}process(t,e,n){let r=0,i=0;if(!this.C||!this.C.isReady())return!0;let s=this.C.numOuts()>0?e[0][0].length:this.C.numIns()>0?t[0][0].length:e.length>0?e[0][0].length:t.length>0?t[0][0].length:0;s||(s=this.P),this.P<s&&(this.P=s),this.C.setCurrentTime(1e3*currentTime),this.C.prepareToProcess(sampleRate,s);const a=[];for(let e=0;e<t.length&&r<this.C.numIns();e++){const n=t[e];for(let t=0;t<n.length&&r<this.C.numIns()&&n[t].length>0;t++)a.push(n[t]),r++}const o=[];for(let t=0;t<e.length&&i<this.C.numOuts();t++){const n=e[t];for(let t=0;t<n.length&&i<this.C.numOuts();t++)o.push(n[t]),i++}return this.C.process(a,r,o,i,s,n),!0}}let S="XXXX---RNBOPROCESSORNAME_REPLACE---XXXX";S.startsWith("XXXX---RNBOPROCESSORNAME_REPLACE---")&&(S="RNBOProcessor"),registerProcessor(S,D)})()})();',
            };
          class O extends m {
            constructor({ context: t, parameterNotificationSetting: e }, r) {
              super({ context: t, parameterNotificationSetting: e, type: d.Worklet }),
                r ? (this.it = r.it) : ((this.it = new T()), this.it.setPatcherDesc(R.desc), this.it.setPatcherCode(R.src[0].code)),
                (this.Mt = r ? r.node : void 0);
            }
            Lt() {
              let t = '[';
              const e = this.it.getNumParameters();
              let r = !0;
              for (let n = 0; n < e; n++) {
                const e = this.it.getParameterInfo(n);
                if (e && void 0 !== e.type && e.type === y.ParameterTypeSignal && void 0 !== e.ioType && e.ioType === y.IOTypeInput) {
                  const n = void 0 === e.min ? 0 : e.min,
                    i = void 0 === e.max ? 1 : e.max;
                  r || (t += ', '),
                    (t += "{ name: '" + e.name + "', automationRate: 'a-rate', minValue: " + n + ', maxValue: ' + i + '}'),
                    (r = !1);
                }
              }
              return (t += ']'), t;
            }
            get node() {
              return this.wt(), this.Mt;
            }
            setPatcher(e, r) {
              return (0, t.mG)(this, void 0, void 0, function* () {
                if (!this.it) throw new Error('Attempt to set patcher on a WorkletDevice without assigning engine first.');
                this.vt(),
                  yield this.it.setPatcherDesc(e),
                  this.F.setEngine(this.it),
                  this.it.outgoingEvent.subscribe(this.dt),
                  this.it.prepareToProcess(this.context.sampleRate, 128, !1),
                  (this.ft = r.type);
                const t = D[r.type];
                let n = this.numInputChannels,
                  i = this.numOutputChannels;
                n < 1 && (n = 1), i < 1 && (i = 1);
                const a = `RNBOProcessor-${(0, s.EL)()}`;
                let o = t
                  .replace('XXXX---RNBOPROCESSORNAME_REPLACE---XXXX', a)
                  .replace('XXXX___RNBOPARAMDESCRIPTORS_REPLACE___XXXX', this.Lt());
                switch (r.type) {
                  case 'js':
                    o = o
                      .replace('XXXX___RNBOPATCHERDESC_REPLACE___XXXX', P.from(JSON.stringify(e), 'utf-8').toString('base64'))
                      .replace('XXXX___RNBOPATCHERSRC_REPLACE___XXXX', P.from(this.Et(r), 'utf-8').toString('base64'));
                    break;
                  case 'wasm':
                    o = this.Et(r) + '\n\n' + o;
                }
                const u = URL.createObjectURL(new Blob([o], { type: 'text/javascript' }));
                yield this.context.audioWorklet.addModule(u),
                  (this.Mt = new (S())(this.context, a, this.it.eventSubjects, {
                    numberOfInputs: n,
                    numberOfOutputs: 1,
                    outputChannelCount: [i],
                  })),
                  yield this.Mt.loadPatcher(),
                  this.F.parameterChangeEvent.subscribe(this.gt);
              });
            }
          }
          var C = __webpack_require__(676);
          const N = '1.2.3',
            k = { bufferSize: 1024, parameterNotificationSetting: a.EX.All };
          function x(e, r) {
            var n, i, a, o;
            return (0, t.mG)(this, void 0, void 0, function* () {
              const { context: t, patcher: u, type: h = 'auto' } = e,
                f =
                  (null === (i = null === (n = u.desc) || void 0 === n ? void 0 : n.meta) || void 0 === i ? void 0 : i.rnboversion) ||
                  u.desc.rnboVersion;
              if (
                (f !== N &&
                  (console.error || console.log)(
                    `\nWarning: The patcher was exported with a RNBO version does not match the version of @rnbo/js:\n@rnbo/js\tv${N}\npatcher\t\tv${f}\nIn order to have full compatibility and avoid unexpected behavior please ensure that you use the version of @rnbo/js that matches the version of RNBO you used to export your patcher.`.trim()
                  ),
                !(null === (a = u.src) || void 0 === a ? void 0 : a.length) || !Array.isArray(u.src))
              )
                throw new Error(
                  'Incompatible patcher. Please export you patch with a newer, matching version of RNBO or adjust the version of @rnbo/js you are using.'
                );
              if (!new Set(null === (o = u.src) || void 0 === o ? void 0 : o.map((t) => t.type)).has('js') && !s.f8)
                throw new Error('Incompatible browser. RNBO requires WASM support in order to run your exported patch as a Device.');
              const c = u.src.find((t) => s.f8 && 'wasm' === t.type) || u.src.find((t) => 'js' === t.type),
                l = Object.assign({}, k, e.options);
              if (!t) throw new Error('Missing argument context');
              if (h === d.Worklet && !s.I7)
                throw new Error(
                  "Failed to create WorkletDevice due to missing AudioWorklet support. Please use the Device.Script or 'auto' option instead"
                );
              const p = 'auto' === h ? (s.I7 ? d.Worklet : d.Script) : h;
              if (p !== d.Script && p !== d.Worklet)
                throw new Error(`Unknown Device type ${p}. Please make sure to use either 'auto' or a valid DeviceType`);
              let g;
              if (p === d.Script) {
                if (r && !(r instanceof B))
                  throw new Error(
                    "Error: Creating a device from an existing device cannot alter the type of the device. Please make sure to use a consistent 'type' parameter."
                  );
                g = new B(
                  { bufferSize: l.bufferSize, parameterNotificationSetting: l.parameterNotificationSetting, context: t },
                  (null == r ? void 0 : r.sourceType) === c.type ? r : void 0
                );
              } else if (p === d.Worklet) {
                if (r && !(r instanceof O))
                  throw new Error(
                    "Error: Creating a device from an existing device cannot alter the type of the device. Please make sure to use a consistent 'type' parameter."
                  );
                g = new O({ context: t, parameterNotificationSetting: l.parameterNotificationSetting }, r);
              }
              return r && r.destroy(), (g = g), yield g.setPatcher(u.desc, c), g;
            });
          }
        })(),
        __webpack_exports__
      );
    })();
  }),
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = factory())
    : 'function' == typeof define && define.amd
    ? define([], factory)
    : 'object' == typeof exports
    ? (exports.RNBO = factory())
    : (root.RNBO = factory());
