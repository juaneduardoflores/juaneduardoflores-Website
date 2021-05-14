var _self =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (g) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i,
      a = 0,
      C = {
        manual: g.Prism && g.Prism.manual,
        disableWorkerMessageHandler:
          g.Prism && g.Prism.disableWorkerMessageHandler,
        util: {
          encode: function (e) {
            return e instanceof M
              ? new M(e.type, C.util.encode(e.content), e.alias)
              : Array.isArray(e)
              ? e.map(C.util.encode)
              : e
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, "__id", { value: ++a }), e.__id
            );
          },
          clone: function n(e, t) {
            var r,
              a,
              i = C.util.type(e);
            switch (((t = t || {}), i)) {
              case "Object":
                if (((a = C.util.objId(e)), t[a])) return t[a];
                for (var l in ((r = {}), (t[a] = r), e))
                  e.hasOwnProperty(l) && (r[l] = n(e[l], t));
                return r;
              case "Array":
                return (
                  (a = C.util.objId(e)),
                  t[a]
                    ? t[a]
                    : ((r = []),
                      (t[a] = r),
                      e.forEach(function (e, a) {
                        r[a] = n(e, t);
                      }),
                      r)
                );
              default:
                return e;
            }
          },
        },
        languages: {
          extend: function (e, a) {
            var n = C.util.clone(C.languages[e]);
            for (var t in a) n[t] = a[t];
            return n;
          },
          insertBefore: function (n, e, a, t) {
            var r = (t = t || C.languages)[n],
              i = {};
            for (var l in r)
              if (r.hasOwnProperty(l)) {
                if (l == e)
                  for (var o in a) a.hasOwnProperty(o) && (i[o] = a[o]);
                a.hasOwnProperty(l) || (i[l] = r[l]);
              }
            var s = t[n];
            return (
              (t[n] = i),
              C.languages.DFS(C.languages, function (e, a) {
                a === s && e != n && (this[e] = i);
              }),
              i
            );
          },
          DFS: function e(a, n, t, r) {
            r = r || {};
            var i = C.util.objId;
            for (var l in a)
              if (a.hasOwnProperty(l)) {
                n.call(a, l, a[l], t || l);
                var o = a[l],
                  s = C.util.type(o);
                "Object" !== s || r[i(o)]
                  ? "Array" !== s || r[i(o)] || ((r[i(o)] = !0), e(o, n, l, r))
                  : ((r[i(o)] = !0), e(o, n, null, r));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, a) {
          C.highlightAllUnder(document, e, a);
        },
        highlightAllUnder: function (e, a, n) {
          var t = {
            callback: n,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          C.hooks.run("before-highlightall", t);
          for (
            var r, i = t.elements || e.querySelectorAll(t.selector), l = 0;
            (r = i[l++]);

          )
            C.highlightElement(r, !0 === a, t.callback);
        },
        highlightElement: function (e, a, n) {
          for (var t, r = "none", i = e; i && !c.test(i.className); )
            i = i.parentNode;
          i &&
            ((r = (i.className.match(c) || [, "none"])[1].toLowerCase()),
            (t = C.languages[r])),
            (e.className =
              e.className.replace(c, "").replace(/\s+/g, " ") +
              " language-" +
              r),
            e.parentNode &&
              ((i = e.parentNode),
              /pre/i.test(i.nodeName) &&
                (i.className =
                  i.className.replace(c, "").replace(/\s+/g, " ") +
                  " language-" +
                  r));
          var l = { element: e, language: r, grammar: t, code: e.textContent },
            o = function (e) {
              (l.highlightedCode = e),
                C.hooks.run("before-insert", l),
                (l.element.innerHTML = l.highlightedCode),
                C.hooks.run("after-highlight", l),
                C.hooks.run("complete", l),
                n && n.call(l.element);
            };
          if ((C.hooks.run("before-sanity-check", l), l.code))
            if ((C.hooks.run("before-highlight", l), l.grammar))
              if (a && g.Worker) {
                var s = new Worker(C.filename);
                (s.onmessage = function (e) {
                  o(e.data);
                }),
                  s.postMessage(
                    JSON.stringify({
                      language: l.language,
                      code: l.code,
                      immediateClose: !0,
                    })
                  );
              } else o(C.highlight(l.code, l.grammar, l.language));
            else o(C.util.encode(l.code));
          else C.hooks.run("complete", l);
        },
        highlight: function (e, a, n) {
          var t = { code: e, grammar: a, language: n };
          return (
            C.hooks.run("before-tokenize", t),
            (t.tokens = C.tokenize(t.code, t.grammar)),
            C.hooks.run("after-tokenize", t),
            M.stringify(C.util.encode(t.tokens), t.language)
          );
        },
        matchGrammar: function (e, a, n, t, r, i, l) {
          for (var o in n)
            if (n.hasOwnProperty(o) && n[o]) {
              if (o == l) return;
              var s = n[o];
              s = "Array" === C.util.type(s) ? s : [s];
              for (var g = 0; g < s.length; ++g) {
                var c = s[g],
                  u = c.inside,
                  h = !!c.lookbehind,
                  f = !!c.greedy,
                  d = 0,
                  m = c.alias;
                if (f && !c.pattern.global) {
                  var p = c.pattern.toString().match(/[imuy]*$/)[0];
                  c.pattern = RegExp(c.pattern.source, p + "g");
                }
                c = c.pattern || c;
                for (var y = t, v = r; y < a.length; v += a[y].length, ++y) {
                  var k = a[y];
                  if (a.length > e.length) return;
                  if (!(k instanceof M)) {
                    if (f && y != a.length - 1) {
                      if (((c.lastIndex = v), !(x = c.exec(e)))) break;
                      for (
                        var b = x.index + (h ? x[1].length : 0),
                          w = x.index + x[0].length,
                          A = y,
                          P = v,
                          O = a.length;
                        A < O && (P < w || (!a[A].type && !a[A - 1].greedy));
                        ++A
                      )
                        (P += a[A].length) <= b && (++y, (v = P));
                      if (a[y] instanceof M) continue;
                      (N = A - y), (k = e.slice(v, P)), (x.index -= v);
                    } else {
                      c.lastIndex = 0;
                      var x = c.exec(k),
                        N = 1;
                    }
                    if (x) {
                      h && (d = x[1] ? x[1].length : 0);
                      w = (b = x.index + d) + (x = x[0].slice(d)).length;
                      var j = k.slice(0, b),
                        S = k.slice(w),
                        E = [y, N];
                      j && (++y, (v += j.length), E.push(j));
                      var _ = new M(o, u ? C.tokenize(x, u) : x, m, x, f);
                      if (
                        (E.push(_),
                        S && E.push(S),
                        Array.prototype.splice.apply(a, E),
                        1 != N && C.matchGrammar(e, a, n, y, v, !0, o),
                        i)
                      )
                        break;
                    } else if (i) break;
                  }
                }
              }
            }
        },
        tokenize: function (e, a) {
          var n = [e],
            t = a.rest;
          if (t) {
            for (var r in t) a[r] = t[r];
            delete a.rest;
          }
          return C.matchGrammar(e, n, a, 0, 0, !1), n;
        },
        hooks: {
          all: {},
          add: function (e, a) {
            var n = C.hooks.all;
            (n[e] = n[e] || []), n[e].push(a);
          },
          run: function (e, a) {
            var n = C.hooks.all[e];
            if (n && n.length) for (var t, r = 0; (t = n[r++]); ) t(a);
          },
        },
        Token: M,
      };
    function M(e, a, n, t, r) {
      (this.type = e),
        (this.content = a),
        (this.alias = n),
        (this.length = 0 | (t || "").length),
        (this.greedy = !!r);
    }
    if (
      ((g.Prism = C),
      (M.stringify = function (e, a) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e))
          return e
            .map(function (e) {
              return M.stringify(e, a);
            })
            .join("");
        var n = {
          type: e.type,
          content: M.stringify(e.content, a),
          tag: "span",
          classes: ["token", e.type],
          attributes: {},
          language: a,
        };
        if (e.alias) {
          var t = Array.isArray(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(n.classes, t);
        }
        C.hooks.run("wrap", n);
        var r = Object.keys(n.attributes)
          .map(function (e) {
            return (
              e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
            );
          })
          .join(" ");
        return (
          "<" +
          n.tag +
          ' class="' +
          n.classes.join(" ") +
          '"' +
          (r ? " " + r : "") +
          ">" +
          n.content +
          "</" +
          n.tag +
          ">"
        );
      }),
      !g.document)
    )
      return (
        g.addEventListener &&
          (C.disableWorkerMessageHandler ||
            g.addEventListener(
              "message",
              function (e) {
                var a = JSON.parse(e.data),
                  n = a.language,
                  t = a.code,
                  r = a.immediateClose;
                g.postMessage(C.highlight(t, C.languages[n], n)),
                  r && g.close();
              },
              !1
            )),
        C
      );
    var e =
      document.currentScript ||
      [].slice.call(document.getElementsByTagName("script")).pop();
    return (
      e &&
        ((C.filename = e.src),
        C.manual ||
          e.hasAttribute("data-manual") ||
          ("loading" !== document.readyState
            ? window.requestAnimationFrame
              ? window.requestAnimationFrame(C.highlightAll)
              : window.setTimeout(C.highlightAll, 16)
            : document.addEventListener("DOMContentLoaded", C.highlightAll))),
      C
    );
  })(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
  "undefined" != typeof global && (global.Prism = Prism);

Prism.languages.lua = {
  comment: /^#!.+|(\/\/|--)(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
  string: {
    pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
    greedy: !0,
  },
  number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
  builtin: /\b(?:flip|camera|circ|circfill|clip|cls|color|cursor|fget|fillp|fset|line|pal|pget|print|pset|rect|rectfill|sget|spr|sset|sspr|add|all|del|foreach|pairs|btn|btnp|music|sfx|map|mget|mset|cstore|memcpy|memset|peek|poke|reload|abs|atan2|band|bnot|bor|bxor|cos|flr|max|mid|min|rnd|shl|shr|sin|sqrt|srand|cartdata|dget|dset|cocreate|coresume|costatus|yield|setmetatable|getmetatable|type|sub|tonum|tostr|time|menuitem|extcmd|assert|printh|stat|stop|trace)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  operator: [
    /[-+*%^&|#]|<[<=]?|>[>=]?|[=~]=?/,
    { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 },
  ],
  punctuation: /[\[\](){},;]|\.+|:+/,
};
