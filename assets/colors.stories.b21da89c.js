var J=Object.defineProperty;var a=(r,e)=>J(r,"name",{value:e,configurable:!0});import"./index.3d8cbcf0.js";import{c as w,A as Q,M as Y}from"./Props.7ab630e0.js";import{j as N,a as z}from"./jsx-runtime.729e9fe5.js";import"./iframe.b5fdc33e.js";import"./runtime.4fb997ed.js";import{c as Z}from"./index.e4ae9b91.js";import{_ as b}from"./extends.bd401154.js";import"./string.7306ccce.js";import"./index.231f0fbd.js";import"./es.map.constructor.048eb3f8.js";import"./es.number.to-fixed.961aae35.js";function V(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}a(V,"_assertThisInitialized");function _(r,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():a(function(n,f){return n.__proto__=f,n},"_setPrototypeOf"),_(r,e)}a(_,"_setPrototypeOf");function ee(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,_(r,e)}a(ee,"_inheritsLoose");function $(r){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():a(function(t){return t.__proto__||Object.getPrototypeOf(t)},"_getPrototypeOf"),$(r)}a($,"_getPrototypeOf");function re(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}a(re,"_isNativeFunction");function X(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(X=a(function(){return!!r},"_isNativeReflectConstruct"))()}a(X,"_isNativeReflectConstruct");function te(r,e,t){if(X())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var f=new(r.bind.apply(r,n));return t&&_(f,t.prototype),f}a(te,"_construct");function C(r){var e=typeof Map=="function"?new Map:void 0;return C=a(function(n){if(n===null||!re(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,f)}function f(){return te(n,arguments,$(this).constructor)}return a(f,"Wrapper"),f.prototype=Object.create(n.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),_(f,n)},"_wrapNativeSuper"),C(r)}a(C,"_wrapNativeSuper");var h=function(r){ee(e,r);function e(t){var n;return n=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,V(n)}return a(e,"PolishedError"),e}(C(Error));function H(r){return Math.round(r*255)}a(H,"colorToInt");function ne(r,e,t){return H(r)+","+H(e)+","+H(t)}a(ne,"convertToInt");function O(r,e,t,n){if(n===void 0&&(n=ne),e===0)return n(t,t,t);var f=(r%360+360)%360/60,i=(1-Math.abs(2*t-1))*e,o=i*(1-Math.abs(f%2-1)),u=0,s=0,l=0;f>=0&&f<1?(u=i,s=o):f>=1&&f<2?(u=o,s=i):f>=2&&f<3?(s=i,l=o):f>=3&&f<4?(s=o,l=i):f>=4&&f<5?(u=o,l=i):f>=5&&f<6&&(u=i,l=o);var m=t-i/2,c=u+m,p=s+m,k=l+m;return n(c,p,k)}a(O,"hslToRgb");var D={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ae(r){if(typeof r!="string")return r;var e=r.toLowerCase();return D[e]?"#"+D[e]:r}a(ae,"nameToHex");var fe=/^#[a-fA-F0-9]{6}$/,ie=/^#[a-fA-F0-9]{8}$/,oe=/^#[a-fA-F0-9]{3}$/,ue=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,se=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pe=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,de=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function x(r){if(typeof r!="string")throw new h(3);var e=ae(r);if(e.match(fe))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(ie)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(oe))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(ue)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var f=R.exec(e);if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)};var i=se.exec(e.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var o=pe.exec(e);if(o){var u=parseInt(""+o[1],10),s=parseInt(""+o[2],10)/100,l=parseInt(""+o[3],10)/100,m="rgb("+O(u,s,l)+")",c=R.exec(m);if(!c)throw new h(4,e,m);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10)}}var p=de.exec(e.substring(0,50));if(p){var k=parseInt(""+p[1],10),K=parseInt(""+p[2],10)/100,U=parseInt(""+p[3],10)/100,E="rgb("+O(k,K,U)+")",j=R.exec(E);if(!j)throw new h(4,e,E);return{red:parseInt(""+j[1],10),green:parseInt(""+j[2],10),blue:parseInt(""+j[3],10),alpha:parseFloat(""+p[4])>1?parseFloat(""+p[4])/100:parseFloat(""+p[4])}}throw new h(5)}a(x,"parseToRgb");function le(r){var e=r.red/255,t=r.green/255,n=r.blue/255,f=Math.max(e,t,n),i=Math.min(e,t,n),o=(f+i)/2;if(f===i)return r.alpha!==void 0?{hue:0,saturation:0,lightness:o,alpha:r.alpha}:{hue:0,saturation:0,lightness:o};var u,s=f-i,l=o>.5?s/(2-f-i):s/(f+i);switch(f){case e:u=(t-n)/s+(t<n?6:0);break;case t:u=(n-e)/s+2;break;default:u=(e-t)/s+4;break}return u*=60,r.alpha!==void 0?{hue:u,saturation:l,lightness:o,alpha:r.alpha}:{hue:u,saturation:l,lightness:o}}a(le,"rgbToHsl");function g(r){return le(x(r))}a(g,"parseToHsl");var be=a(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),A=be;function v(r){var e=r.toString(16);return e.length===1?"0"+e:e}a(v,"numberToHex");function P(r){return v(Math.round(r*255))}a(P,"colorToHex");function ce(r,e,t){return A("#"+P(r)+P(e)+P(t))}a(ce,"convertToHex");function M(r,e,t){return O(r,e,t,ce)}a(M,"hslToHex");function he(r,e,t){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number")return M(r,e,t);if(typeof r=="object"&&e===void 0&&t===void 0)return M(r.hue,r.saturation,r.lightness);throw new h(1)}a(he,"hsl");function me(r,e,t,n){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?M(r,e,t):"rgba("+O(r,e,t)+","+n+")";if(typeof r=="object"&&e===void 0&&t===void 0&&n===void 0)return r.alpha>=1?M(r.hue,r.saturation,r.lightness):"rgba("+O(r.hue,r.saturation,r.lightness)+","+r.alpha+")";throw new h(2)}a(me,"hsla");function q(r,e,t){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number")return A("#"+v(r)+v(e)+v(t));if(typeof r=="object"&&e===void 0&&t===void 0)return A("#"+v(r.red)+v(r.green)+v(r.blue));throw new h(6)}a(q,"rgb");function T(r,e,t,n){if(typeof r=="string"&&typeof e=="number"){var f=x(r);return"rgba("+f.red+","+f.green+","+f.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?q(r,e,t):"rgba("+r+","+e+","+t+","+n+")";if(typeof r=="object"&&e===void 0&&t===void 0&&n===void 0)return r.alpha>=1?q(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new h(7)}a(T,"rgba");var ge=a(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),ye=a(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),ve=a(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),we=a(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function y(r){if(typeof r!="object")throw new h(8);if(ye(r))return T(r);if(ge(r))return q(r);if(we(r))return me(r);if(ve(r))return he(r);throw new h(8)}a(y,"toColorString");function B(r,e,t){return a(function(){var f=t.concat(Array.prototype.slice.call(arguments));return f.length>=e?r.apply(this,f):B(r,e,f)},"fn")}a(B,"curried");function d(r){return B(r,r.length,[])}a(d,"curry");function xe(r,e){if(e==="transparent")return e;var t=g(e);return y(b({},t,{hue:t.hue+parseFloat(r)}))}a(xe,"adjustHue");d(xe);function F(r,e,t){return Math.max(r,Math.min(e,t))}a(F,"guard");function Fe(r,e){if(e==="transparent")return e;var t=g(e);return y(b({},t,{lightness:F(0,1,t.lightness-parseFloat(r))}))}a(Fe,"darken");d(Fe);function ke(r,e){if(e==="transparent")return e;var t=g(e);return y(b({},t,{saturation:F(0,1,t.saturation-parseFloat(r))}))}a(ke,"desaturate");d(ke);function L(r){if(r==="transparent")return 0;var e=x(r),t=Object.keys(e).map(function(o){var u=e[o]/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}),n=t[0],f=t[1],i=t[2];return parseFloat((.2126*n+.7152*f+.0722*i).toFixed(3))}a(L,"getLuminance");function Ie(r,e){var t=L(r),n=L(e);return parseFloat((t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)).toFixed(2))}a(Ie,"getContrast");function _e(r,e){if(e==="transparent")return e;var t=g(e);return y(b({},t,{lightness:F(0,1,t.lightness+parseFloat(r))}))}a(_e,"lighten");d(_e);function Oe(r,e,t){if(e==="transparent")return t;if(t==="transparent")return e;if(r===0)return t;var n=x(e),f=b({},n,{alpha:typeof n.alpha=="number"?n.alpha:1}),i=x(t),o=b({},i,{alpha:typeof i.alpha=="number"?i.alpha:1}),u=f.alpha-o.alpha,s=parseFloat(r)*2-1,l=s*u===-1?s:s+u,m=1+s*u,c=(l/m+1)/2,p=1-c,k={red:Math.floor(f.red*c+o.red*p),green:Math.floor(f.green*c+o.green*p),blue:Math.floor(f.blue*c+o.blue*p),alpha:f.alpha*parseFloat(r)+o.alpha*(1-parseFloat(r))};return T(k)}a(Oe,"mix");var je=d(Oe),G=je;function Me(r,e){if(e==="transparent")return e;var t=x(e),n=typeof t.alpha=="number"?t.alpha:1,f=b({},t,{alpha:F(0,1,(n*100+parseFloat(r)*100)/100)});return T(f)}a(Me,"opacify");d(Me);function Te(r,e){if(e==="transparent")return e;var t=g(e);return y(b({},t,{saturation:F(0,1,t.saturation+parseFloat(r))}))}a(Te,"saturate");d(Te);function He(r,e){return e==="transparent"?e:y(b({},g(e),{hue:parseFloat(r)}))}a(He,"setHue");d(He);function Re(r,e){return e==="transparent"?e:y(b({},g(e),{lightness:parseFloat(r)}))}a(Re,"setLightness");d(Re);function Pe(r,e){return e==="transparent"?e:y(b({},g(e),{saturation:parseFloat(r)}))}a(Pe,"setSaturation");d(Pe);function $e(r,e){return e==="transparent"?e:G(parseFloat(r),"rgb(0, 0, 0)",e)}a($e,"shade");d($e);function Ce(r,e){return e==="transparent"?e:G(parseFloat(r),"rgb(255, 255, 255)",e)}a(Ce,"tint");d(Ce);function Ae(r,e){if(e==="transparent")return e;var t=x(e),n=typeof t.alpha=="number"?t.alpha:1,f=b({},t,{alpha:F(0,1,+(n*100-parseFloat(r)*100).toFixed(2)/100)});return T(f)}a(Ae,"transparentize");d(Ae);function qe(){return Object.entries(Z).map(([r,e])=>N("div",{style:{backgroundColor:e,padding:"2rem"},children:z("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:Ie(e,"#FFF")<3.5?"#000":"#FFF"},children:[z("strong",{children:["$",r]}),N("span",{children:e})]})},r))}a(qe,"ColorsGrid");function S(){return S=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},S.apply(this,arguments)}a(S,"_extends");const Se={},Ee="wrapper";function W({components:r,...e}){return w(Ee,S({},Se,e,{components:r,mdxType:"MDXLayout"}),w(Y,{title:"Tokens/Colors",mdxType:"Meta"}),w("h1",null,"Colors"),w("p",null,"Essas s\xE3o as cores utilizadas no Ignite UI."),w(qe,{mdxType:"ColorsGrid"}))}a(W,"MDXContent");W.isMDXComponent=!0;const Ne=a(()=>{throw new Error("Docs-only story")},"__page");Ne.parameters={docsOnly:!0};const I={title:"Tokens/Colors",includeStories:["__page"]},ze={};I.parameters=I.parameters||{};I.parameters.docs={...I.parameters.docs||{},page:()=>w(Q,{mdxStoryNameToKey:ze,mdxComponentAnnotations:I},w(W,null))};const Ve=["__page"];export{Ve as __namedExportsOrder,Ne as __page,I as default};
//# sourceMappingURL=colors.stories.b21da89c.js.map