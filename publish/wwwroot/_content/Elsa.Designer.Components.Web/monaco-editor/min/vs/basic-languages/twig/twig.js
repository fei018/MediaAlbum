/*! For license information please see twig.js.LICENSE.txt */
define("vs/basic-languages/twig/twig",["require","require"],(t=>(()=>{var t,e=Object.defineProperty,i=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,o=(t="undefined"!=typeof WeakMap?new WeakMap:0,(o,l)=>t&&t.get(o)||(l=((t,o,l,n)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let l of r(o))!m.call(t,l)&&e(t,l,{get:()=>o[l],enumerable:!(n=i(o,l))||n.enumerable});return t})(e({},"__esModule",{value:!0}),o),t&&t.set(o,l),l)),l={};((t,i)=>{for(var r in i)e(t,r,{get:i[r],enumerable:!0})})(l,{conf:()=>n,language:()=>a});var n={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["{#","#}"]},brackets:[["{#","#}"],["{%","%}"],["{{","}}"],["(",")"],["[","]"],["\x3c!--","--\x3e"],["<",">"]],autoClosingPairs:[{open:"{# ",close:" #}"},{open:"{% ",close:" %}"},{open:"{{ ",close:" }}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"<",close:">"}]},a={defaultToken:"",tokenPostfix:"",ignoreCase:!0,keywords:["apply","autoescape","block","deprecated","do","embed","extends","flush","for","from","if","import","include","macro","sandbox","set","use","verbatim","with","endapply","endautoescape","endblock","endembed","endfor","endif","endmacro","endsandbox","endset","endwith","true","false"],tokenizer:{root:[[/\s+/],[/{#/,"comment.twig","@commentState"],[/{%[-~]?/,"delimiter.twig","@blockState"],[/{{[-~]?/,"delimiter.twig","@variableState"],[/<!DOCTYPE/,"metatag.html","@doctype"],[/<!--/,"comment.html","@comment"],[/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,["delimiter.html","tag.html","","delimiter.html"]],[/(<)(script)/,["delimiter.html",{token:"tag.html",next:"@script"}]],[/(<)(style)/,["delimiter.html",{token:"tag.html",next:"@style"}]],[/(<)((?:[\w\-]+:)?[\w\-]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)((?:[\w\-]+:)?[\w\-]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/[^<]+/]],commentState:[[/#}/,"comment.twig","@pop"],[/./,"comment.twig"]],blockState:[[/[-~]?%}/,"delimiter.twig","@pop"],[/\s+/],[/(verbatim)(\s*)([-~]?%})/,["keyword.twig","",{token:"delimiter.twig",next:"@rawDataState"}]],{include:"expression"}],rawDataState:[[/({%[-~]?)(\s*)(endverbatim)(\s*)([-~]?%})/,["delimiter.twig","","keyword.twig","",{token:"delimiter.twig",next:"@popall"}]],[/./,"string.twig"]],variableState:[[/[-~]?}}/,"delimiter.twig","@pop"],{include:"expression"}],stringState:[[/"/,"string.twig","@pop"],[/#{\s*/,"string.twig","@interpolationState"],[/[^#"\\]*(?:(?:\\.|#(?!\{))[^#"\\]*)*/,"string.twig"]],interpolationState:[[/}/,"string.twig","@pop"],{include:"expression"}],expression:[[/\s+/],[/\+|-|\/{1,2}|%|\*{1,2}/,"operators.twig"],[/(and|or|not|b-and|b-xor|b-or)(\s+)/,["operators.twig",""]],[/==|!=|<|>|>=|<=/,"operators.twig"],[/(starts with|ends with|matches)(\s+)/,["operators.twig",""]],[/(in)(\s+)/,["operators.twig",""]],[/(is)(\s+)/,["operators.twig",""]],[/\||~|:|\.{1,2}|\?{1,2}/,"operators.twig"],[/[^\W\d][\w]*/,{cases:{"@keywords":"keyword.twig","@default":"variable.twig"}}],[/\d+(\.\d+)?/,"number.twig"],[/\(|\)|\[|\]|{|}|,/,"delimiter.twig"],[/"([^#"\\]*(?:\\.[^#"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'/,"string.twig"],[/"/,"string.twig","@stringState"],[/=>/,"operators.twig"],[/=/,"operators.twig"]],doctype:[[/[^>]+/,"metatag.content.html"],[/>/,"metatag.html","@pop"]],comment:[[/-->/,"comment.html","@pop"],[/[^-]+/,"comment.content.html"],[/./,"comment.content.html"]],otherTag:[[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w\-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/[ \t\r\n]+/]],script:[[/type/,"attribute.name.html","@scriptAfterType"],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w\-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],scriptAfterType:[[/=/,"delimiter.html","@scriptAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value.html",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value.html",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/>/,{token:"delimiter.html",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w\-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]],style:[[/type/,"attribute.name.html","@styleAfterType"],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w\-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/>/,{token:"delimiter.html",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],styleAfterType:[[/=/,"delimiter.html","@styleAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value.html",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value.html",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/>/,{token:"delimiter.html",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value.html"],[/'([^']*)'/,"attribute.value.html"],[/[\w\-]+/,"attribute.name.html"],[/=/,"delimiter.html"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]]}};return o(l)})()));