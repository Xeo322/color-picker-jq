!function(){"use strict";var n={243:function(){$((function(){var n="#swatch";$(".btn").click((function(e){$(".btn").removeClass("active"),$(e.target).addClass("active"),n=e.target.value}));var e=function(){var e=function(n,e,r){var t=[n.toString(16),e.toString(16),r.toString(16)];return $.each(t,(function(n,e){1===e.length&&(t[n]="0"+e)})),t.join("").toUpperCase()}($("#red").slider("value"),$("#green").slider("value"),$("#blue").slider("value"));$(n).css("#swatch"===n?"background-color":"color","#"+e)};$("#red, #green, #blue").slider({orientation:"horizontal",range:"min",max:255,value:127,slide:e,change:e}),$("#red").slider("value",255),$("#green").slider("value",140),$("#blue").slider("value",60)}))}},e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.x=function(){},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={179:0},e=[[1202,202],[243,202]],t=function(){},o=function(o,u){for(var i,a,l=u[0],c=u[1],s=u[2],f=u[3],v=0,h=[];v<l.length;v++)a=l[v],r.o(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(i in c)r.o(c,i)&&(r.m[i]=c[i]);for(s&&s(r),o&&o(u);h.length;)h.shift()();return f&&e.push.apply(e,f),t()},u=self.webpackChunk=self.webpackChunk||[];function i(){for(var t,o=0;o<e.length;o++){for(var u=e[o],i=!0,a=1;a<u.length;a++){var l=u[a];0!==n[l]&&(i=!1)}i&&(e.splice(o--,1),t=r(r.s=u[0]))}return 0===e.length&&(r.x(),r.x=function(){}),t}u.forEach(o.bind(null,0)),u.push=o.bind(null,u.push.bind(u));var a=r.x;r.x=function(){return r.x=a||function(){},(t=i)()}}(),r.x()}();