Audio = {}
document = {
    createElement: function() {
        return canvas
    }
};
canvas = {
    getContext: function getContext() {
        return CanvasRenderingContext2D
    },
    toDataURL: function toDataURL() {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAACyUlEQVRIS8XWTYhVZRgH8N8dkPFqJqgI4sKmTUSgaBCKihCI5dZFUEaLwHAThjujEnXjpkAUHSRc+AEtFJIWKWRBSR9QENgiggplNqkTlXBnhjveeM6cF955PXccFJ2zuPec99zz3v/X87+3ZfrRK67jslWvxb103vCxx770DN5sApSAloBLco+SzFKcxbZClmG8gw7uIdCkfnq+BDsXbmzEizhYg2p0oEn1PEK5II/SgTKPbXyE89iBt+oPDDcpWz7cbwZysq/h9Vqd9/E2fkWsn0GsJeVi/1DvE6xJQLJoNA1T7PN0wx73zMBMDsTGTXMQ1n6TAfkJ63ACr+IcDmekUr6D0FUkdb+uc18SCPCba4ILitlodGA2ik8R7Rmw2E4ThnR9oVsRjJyuxL/4FLdwJCOQE07O5CBjQONIRINk7l4iOOMQB4mkdn6eajWgM2mhYU855KhRXRMO6DqKD/Ay3sWygkCKUE6qJPAegmis3+5T0I0EEtj8PUVn+r2e+Zb52HqjPqti8ptFnnPHPhzH6lq5+KIcbOwX4AJkAtjkQK50Pi9pfWfEKR/ifjVaOjC1wcLq9ZoPXbTLZfyi7Vljlep/4nSd8ZzA9bpNokUuzYJASTSBT3Mzcr8qbO77CNBSk0ZNGrPHoO+r1plnta4YxhxcTiAAbMcPs3QgXLpSC1EmKfbd38+B/jMQ4NvuWoTlPnfNKfyIES3P142U12Y/B6oI1Kj6RSgcOIZX6lqe0YHyL0Su/tT5gJ5JbSt03PSfrl34vco//2i522fgHma5/M1Ie20KZ0oHEsj5Fhireqijra2j4wlL3HHMGrv9bC2+tKUGf1vLxMOgfNBnp89AT8sGq3xrHE/WVRo0ojQHvWSHK/Y6ab83qhz/gZsYr34V5uAoCQwYstV1F6zzlXlaxg0aMeQvq7zgqu+qno+WuYG/5xJ86PU//5znHgwZKlQAAAAASUVORK5CYII="
    },
}

