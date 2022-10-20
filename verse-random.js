var Random = function(hash) {
    function xmur3(str) {
        for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
            h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
                h = h << 13 | h >>> 19;
        return function() {
            h = Math.imul(h ^ h >>> 16, 2246822507),
                h = Math.imul(h ^ h >>> 13, 3266489909);
            return (h ^= h >>> 16) >>> 0;
        }
    }

    function sfc32(a, b, c, d) {
        return function() {
            a |= 0; b |= 0; c |= 0; d |= 0;
            var t = (a + b | 0) + d | 0;
            d = d + 1 | 0;
            a = b ^ b >>> 9;
            b = c + (c << 3) | 0;
            c = c << 21 | c >>> 11;
            c = c + t | 0;
            return (t >>> 0) / 4294967296;
        }
    }

    var seed = xmur3(hash)
    var rand = sfc32(seed(), seed(), seed(), seed())

    var self = {
        rand: rand,
        // generate a number between a and b (not including b)
        randInt: function (a, b) {
            return a + Math.floor((b-a)*self.rand())
        }
    }
    return self
}

var Random=function(n){var r,$,t,u,_=function n(r){for(var $=0,t=1779033703^r.length;$<r.length;$++)t=(t=Math.imul(t^r.charCodeAt($),3432918353))<<13|t>>>19;return function(){return t=Math.imul((t=Math.imul(t^t>>>16,2246822507))^t>>>13,3266489909),(t^=t>>>16)>>>0}}(n),o={rand:(r=_(),$=_(),t=_(),u=_(),function(){t|=0;var n=((r|=0)+($|=0)|0)+(u|=0)|0;return u=u+1|0,r=$^$>>>9,$=t+(t<<3)|0,t=(t=t<<21|t>>>11)+n|0,(n>>>0)/4294967296}),randInt:function(n,r){return n+Math.floor((r-n)*o.rand())}};return o};