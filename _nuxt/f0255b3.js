/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{324:function(e,t,n){(function(t){var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof l?new l(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,l;switch(n=n||{},o.util.type(t)){case"Object":if(l=o.util.objId(t),n[l])return n[l];for(var c in r={},n[l]=r,t)t.hasOwnProperty(c)&&(r[c]=e(t[c],n));return r;case"Array":return l=o.util.objId(t),n[l]?n[l]:(r=[],n[l]=r,t.forEach((function(t,i){r[i]=e(t,n)})),r);default:return t}},getLanguage:function(element){for(;element;){var e=t.exec(element.className);if(e)return e[1].toLowerCase();element=element.parentElement}return"none"},setLanguage:function(element,e){element.className=element.className.replace(RegExp(t,"gi"),""),element.classList.add("language-"+e)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var i in t)if(t[i].src==e)return t[i]}return null}},isActive:function(element,e,t){for(var n="no-"+e;element;){var r=element.classList;if(r.contains(e))return!0;if(r.contains(n))return!1;element=element.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=o.util.clone(o.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var l=(r=r||o.languages)[e],c={};for(var d in l)if(l.hasOwnProperty(d)){if(d==t)for(var h in n)n.hasOwnProperty(h)&&(c[h]=n[h]);n.hasOwnProperty(d)||(c[d]=l[d])}var f=r[e];return r[e]=c,o.languages.DFS(o.languages,(function(t,n){n===f&&t!=e&&(this[t]=c)})),c},DFS:function e(t,n,r,l){l=l||{};var c=o.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],r||i);var d=t[i],h=o.util.type(d);"Object"!==h||l[c(d)]?"Array"!==h||l[c(d)]||(l[c(d)]=!0,e(d,n,i,l)):(l[c(d)]=!0,e(d,n,null,l))}}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),o.hooks.run("before-all-elements-highlight",r);for(var element,i=0;element=r.elements[i++];)o.highlightElement(element,!0===t,r.callback)},highlightElement:function(element,t,n){var r=o.util.getLanguage(element),l=o.languages[r];o.util.setLanguage(element,r);var c=element.parentElement;c&&"pre"===c.nodeName.toLowerCase()&&o.util.setLanguage(c,r);var d={element:element,language:r,grammar:l,code:element.textContent};function h(e){d.highlightedCode=e,o.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,o.hooks.run("after-highlight",d),o.hooks.run("complete",d),n&&n.call(d.element)}if(o.hooks.run("before-sanity-check",d),(c=d.element.parentElement)&&"pre"===c.nodeName.toLowerCase()&&!c.hasAttribute("tabindex")&&c.setAttribute("tabindex","0"),!d.code)return o.hooks.run("complete",d),void(n&&n.call(d.element));if(o.hooks.run("before-highlight",d),d.grammar)if(t&&e.Worker){var f=new Worker(o.filename);f.onmessage=function(e){h(e.data)},f.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else h(o.highlight(d.code,d.grammar,d.language));else h(o.util.encode(d.code))},highlight:function(text,e,t){var n={code:text,grammar:e,language:t};if(o.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=o.tokenize(n.code,n.grammar),o.hooks.run("after-tokenize",n),l.stringify(o.util.encode(n.tokens),n.language)},tokenize:function(text,e){var t=e.rest;if(t){for(var n in t)e[n]=t[n];delete e.rest}var r=new h;return f(r,r.head,text),d(text,r,e,r.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=o.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=o.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:l};function l(e,content,t,n){this.type=e,this.content=content,this.alias=t,this.length=0|(n||"").length}function c(pattern,e,text,t){pattern.lastIndex=e;var n=pattern.exec(text);if(n&&t&&n[1]){var r=n[1].length;n.index+=r,n[0]=n[0].slice(r)}return n}function d(text,e,t,n,r,h){for(var v in t)if(t.hasOwnProperty(v)&&t[v]){var y=t[v];y=Array.isArray(y)?y:[y];for(var S=0;S<y.length;++S){if(h&&h.cause==v+","+S)return;var k=y[S],A=k.inside,E=!!k.lookbehind,w=!!k.greedy,x=k.alias;if(w&&!k.pattern.global){var F=k.pattern.toString().match(/[imsuy]*$/)[0];k.pattern=RegExp(k.pattern.source,F+"g")}for(var pattern=k.pattern||k,_=n.next,T=r;_!==e.tail&&!(h&&T>=h.reach);T+=_.value.length,_=_.next){var N=_.value;if(e.length>text.length)return;if(!(N instanceof l)){var P,L=1;if(w){if(!(P=c(pattern,T,text,E))||P.index>=text.length)break;var C=P.index,I=P.index+P[0].length,p=T;for(p+=_.value.length;C>=p;)p+=(_=_.next).value.length;if(T=p-=_.value.length,_.value instanceof l)continue;for(var O=_;O!==e.tail&&(p<I||"string"==typeof O.value);O=O.next)L++,p+=O.value.length;L--,N=text.slice(T,p),P.index-=T}else if(!(P=c(pattern,0,N,E)))continue;C=P.index;var $=P[0],R=N.slice(0,C),D=N.slice(C+$.length),H=T+N.length;h&&H>h.reach&&(h.reach=H);var M=_.prev;if(R&&(M=f(e,M,R),T+=R.length),m(e,M,L),_=f(e,M,new l(v,A?o.tokenize($,A):$,x,$)),D&&f(e,_,D),L>1){var z={cause:v+","+S,reach:H};d(text,e,t,_.prev,T,z),h&&z.reach>h.reach&&(h.reach=z.reach)}}}}}}function h(){var head={value:null,prev:null,next:null},e={value:null,prev:head,next:null};head.next=e,this.head=head,this.tail=e,this.length=0}function f(e,t,n){var r=t.next,o={value:n,prev:t,next:r};return t.next=o,r.prev=o,e.length++,o}function m(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}if(e.Prism=o,l.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var s="";return t.forEach((function(t){s+=e(t,n)})),s}var r={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(r.classes,l):r.classes.push(l)),o.hooks.run("wrap",r);var c="";for(var d in r.attributes)c+=" "+d+'="'+(r.attributes[d]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,code=n.code,l=n.immediateClose;e.postMessage(o.highlight(code,o.languages[r],r)),l&&e.close()}),!1),o):o;var script=o.util.currentScript();function v(){o.manual||o.highlightAll()}if(script&&(o.filename=script.src,script.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var y=document.readyState;"loading"===y||"interactive"===y&&script&&script.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};o["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var l={};l[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:o},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(void 0!==n&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r="loading",o="loaded",l='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';n.hooks.add("before-highlightall",(function(e){e.selector+=", "+l})),n.hooks.add("before-sanity-check",(function(c){var pre=c.element;if(pre.matches(l)){c.code="",pre.setAttribute(t,r);var code=pre.appendChild(document.createElement("CODE"));code.textContent="Loading…";var d=pre.getAttribute("data-src"),h=c.language;if("none"===h){var f=(/\.(\w+)$/.exec(d)||[,"none"])[1];h=e[f]||f}n.util.setLanguage(code,h),n.util.setLanguage(pre,h);var m=n.plugins.autoloader;m&&m.loadLanguages(h),function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onreadystatechange=function(){4==r.readyState&&(r.status<400&&r.responseText?t(r.responseText):r.status>=400?n("✖ Error "+r.status+" while fetching file: "+r.statusText):n("✖ Error: File does not exist or is empty"))},r.send(null)}(d,(function(text){pre.setAttribute(t,o);var e=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),r=t[2],o=t[3];return r?o?[n,Number(o)]:[n,void 0]:[n,n]}}(pre.getAttribute("data-range"));if(e){var r=text.split(/\r\n?|\n/g),l=e[0],c=null==e[1]?r.length:e[1];l<0&&(l+=r.length),l=Math.max(0,Math.min(l-1,r.length)),c<0&&(c+=r.length),c=Math.max(0,Math.min(c,r.length)),text=r.slice(l,c).join("\n"),pre.hasAttribute("data-start")||pre.setAttribute("data-start",String(l+1))}code.textContent=text,n.highlightElement(code)}),(function(e){pre.setAttribute(t,"failed"),code.textContent=e}))}})),n.plugins.fileHighlight={highlight:function(e){for(var element,t=(e||document).querySelectorAll(l),i=0;element=t[i++];)n.highlightElement(element)}};var c=!1;n.fileHighlight=function(){c||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),c=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}).call(this,n(52))},325:function(e,t){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=[],map={},t=function(){};Prism.plugins.toolbar={};var n=Prism.plugins.toolbar.registerButton=function(t,n){var r;r="function"==typeof n?n:function(e){var element;return"function"==typeof n.onClick?((element=document.createElement("button")).type="button",element.addEventListener("click",(function(){n.onClick.call(this,e)}))):"string"==typeof n.url?(element=document.createElement("a")).href=n.url:element=document.createElement("span"),n.className&&element.classList.add(n.className),element.textContent=n.text,element},t in map?console.warn('There is a button with the key "'+t+'" registered already.'):e.push(map[t]=r)},r=Prism.plugins.toolbar.hook=function(n){var pre=n.element.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&!pre.parentNode.classList.contains("code-toolbar")){var r=document.createElement("div");r.classList.add("code-toolbar"),pre.parentNode.insertBefore(r,pre),r.appendChild(pre);var o=document.createElement("div");o.classList.add("toolbar");var l=e,c=function(element){for(;element;){var e=element.getAttribute("data-toolbar-order");if(null!=e)return(e=e.trim()).length?e.split(/\s*,\s*/g):[];element=element.parentElement}}(n.element);c&&(l=c.map((function(e){return map[e]||t}))),l.forEach((function(e){var element=e(n);if(element){var t=document.createElement("div");t.classList.add("toolbar-item"),t.appendChild(element),o.appendChild(t)}})),r.appendChild(o)}};n("label",(function(e){var pre=e.element.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&pre.hasAttribute("data-label")){var element,template,text=pre.getAttribute("data-label");try{template=document.querySelector("template#"+text)}catch(e){}return template?element=template.content:(pre.hasAttribute("data-url")?(element=document.createElement("a")).href=pre.getAttribute("data-url"):element=document.createElement("span"),element.textContent=text),element}})),Prism.hooks.add("complete",r)}}()},326:function(e,t){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(element,t){if("PRE"===element.tagName&&element.classList.contains(e)){var n=element.querySelector(".line-numbers-rows");if(n){var r=parseInt(element.getAttribute("data-start"),10)||1,o=r+(n.children.length-1);t<r&&(t=r),t>o&&(t=o);var l=t-r;return n.children[l]}}},resize:function(element){o([element])},assumeViewportIndependence:!0},r=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))})),Prism.hooks.add("complete",(function(n){if(n.code){var code=n.element,pre=code.parentNode;if(pre&&/pre/i.test(pre.nodeName)&&!code.querySelector(".line-numbers-rows")&&Prism.util.isActive(code,e)){code.classList.remove(e),pre.classList.add(e);var r,l=n.code.match(t),c=l?l.length+1:1,d=new Array(c+1).join("<span></span>");(r=document.createElement("span")).setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=d,pre.hasAttribute("data-start")&&(pre.style.counterReset="linenumber "+(parseInt(pre.getAttribute("data-start"),10)-1)),n.element.appendChild(r),o([pre]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function o(e){if(0!=(e=e.filter((function(e){var t=function(element){if(!element)return null;return window.getComputedStyle?getComputedStyle(element):element.currentStyle||null}(e)["white-space"];return"pre-wrap"===t||"pre-line"===t}))).length){var n=e.map((function(element){var e=element.querySelector("code"),n=element.querySelector(".line-numbers-rows");if(e&&n){var r=element.querySelector(".line-numbers-sizer"),o=e.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",e.appendChild(r)),r.innerHTML="0",r.style.display="block";var l=r.getBoundingClientRect().height;return r.innerHTML="",{element:element,lines:o,lineHeights:[],oneLinerHeight:l,sizer:r}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,r=e.lineHeights,o=e.oneLinerHeight;r[n.length-1]=void 0,n.forEach((function(line,e){if(line&&line.length>1){var n=t.appendChild(document.createElement("span"));n.style.display="block",n.textContent=line}else r[e]=o}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,r=0,i=0;i<n.length;i++)void 0===n[i]&&(n[i]=t.children[r++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}}()},327:function(e,t,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("6c3473d0",content,!0,{sourceMap:!1})},328:function(e,t,n){var r=n(72)((function(i){return i[1]}));r.push([e.i,"pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;user-select:none}.line-numbers-rows>span{display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}",""]),r.locals={},e.exports=r},329:function(e,t){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document&&document.querySelector){var e,t="line-numbers",n="linkable-line-numbers",r=/\n(?!$)/g,o=function(){if(void 0===e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding="0",t.style.border="0",t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e},l=!0;Prism.plugins.lineHighlight={highlightLines:function(pre,e,c){var m=(e="string"==typeof e?e:pre.getAttribute("data-line")||"").replace(/\s+/g,"").split(",").filter(Boolean),v=+pre.getAttribute("data-line-offset")||0,y=(o()?parseInt:parseFloat)(getComputedStyle(pre).lineHeight),S=Prism.util.isActive(pre,t),k=pre.querySelector("code"),A=S?pre:k||pre,E=[],w=k.textContent.match(r),x=w?w.length+1:1,F=k&&A!=k?function(e,t){var n=getComputedStyle(e),r=getComputedStyle(t);function o(e){return+e.substr(0,e.length-2)}return t.offsetTop+o(r.borderTopWidth)+o(r.paddingTop)-o(n.paddingTop)}(pre,k):0;m.forEach((function(e){var t=e.split("-"),n=+t[0],r=+t[1]||n;if(!((r=Math.min(x+v,r))<n)){var line=pre.querySelector('.line-highlight[data-range="'+e+'"]')||document.createElement("div");if(E.push((function(){line.setAttribute("aria-hidden","true"),line.setAttribute("data-range",e),line.className=(c||"")+" line-highlight"})),S&&Prism.plugins.lineNumbers){var o=Prism.plugins.lineNumbers.getLine(pre,n),l=Prism.plugins.lineNumbers.getLine(pre,r);if(o){var d=o.offsetTop+F+"px";E.push((function(){line.style.top=d}))}if(l){var h=l.offsetTop-o.offsetTop+l.offsetHeight+"px";E.push((function(){line.style.height=h}))}}else E.push((function(){line.setAttribute("data-start",String(n)),r>n&&line.setAttribute("data-end",String(r)),line.style.top=(n-v-1)*y+F+"px",line.textContent=new Array(r-n+2).join(" \n")}));E.push((function(){line.style.width=pre.scrollWidth+"px"})),E.push((function(){A.appendChild(line)}))}}));var _=pre.id;if(S&&Prism.util.isActive(pre,n)&&_){h(pre,n)||E.push((function(){pre.classList.add(n)}));var T=parseInt(pre.getAttribute("data-start")||"1");d(".line-numbers-rows > span",pre).forEach((function(e,i){var t=i+T;e.onclick=function(){var e=_+"."+t;l=!1,location.hash=e,setTimeout((function(){l=!0}),1)}}))}return function(){E.forEach(f)}}};var c=0;Prism.hooks.add("before-sanity-check",(function(e){var pre=e.element.parentElement;if(m(pre)){var t=0;d(".line-highlight",pre).forEach((function(line){t+=line.textContent.length,line.parentNode.removeChild(line)})),t&&/^(?: \n)+$/.test(e.code.slice(-t))&&(e.code=e.code.slice(0,-t))}})),Prism.hooks.add("complete",(function e(n){var pre=n.element.parentElement;if(m(pre)){clearTimeout(c);var r=Prism.plugins.lineNumbers,o=n.plugins&&n.plugins.lineNumbers;if(h(pre,t)&&r&&!o)Prism.hooks.add("line-numbers",e);else Prism.plugins.lineHighlight.highlightLines(pre)(),c=setTimeout(v,1)}})),window.addEventListener("hashchange",v),window.addEventListener("resize",(function(){d("pre").filter(m).map((function(pre){return Prism.plugins.lineHighlight.highlightLines(pre)})).forEach(f)}))}function d(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function h(element,e){return element.classList.contains(e)}function f(e){e()}function m(pre){return!(!pre||!/pre/i.test(pre.nodeName))&&(!!pre.hasAttribute("data-line")||!(!pre.id||!Prism.util.isActive(pre,n)))}function v(){var e=location.hash.slice(1);d(".temporary.line-highlight").forEach((function(line){line.parentNode.removeChild(line)}));var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var n=e.slice(0,e.lastIndexOf(".")),pre=document.getElementById(n);if(pre)pre.hasAttribute("data-line")||pre.setAttribute("data-line",""),Prism.plugins.lineHighlight.highlightLines(pre,t,"temporary ")(),l&&document.querySelector(".temporary.line-highlight").scrollIntoView()}}}()},330:function(e,t,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("0f360fa4",content,!0,{sourceMap:!1})},331:function(e,t,n){var r=n(72)((function(i){return i[1]}));r.push([e.i,"pre[data-line]{position:relative;padding:1em 0 1em 3em}.line-highlight{position:absolute;left:0;right:0;padding:inherit 0;margin-top:1em;background:hsla(24,20%,50%,.08);background:linear-gradient(90deg,hsla(24,20%,50%,.1) 70%,hsla(24,20%,50%,0));pointer-events:none;line-height:inherit;white-space:pre}@media print{.line-highlight{-webkit-print-color-adjust:exact;color-adjust:exact}}.line-highlight:before,.line-highlight[data-end]:after{content:attr(data-start);position:absolute;top:.4em;left:.6em;min-width:1em;padding:0 .5em;background-color:hsla(24,20%,50%,.4);color:#f5f2f0;font:700 65%/1.5 sans-serif;text-align:center;vertical-align:.3em;border-radius:999px;text-shadow:none;box-shadow:0 1px #fff}.line-highlight[data-end]:after{content:attr(data-end);top:auto;bottom:.4em}.line-numbers .line-highlight:after,.line-numbers .line-highlight:before{content:none}pre[id].linkable-line-numbers span.line-numbers-rows{pointer-events:all}pre[id].linkable-line-numbers span.line-numbers-rows>span:before{cursor:pointer}pre[id].linkable-line-numbers span.line-numbers-rows>span:hover:before{background-color:hsla(0,0%,50.2%,.2)}",""]),r.locals={},e.exports=r},332:function(e,t){!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=r.variable[1].inside,i=0;i<o.length;i++)l[o[i]]=e.languages.bash[o[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism)}}]);