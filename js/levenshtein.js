!function(t,n){"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return n(t)}):"object"==typeof module&&module&&module.exports?module.exports=n(t):t.Levenshtein=n(t)}(this,function(t){function n(t,n){var e,i;for(e=-1,i=t.length;++e<i;)n(t[e],e,t)}function e(t,e){var i;return i=Array(t.length),n(t,function(t,n,r){i[n]=e(t,n,r)}),i}function i(t,e,i){return n(t,function(t,n,r){i=e(t,n,r)}),i}function r(t,e){var i,r,o;return o=this._matrix=[],t==e?this.distance=0:""==t?this.distance=e.length:""==e?this.distance=t.length:(i=[0],n(t,function(t,n){n++,i[n]=n}),o[0]=i,n(e,function(u,c){r=[++c],n(t,function(n,o){o++,t.charAt(o-1)==e.charAt(c-1)?r[o]=i[o-1]:r[o]=Math.min(i[o]+1,r[o-1]+1,i[o-1]+1)}),i=r,o[o.length]=i}),this.distance=r[r.length-1])}return r.prototype.toString=r.prototype.inspect=function(t){var n,r,o,u,c;for(n=this.getMatrix(),r=i(n,function(t,n){return Math.max(t,i(n,Math.max,0))},0),o=Array((r+"").length).join(" "),u=[];u.length<(n[0]&&n[0].length||0);)u[u.length]=Array(o.length+1).join("-");return u=u.join("-+")+"-",c=e(n,function(t){var n;return n=e(t,function(t){return(o+t).slice(-o.length)}),n.join(" |")+" "}),c.join("\n"+u+"\n")},r.prototype.getMatrix=function(){return this._matrix.slice()},r.prototype.valueOf=function(){return this.distance},r});