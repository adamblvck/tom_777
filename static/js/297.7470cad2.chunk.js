"use strict";(self.webpackChunktom_777=self.webpackChunktom_777||[]).push([[297],{297:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n,a=r(3378),o=r(2791);function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function i(){}function l(e){return!!(e||"").match(/\d/)}function s(e){return null===e||void 0===e}function c(e){return s(e)||function(e){return"number"===typeof e&&isNaN(e)}(e)||"number"===typeof e&&!isFinite(e)}function f(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function v(e,t){void 0===t&&(t=!0);var r="-"===e[0],n=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNegation:r,addNegation:n}}function d(e,t,r){for(var n="",a=r?"0":"",o=0;o<=t-1;o++)n+=e[o]||a;return n}function g(e,t){return Array(t+1).join(e)}function m(e){var t=e+"",r="-"===t[0]?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],o=n[1];if(!(o=Number(o)))return r+a;var u=1+o,i=(a=a.replace(".","")).length;return u<0?a="0."+g("0",Math.abs(u))+a:u>=i?a+=g("0",u-i):a=(a.substring(0,u)||"0")+"."+a.substring(u),r+a}function p(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=(-1!==e.indexOf(".")||r)&&t,a=v(e),o=a.beforeDecimal,u=a.afterDecimal,i=a.hasNegation,l=parseFloat("0."+(u||"0")),s=(u.length<=t?"0."+u:l.toFixed(t)).split(".");return""+(i?"-":"")+o.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),s[0])+(n?".":"")+d(s[1]||"",t,r)}function h(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function S(e,t){for(var r=0,n=0,a=e.length,o=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[o-1-n]&&o-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:o-n}}}function b(e){return Math.max(e.selectionStart,e.selectionEnd)}function y(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function w(e,t,r,n){var a,o,u,i=e.length;if(a=t,o=0,u=i,t=Math.min(Math.max(a,o),u),"left"===n){for(;t>=0&&!r[t];)t--;-1===t&&(t=r.indexOf(!0))}else{for(;t<=i&&!r[t];)t++;t>i&&(t=r.lastIndexOf(!0))}return-1===t&&(t=i),t}function x(e){for(var t=Array.from({length:e.length+1}).map((function(){return!0})),r=0,n=t.length;r<n;r++)t[r]=Boolean(l(e[r])||l(e[r-1]));return t}function V(e,t,r,n,a,u){void 0===u&&(u=i);var l=function(e){var t=(0,o.useRef)(e);t.current=e;var r=(0,o.useRef)((function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t.current.apply(t,e)}));return r.current}((function(e,t){var r,o;return c(e)?(o="",r=""):"number"===typeof e||t?(o="number"===typeof e?m(e):e,r=n(o)):(o=a(e,void 0),r=n(o)),{formattedValue:r,numAsString:o}})),f=(0,o.useState)((function(){return l(s(e)?t:e,r)})),v=f[0],d=f[1],g=e,p=r;s(e)&&(g=v.numAsString,p=!0);var h=l(g,p);return(0,o.useMemo)((function(){d(h)}),[h.formattedValue]),[v,function(e,t){e.formattedValue!==v.formattedValue&&d({formattedValue:e.formattedValue,numAsString:e.value}),u(e,t)}]}function N(e){return e.replace(/[^0-9]/g,"")}function D(e){return e}function O(e){var t=e.type;void 0===t&&(t="text");var r=e.displayType;void 0===r&&(r="input");var a=e.customInput,s=e.renderText,c=e.getInputRef,f=e.format;void 0===f&&(f=D);var v=e.removeFormatting;void 0===v&&(v=N);var d=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,p=e.isAllowed,y=e.onChange;void 0===y&&(y=i);var O=e.onKeyDown;void 0===O&&(O=i);var E=e.onMouseUp;void 0===E&&(E=i);var C=e.onFocus;void 0===C&&(C=i);var T=e.onBlur;void 0===T&&(T=i);var A=e.value,R=e.getCaretBoundary;void 0===R&&(R=x);var j=e.isValidInputCharacter;void 0===j&&(j=l);var B=u(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),I=V(A,d,Boolean(g),f,v,m),F=I[0],k=F.formattedValue,M=F.numAsString,P=I[1],W=(0,o.useRef)({formattedValue:k,numAsString:M}),L=function(e,t){W.current={formattedValue:e.formattedValue,numAsString:e.value},P(e,t)},K=(0,o.useState)(!1),U=K[0],G=K[1],$=(0,o.useRef)(null),z=(0,o.useRef)({setCaretTimeout:null,focusTimeout:null});(0,o.useEffect)((function(){return G(!0),function(){clearTimeout(z.current.setCaretTimeout),clearTimeout(z.current.focusTimeout)}}),[]);var Z=f,_=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},q=function(e,t,r){0===e.selectionStart&&e.selectionEnd===e.value.length||(h(e,t),z.current.setCaretTimeout=setTimeout((function(){e.value===r&&e.selectionStart!==e.selectionEnd&&h(e,t)}),0))},H=function(e,t,r){return w(e,t,R(e),r)},J=function(e,t,r){var n=R(t),a=function(e,t,r,n,a,o){var u=S(r,e),i=u.from,l=u.to;if(i.end-i.start===1&&i.end===l.end&&l.end===n)return n;var s=a.findIndex((function(e){return e})),c=e.slice(0,s);t||r.startsWith(c)||(r=c+r,n+=c.length);for(var f=r.length,v=e.length,d={},g=new Array(f),m=0;m<f;m++){g[m]=-1;for(var p=0,h=v;p<h;p++)if(r[m]===e[p]&&!0!==d[p]){g[m]=p,d[p]=!0;break}}for(var b=n;b<f&&(-1===g[b]||!o(r[b]));)b++;var y=b===f||-1===g[b]?v:g[b];for(b=n-1;b>0&&-1===g[b];)b--;var w=-1===b||-1===g[b]?0:g[b]+1;return w>y?y:n-w<y-n?w:y}(t,k,e,r,n,j);return a=w(t,a,n)};(0,o.useEffect)((function(){var e=W.current,t=e.formattedValue,r=e.numAsString;k===t||k===M&&t===r||L(_(k,M),{event:void 0,source:n.props})}),[k,M]);var Q=$.current?b($.current):void 0;("undefined"!==typeof window?o.useLayoutEffect:o.useEffect)((function(){var e=$.current;if(k!==W.current.formattedValue&&e){var t=J(W.current.formattedValue,k,Q);e.value=k,q(e,t,k)}}),[k]);var X=function(e,t,r){var n=S(k,e),a=Object.assign(Object.assign({},n),{lastValue:k}),o=v(e,a),u=Z(o);if(o=v(u,void 0),p&&!p(_(u,o))){var i=t.target,l=b(i),s=J(e,k,l);return i.value=k,q(i,s,k),!1}return function(e){var t=e.formattedValue;void 0===t&&(t="");var r=e.input,n=e.setCaretPosition;void 0===n&&(n=!0);var a=e.source,o=e.event,u=e.numAsString,i=e.caretPos;if(r){if(void 0===i&&n){var l=e.inputValue||r.value,s=b(r);r.value=t,i=J(l,t,s)}r.value=t,n&&void 0!==i&&q(r,i,t)}t!==k&&L(_(t,u),{event:o,source:a})}({formattedValue:u,numAsString:o,inputValue:e,event:t,source:r,setCaretPosition:!0,input:t.target}),!0},Y=!U||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",ee=Object.assign({inputMode:Y},B,{type:t,value:k,onChange:function(e){var t=e.target.value;X(t,e,n.event)&&y(e)},onKeyDown:function(e){var t,r=e.target,n=e.key,a=r.selectionStart,o=r.selectionEnd,u=r.value;if(void 0===u&&(u=""),"ArrowLeft"===n||"Backspace"===n?t=Math.max(a-1,0):"ArrowRight"===n?t=Math.min(a+1,u.length):"Delete"===n&&(t=a),void 0!==t&&a===o){var i=t;if("ArrowLeft"===n||"ArrowRight"===n)(i=H(u,t,"ArrowLeft"===n?"left":"right"))!==t&&e.preventDefault();else"Delete"!==n||j(u[t])?"Backspace"!==n||j(u[t])||(i=H(u,t,"left")):i=H(u,t,"right");i!==t&&q(r,i,u),e.isUnitTestRun&&q(r,i,u),O(e)}else O(e)},onMouseUp:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===n){var o=H(a,r);o!==r&&q(t,o,a)}E(e)},onFocus:function(e){e.persist&&e.persist();var t=e.target;$.current=t,z.current.focusTimeout=setTimeout((function(){var r=t.selectionStart,n=t.selectionEnd,a=t.value;void 0===a&&(a="");var o=H(a,r);o===r||0===r&&n===a.length||q(t,o,a),C(e)}),0)},onBlur:function(e){$.current=null,clearTimeout(z.current.focusTimeout),clearTimeout(z.current.setCaretTimeout),T(e)}});if("text"===r)return s?o.createElement(o.Fragment,null,s(k,B)||null):o.createElement("span",Object.assign({},B,{ref:c}),k);if(a){var te=a;return o.createElement(te,Object.assign({},ee,{ref:c}))}return o.createElement("input",Object.assign({},ee,{ref:c}))}function E(e,t){var r=t.decimalScale,n=t.fixedDecimalScale,a=t.prefix;void 0===a&&(a="");var o=t.suffix;void 0===o&&(o="");var u=t.allowNegative,i=t.thousandsGroupStyle;if(void 0===i&&(i="thousand"),""===e||"-"===e)return e;var l=C(t),s=l.thousandSeparator,c=l.decimalSeparator,f=0!==r&&-1!==e.indexOf(".")||r&&n,g=v(e,u),m=g.beforeDecimal,p=g.afterDecimal,h=g.addNegation;return void 0!==r&&(p=d(p,r,!!n)),s&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+t)}(m,s,i)),a&&(m=a+m),o&&(p+=o),h&&(m="-"+m),e=m+(f&&c||"")+p}function C(e){var t=e.decimalSeparator;void 0===t&&(t=".");var r=e.thousandSeparator,n=e.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:n}}function T(e,t,r){var n;void 0===t&&(t=y(e));var a=r.allowNegative,o=r.prefix;void 0===o&&(o="");var u=r.suffix;void 0===u&&(u="");var i=r.decimalScale,s=t.from,c=t.to,d=c.start,g=c.end,m=C(r),p=m.allowedDecimalSeparators,h=m.decimalSeparator,S=e[g]===h;if(l(e)&&(e===o||e===u)&&""===t.lastValue)return e;if(g-d===1&&-1!==p.indexOf(e[d])){var b=0===i?"":h;e=e.substring(0,d)+b+e.substring(d+1,e.length)}var w=function(e,t,r){var n=!1,a=!1;o.startsWith("-")?n=!1:e.startsWith("--")?(n=!1,a=!0):u.startsWith("-")&&e.length===u.length?n=!1:"-"===e[0]&&(n=!0);var i=n?1:0;return a&&(i=2),i&&(e=e.substring(i),t-=i,r-=i),{value:e,start:t,end:r,hasNegation:n}},x=w(e,d,g),V=x.hasNegation;e=(n=x).value,d=n.start,g=n.end;var N=w(t.lastValue,s.start,s.end),D=N.start,O=N.end,E=N.value,T=e.substring(d,g);!(e.length&&E.length&&(D>E.length-u.length||O<o.length))||T&&u.startsWith(T)||(e=E);var A=0;e.startsWith(o)?A+=o.length:d<o.length&&(A=d),g-=A;var R=(e=e.substring(A)).length,j=e.length-u.length;e.endsWith(u)?R=j:(g>j||g>e.length-u.length)&&(R=g),e=e.substring(0,R),e=function(e,t){void 0===e&&(e="");var r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=r.test(e),o=n.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e}(V?"-"+e:e,a),e=(e.match(function(e,t){return new RegExp("(^-)|[0-9]|"+f(e),t?"g":void 0)}(h,!0))||[]).join("");var B=e.indexOf(h),I=v(e=e.replace(new RegExp(f(h),"g"),(function(e,t){return t===B?".":""})),a),F=I.beforeDecimal,k=I.afterDecimal,M=I.addNegation;return c.end-c.start<s.end-s.start&&""===F&&S&&!parseFloat(k)&&(e=M?"-":""),e}function A(e){e=function(e){var t=C(e),r=t.thousandSeparator,n=t.decimalSeparator,a=e.prefix;void 0===a&&(a="");var o=e.allowNegative;if(void 0===o&&(o=!0),r===n)throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: '+n+" (default value for decimalSeparator is .)\n     ");return a.startsWith("-")&&o&&(console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: "+a+"\n      allowNegative: "+o+"\n    "),o=!1),Object.assign(Object.assign({},e),{allowNegative:o})}(e);var t=e.decimalSeparator;void 0===t&&(t=".");e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,a=e.allowNegative,o=e.allowLeadingZeros,f=e.onKeyDown;void 0===f&&(f=i);var v=e.onBlur;void 0===v&&(v=i);var d=e.thousandSeparator,g=e.decimalScale,S=e.fixedDecimalScale,b=e.prefix;void 0===b&&(b="");var y=e.defaultValue,w=e.value,x=e.valueIsNumericString,N=e.onValueChange,D=u(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),O=function(t){return E(t,e)},A=function(t,r){return T(t,r,e)},R=s(w)?y:w,j=null!==x&&void 0!==x?x:function(e,t,r){return""===e||!(null===t||void 0===t?void 0:t.match(/\d/))&&!(null===r||void 0===r?void 0:r.match(/\d/))&&"string"===typeof e&&!isNaN(Number(e))}(R,b,r);s(w)?s(y)||(j=x||"number"===typeof y):j=x||"number"===typeof w;var B=function(e){return c(e)?e:("number"===typeof e&&(e=m(e)),j&&"number"===typeof g?p(e,g,Boolean(S)):e)},I=V(B(w),B(y),Boolean(j),O,A,N),F=I[0],k=F.numAsString,M=F.formattedValue,P=I[1];return Object.assign(Object.assign({},D),{value:M,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===t||l(e)},onValueChange:P,format:O,removeFormatting:A,getCaretBoundary:function(t){return function(e,t){var r=t.prefix;void 0===r&&(r="");var n=t.suffix;void 0===n&&(n="");var a=Array.from({length:e.length+1}).map((function(){return!0})),o="-"===e[0];a.fill(!1,0,r.length+(o?1:0));var u=e.length;return a.fill(!1,u-n.length+1,u+1),a}(t,e)},onKeyDown:function(t){var r=t.target,n=t.key,o=r.selectionStart,u=r.selectionEnd,i=r.value;if(void 0===i&&(i=""),o===u){"Backspace"===n&&"-"===i[0]&&o===b.length+1&&a&&h(r,1);var l=C(e),s=l.decimalSeparator,c=l.allowedDecimalSeparators;"Backspace"===n&&i[o-1]===s&&g&&S&&(h(r,o-1),t.preventDefault()),(null===c||void 0===c?void 0:c.includes(n))&&i[o]===s&&h(r,o+1);var v=!0===d?",":d;"Backspace"===n&&i[o-1]===v&&h(r,o-1),"Delete"===n&&i[o]===v&&h(r,o+1),f(t)}else f(t)},onBlur:function(t){var r=k;if(r.match(/\d/g)||(r=""),o||(r=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+n+(a?"."+a:"")}(r)),S&&g&&(r=p(r,g,S)),r!==k){var a=E(r,e);P({formattedValue:a,value:r,floatValue:parseFloat(r)},{event:t,source:n.event})}v(t)}})}function R(e){var t=A(e);return o.createElement(O,Object.assign({},t))}!function(e){e.event="event",e.props="prop"}(n||(n={}));var j=(0,a.d)("div")({name:"NumberOverlayEditorStyle",class:"n1czszh3"});function B(){var e,t,r,n=null==(r=null==(t=null==(e=Intl.NumberFormat())?void 0:e.formatToParts(1.1))?void 0:t.find((function(e){return"decimal"===e.type})))?void 0:r.value;return null!=n?n:"."}var I=function(e){var t=e.value,r=e.onChange,n=e.disabled,a=e.highlight,u=e.validatedSelection,i=o.useRef();return o.useLayoutEffect((function(){var e;if(void 0!==u){var t="number"===typeof u?[u,null]:u;null==(e=i.current)||e.setSelectionRange(t[0],t[1])}}),[u]),o.createElement(j,null,o.createElement(R,{autoFocus:!0,getInputRef:i,className:"gdg-input",onFocus:function(e){return e.target.setSelectionRange(a?0:e.target.value.length,e.target.value.length)},disabled:!0===n,thousandSeparator:"."===B()?",":".",decimalSeparator:B(),value:Object.is(t,-0)?"-":null!=t?t:"",onValueChange:r}))}}}]);
//# sourceMappingURL=297.7470cad2.chunk.js.map