CanvasRenderingContext2D = {
    arc: function arc() {},
    stroke: function stroke() {},
    fillText: function fillText() {},
}
window = {
    document: {
        location:{},
        _zid:2
    },
}
function get_sign(uid, ua) {
    // aaaa = aaaa.replace(/\\u02a1/g, "\u02a1").replace(/\\x7f/g, "\x7f").replace(/\\x80/g, "\x80").replace(/\\x1c/g, "\x1c").replace(/\\x06/g, "\x06").replace(/\\x02/g, "\x02").replace(/\\\'/g, "\'").replace(/\\ufffb/g, "\ufffb").replace(/\\\\/g, "\\").replace(/\\uffce/g, "\uffce")
    navigator = {
        userAgent: ua,
    }
    // tac = aaaa;
    var e = {};
    (function anonymous() {
        function e(e, a, r) {
            return (b[e] || (b[e] = t("x,y", "return x " + e + " y")))(r, a)
        }
        function a(e, a, r) {
            return (k[r] || (k[r] = t("x,y", "return new x[y](" + Array(r + 1).join(",x[++y]").substr(1) + ")")))(e, a)
        }
        function r(e, a, r) {
            var n, t, s = {}, b = s.d = r ? r.d + 1 : 0;
            for (s["$" + b] = s,
            t = 0; t < b; t++)
                s[n = "$" + t] = r[n];
            for (t = 0,
            b = s.length = a.length; t < b; t++)
                s[t] = a[t];
            return c(e, 0, s)
        }
        function c(t, b, k) {
            function u(e) {
                if (typeof e === "string" && e === 'canvas') {
                    debugger;
                }
                v[x++] = e
            }
            function f() {
                return g = t.charCodeAt(b++) - 32,
                t.substring(b, b += g)
            }
            function l() {
                try {
                    y = c(t, b, k)
                } catch (e) {
                    h = e,
                    y = l
                }
            }
            for (var h, y, d, g, v = [], x = 0; ; )
                switch (g = t.charCodeAt(b++) - 32) {
                case 1:
                    u(!v[--x]);
                    break;
                case 4:
                    v[x++] = f();
                    break;
                case 5:
                    u(function(e) {
                        var a = 0
                        , r = e.length;
                        return function() {
                            var c = a < r;
                            return c && u(e[a++]),
                            c
                        }
                    }(v[--x]));
                    break;
                case 6:
                    y = v[--x],
                    u(v[--x](y));
                    break;
                case 8:
                    if (g = t.charCodeAt(b++) - 32,
                    l(),
                    b += g,
                    g = t.charCodeAt(b++) - 32,
                    y === c)
                        b += g;
                    else if (y !== l)
                        return y;
                    break;
                case 9:
                    v[x++] = c;
                    break;
                case 10:
                    u(s(v[--x]));
                    break;
                case 11:
                    y = v[--x],
                    u(v[--x] + y);
                    break;
                case 12:
                    for (y = f(),
                    d = [],
                    g = 0; g < y.length; g++)
                        d[g] = y.charCodeAt(g) ^ g + y.length;
                    u(String.fromCharCode.apply(null, d));
                    break;
                case 13:
                    y = v[--x],
                    h = delete v[--x][y];
                    break;
                case 14:
                    v[x++] = t.charCodeAt(b++) - 32;
                    break;
                case 59:
                    u((g = t.charCodeAt(b++) - 32) ? (y = x,
                    v.slice(x -= g, y)) : []);
                    break;
                case 61:
                    u(v[--x][t.charCodeAt(b++) - 32]);
                    break;
                case 62:
                    g = v[--x],
                    k[0] = 65599 * k[0] + k[1].charCodeAt(g) >>> 0;
                    break;
                case 65:
                    h = v[--x],
                    y = v[--x],
                    v[--x][y] = h;
                    break;
                case 66:
                    u(e(t[b++], v[--x], v[--x]));
                    break;
                case 67:
                    y = v[--x],
                    d = v[--x]
                    u((g = v[--x]).x === c ? r(g.y, y, k) : g.apply(d, y));
                    break;
                case 68:
                    u(e((g = t[b++]) < "<" ? (b--,
                    f()) : g + g, v[--x], v[--x]));
                    break;
                case 70:
                    u(!1);
                    break;
                case 71:
                    v[x++] = n;
                    break;
                case 72:
                    v[x++] = +f();
                    break;
                case 73:
                    u(parseInt(f(), 36));
                    break;
                case 75:
                    if (v[--x]) {
                        b++;
                        break
                    }
                case 74:
                    g = t.charCodeAt(b++) - 32 << 16 >> 16,
                    b += g;
                    break;
                case 76:
                    u(k[t.charCodeAt(b++) - 32]);
                    break;
                case 77:
                    y = v[--x],
                    u(v[--x][y]);
                    break;
                case 78:
                    g = t.charCodeAt(b++) - 32,
                    u(a(v, x -= g + 1, g));
                    break;
                case 79:
                    g = t.charCodeAt(b++) - 32,
                    u(k["$" + g]);
                    break;
                case 81:
                    h = v[--x]
                    v[--x][f()] = h;
                    break;
                case 82:
                    u(v[--x][f()]);
                    break;
                case 83:
                    h = v[--x]
                    k[t.charCodeAt(b++) - 32] = h;
                    break;
                case 84:
                    v[x++] = !0;
                    break;
                case 85:
                    v[x++] = void 0;
                    break;
                case 86:
                    u(v[x - 1]);
                    break;
                case 88:
                    h = v[--x],
                    y = v[--x],
                    v[x++] = h,
                    v[x++] = y;
                    break;
                case 89:
                    u(function() {
                        function e() {
                            return r(e.y, arguments, k)
                        }
                        return e.y = f(),
                        e.x = c,
                        e
                    }());
                    break;
                case 90:
                    v[x++] = null;
                    break;
                case 91:
                    v[x++] = h;
                    break;
                case 93:
                    h = v[--x];
                    break;
                case 0:
                    return v[--x];
                default:
                    u((g << 16 >> 16) - 16)
                }
        }
        var n = this
        , t = n.Function
        , s = Object.keys || function(e) {
            var a = {}
            , r = 0;
            for (var c in e)
                a[r++] = c;
            return a.length = r,
            a
        }
        , b = {}
        , k = {};
        return r
    }
    )
    ()('gr$Daten Иb/s!l y͒yĹg,(lfi~ah`{mv,-n|jqewVxp{rvmmx,&effkx[!cs"l".Pq%widthl"@q&heightl"vr*getContextx$"2d[!cs#l#,*;?|u.|uc{uq$fontl#vr(fillTextx$$龘ฑภ경2<[#c}l#2q*shadowBlurl#1q-shadowOffsetXl#$$limeq+shadowColorl#vr#arcx88802[%c}l#vr&strokex[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k7l l!r&lengthb%^l$1+s$jl  s#i$1ek1s$gr#tack4)zgr#tac$! +0o![#cj?o ]!l$b%s"o ]!l"l$b*b^0d#>>>s!0s%yA0s"l"l!r&lengthb<k+l"^l"1+s"jl  s&l&z0l!$ +["cs\'(0l#i\'1ps9wxb&s() &{s)/s(gr&Stringr,fromCharCodes)0s*yWl ._b&s o!])l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!+& s+yPo!]+s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s,y=o!o!]/q"13o!l q"10o!],l 2d>& s.{s-yMo!o!]0q"13o!]*Ld<l 4d#>>>b|s!o!l q"10o!],l!& s/yIo!o!].q"13o!],o!]*Jd<l 6d#>>>b|&o!]+l &+ s0l-l!&l-l!i\'1z141z4b/@d<l"b|&+l-l(l!b^&+l-l&zl\'g,)gk}ejo{cm,)|yn~Lij~em["cl$b%@d<l&zl\'l $ +["cl$b%b|&+l-l%8d<@b|l!b^&+ q$sign ', [e])
    return e.sign(uid)
}
// console.log(get_sign('1234567',"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"))
module.exports = {
    get_sign
}