const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BAcSfnB1.js","assets/chunks/framework.D2FS3J_H.js","assets/chunks/rolldown-runtime.C0FnF6B9.js","assets/chunks/es.DH4RtPSg.js","assets/chunks/HylimoEditor.CDj2BCvk.js","assets/chunks/standaloneServices.BXOCwtb0.js","assets/chunks/configuration.service.CuP66Ekj.js","assets/chunks/editorBrowser.dgU2TtKJ.js","assets/chunks/textfiles.CyVckU_T.js","assets/chunks/embeddedCodeEditorWidget.Cc4e26mx.js","assets/chunks/tools.Dxlf7dOf.js","assets/chunks/languageConfiguration.D-lkYRBb.js","assets/chunks/platformObservableUtils.Bc8QL6sV.js","assets/chunks/fileConstants.B9QfwKeH.js","assets/chunks/monaco-vscode-files-service-override.BjHbryq9.js","assets/chunks/extensions.Df3o5jxk.js","assets/chunks/extensionManagement.service.DDoXrm0o.js","assets/chunks/jsonErrorMessages.dG0YIOB7.js","assets/chunks/monaco-vscode-extensions-service-override.C_92kHEy.js","assets/chunks/extensionsRegistry.Czm93d6N.js","assets/chunks/getIconClasses.QicknDET.js","assets/chunks/webWorkerDescriptor.BPsGdDNG.js","assets/chunks/languageStatusService.service.CkiFIiTF.js","assets/chunks/languageService.Br5yFG11.js","assets/chunks/semanticTokensConfig.hkHB_n1m.js","assets/chunks/workbenchThemeService.service.CH60lkcc.js","assets/chunks/preferences.service._Y2tC1V-.js","assets/chunks/lspPlugin.Dw8Ck4Ih.js","assets/chunks/FileSaver.min.BekQ1rKa.js","assets/chunks/virtual_pwa-register.DdstIz06.js"])))=>i.map(i=>d[i]);
import{At as e,B as t,Bt as n,C as r,Ct as i,D as a,Dt as o,E as s,Et as c,F as l,Ft as u,Gt as d,H as f,Ht as ee,It as p,Jt as m,Kt as h,L as g,Lt as _,Mt as te,N as ne,Nt as v,Ot as y,Pt as re,R as ie,Rt as b,S as x,St as S,T as ae,U as oe,Vt as C,W as se,Wt as w,Xt as T,Yt as ce,Zt as le,_t as E,a as ue,b as de,cn as D,ct as fe,dn as O,en as pe,f as me,ft as k,gt as A,h as he,ht as j,j as ge,jt as _e,k as ve,kt as M,l as N,ln as P,lt as ye,nn as be,nt as F,o as xe,p as Se,pt as Ce,qt as I,rn as we,rt as Te,st as Ee,tn as L,un as R,ut as De,vt as z,w as Oe,wt as B,xt as V,y as ke,yt as H,zt as U}from"./framework.D2FS3J_H.js";var Ae=B({__name:`VPBadge`,props:{text:{},type:{default:`tip`}},setup(e){return(t,n)=>(p(),H(`span`,{class:P([`VPBadge`,e.type])},[U(t.$slots,`default`,{},()=>[V(O(e.text),1)])],2))}}),je={key:0,class:`VPBackdrop`},Me=F(B({__name:`VPBackdrop`,props:{show:{type:Boolean}},setup(e){return(t,n)=>(p(),E(Te,{name:`fade`},{default:T(()=>[e.show?(p(),H(`div`,je)):z(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-c79a1216`]]),W=ke;function Ne(e,t){let n,r=!1;return()=>{n&&clearTimeout(n),r?n=setTimeout(e,t):(e(),(r=!0)&&setTimeout(()=>r=!1,t))}}function Pe(e){return e.startsWith(`/`)?e:`/${e}`}function Fe(e,t,n){return n===void 0?!!e&&Oe(e)||t===`_blank`:n}function Ie(e){let{pathname:t,search:n,hash:r,protocol:i}=new URL(e,`http://a.com`);if(Oe(e)||e.startsWith(`#`)||!i.startsWith(`http`)||!a(t))return e;let{site:o}=W(),s=t.endsWith(`/`)||t.endsWith(`.html`)?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,o.value.cleanUrls?``:`.html`)}${n}${r}`);return he(s)}function Le(e,t){let n=new Set;return e.filter(e=>{let r=t(e);return!n.has(r)&&n.add(r)})}function G({linkToCorrespondingPage:e=!1}={}){let t=W(),n=N(),{site:r,localeIndex:i}=t,a=j(()=>({label:r.value.locales[i.value]?.label,link:r.value.locales[i.value]?.link||(i.value===`root`?`/`:`/${i.value}/`)}));return{currentLang:a,localeLinks:j(()=>Object.entries(r.value.locales).flatMap(([r,i])=>a.value.label===i.label?[]:{text:i.label,link:Re(t,n,{targetLocale:r,targetLocaleLink:i.link||(r===`root`?`/`:`/${r}/`),currentLocaleLink:a.value.link,linkToCorrespondingPage:e}),lang:i.lang,dir:i.dir}))}}function Re(e,t,{targetLocale:n,targetLocaleLink:r,currentLocaleLink:i,linkToCorrespondingPage:a}){let{site:o,theme:s}=e,c=s.value.i18nRouting;return a&&typeof c==`function`?c(e,t,n):ze(r,c!==!1&&a,t.data.relativePath.slice(i.length-1),!o.value.cleanUrls)+t.query+t.hash}function ze(e,t,n,r){return t?e.replace(/\/$/,``)+Pe(n.replace(/(^|\/)index\.md$/,`$1`).replace(/\.md$/,r?`.html`:``)):e}var Be={class:`NotFound`},Ve={class:`code`},He={class:`title`},Ue={class:`quote`},We={class:`action`},Ge=[`href`,`aria-label`],Ke=F(B({__name:`NotFound`,setup(e){let{theme:t}=W(),{currentLang:n}=G();return(e,r)=>(p(),H(`div`,Be,[A(`p`,Ve,O(D(t).notFound?.code??`404`),1),A(`h1`,He,O(D(t).notFound?.title??`PAGE NOT FOUND`),1),r[0]||=A(`div`,{class:`divider`},null,-1),A(`blockquote`,Ue,O(D(t).notFound?.quote??`But if you don't change your direction, and if you keep looking, you may end up where you are heading.`),1),A(`div`,We,[A(`a`,{class:`link`,href:D(he)(D(t).notFound?.link??D(n).link),"aria-label":D(t).notFound?.linkLabel??`go to home`},O(D(t).notFound?.linkText??`Take me home`),9,Ge)])]))}}),[[`__scopeId`,`data-v-829df670`]]);function qe(e,t){if(Array.isArray(e))return Ze(e);if(e==null)return[];t=Pe(t);let n=Object.keys(e).sort((e,t)=>t.split(`/`).length-e.split(`/`).length).find(e=>t.startsWith(Pe(e))),r=n?e[n]:[];return Array.isArray(r)?Ze(r):Ze(r.items,r.base)}function Je(e){let t=[],n=0;for(let r in e){let i=e[r];if(i.items){n=t.push(i);continue}t[n]||t.push({items:[]}),t[n].items.push(i)}return t}function Ye(e){let t=[];function n(e){for(let r of e)r.text&&r.link&&t.push({text:r.text,link:r.link,docFooterText:r.docFooterText,rel:r.rel,target:r.target}),r.items&&n(r.items)}return n(e),t}function Xe(e,t,n){return Array.isArray(n)?n.some(n=>Xe(e,t,n)):n.link&&r(e,t,n.link)?!0:n.items?Xe(e,t,n.items):!1}function Ze(e,t){return[...e].map(e=>{let n={...e},r=n.base||t;return r&&n.link&&!Oe(n.link)&&(n.link=r+n.link.replace(/^\//,r.endsWith(`/`)?``:`/`)),n.items&&=Ze(n.items,r),n})}function Qe(){let{hasSidebar:e}=J(),t=g(`(min-width: 960px)`),n=g(`(min-width: 1280px)`);return{isAsideEnabled:j(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}var $e=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,et=[];function tt(e){return typeof e.outline==`object`&&!Array.isArray(e.outline)&&e.outline.label||`On this page`}function nt(e){return it([...document.querySelectorAll(`.VPDoc h1, .VPDoc h2, .VPDoc h3, .VPDoc h4, .VPDoc h5, .VPDoc h6`)].filter(e=>e.id&&e.hasChildNodes()).map(e=>{let t=Number(e.tagName[1]);return{element:e,title:rt(e),link:`#`+e.id,level:t}}),e)}function rt(e){let t=``;for(let n of e.childNodes)if(n.nodeType===1){if($e.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function it(e,t){if(t===!1)return[];let n=(typeof t==`object`&&!Array.isArray(t)?t.level:t)||2,[r,i]=typeof n==`number`?[n,n]:n===`deep`?[2,6]:n;return st(e,r,i)}function at(e,t){let{isAsideEnabled:n}=Qe(),r=Ne(s,100),i=null,a=!1;v(()=>{requestAnimationFrame(s),window.addEventListener(`scroll`,r),e.value.addEventListener(`click`,o)}),u(()=>{c(location.hash)}),re(()=>{window.removeEventListener(`scroll`,r)});function o(e){if(!n.value)return;let t=e.target instanceof Element?e.target.closest(`a`)?.hash:null;t&&(a=!0,c(t))}function s(){if(!n.value)return;if(a){a=!1;return}let e=window.scrollY,t=window.innerHeight,r=document.body.offsetHeight,i=Math.abs(e+t-r)<1,o=et.map(({element:e,link:t})=>({link:t,top:ot(e),scrollMarginTop:Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0})).filter(({top:e})=>!Number.isNaN(e)).sort((e,t)=>e.top-t.top);if(!o.length){c(null);return}if(e<1){c(null);return}if(i){c(o[o.length-1].link);return}let s=null;for(let{link:t,top:n,scrollMarginTop:r}of o){if(n>e+r+4)break;s=t}c(s)}function c(n){i&&i.classList.remove(`active`),i=n==null?null:e.value.querySelector(`a[href$="${decodeURIComponent(n)}"]`);let r=i;r?(r.classList.add(`active`),t.value.style.top=r.offsetTop+39+`px`,t.value.style.opacity=`1`):(t.value.style.top=`33px`,t.value.style.opacity=`0`)}}function ot(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function st(e,t,n){et.length=0;let r=[],i=[];return e.forEach(e=>{let a={...e,children:[]},o=i[i.length-1];for(;o&&o.level>=a.level;)i.pop(),o=i[i.length-1];if(a.element.classList.contains(`ignore-header`)||o&&`shouldIgnore`in o){i.push({level:a.level,shouldIgnore:!0});return}a.level>n||a.level<t||(et.push({element:a.element,link:a.link}),o?o.children.push(a):r.push(a),i.push(a))}),r}var K=L(!1);function ct(e){let t;m(()=>{t=K.value?document.activeElement:void 0}),v(()=>{window.addEventListener(`keyup`,n)}),re(()=>{window.removeEventListener(`keyup`,n)});function n(n){n.key===`Escape`&&K.value&&(e(),t?.focus())}}function lt(){function e(){K.value=!0}function t(){K.value=!1}function n(){K.value?t():e()}return{isOpen:K,open:e,close:t,toggle:n}}function ut(t){let n=N(),i=L(!1),a=j(()=>t.value.collapsed!=null),o=j(()=>!!t.value.link),s=L(!1),c=L(!1);function l(){if(t.value.link?s.value=r(n.data.relativePath,n.hash,t.value.link):s.value=!1,s.value){c.value=!0,e(()=>i.value=!1);return}if(!t.value.items){c.value=!1;return}c.value=Xe(n.data.relativePath,n.hash,t.value.items),c.value&&e(()=>i.value=!1)}I([t,n],l),v(l);let u=j(()=>!!(t.value.items&&t.value.items.length));m(()=>{i.value=!!(a.value&&t.value.collapsed)});function d(){a.value&&(i.value=!i.value)}return{collapsed:i,collapsible:a,isLink:o,isActiveLink:s,hasActiveLink:c,hasChildren:u,toggle:d}}var dt=we([]),q=we([]),ft=we(!1);function J(){let{frontmatter:e,theme:t}=W(),n=j(()=>!!(e.value.isHome??e.value.layout===`home`)),r=j(()=>e.value.sidebar!==!1&&q.value.length>0&&!n.value),i=j(()=>r.value&&ft.value),a=j(()=>r.value?Je(q.value):[]),o=j(()=>n.value?!1:e.value.aside==null?t.value.aside!==!1:!!e.value.aside),s=j(()=>o.value?e.value.aside==null?t.value.aside===`left`:e.value.aside===`left`:!1),c=j(()=>dt.value.length>0);return{isHome:n,sidebar:be(q),sidebarGroups:a,hasSidebar:r,isSidebarEnabled:i,hasAside:o,leftAside:s,headers:be(dt),hasLocalNav:c}}function pt({closeSidebar:e}){let{theme:t,page:n,frontmatter:r}=W();I(()=>[n.value.relativePath,t.value.sidebar],([e,t])=>{let n=t?qe(t,e):[];JSON.stringify(n)!==JSON.stringify(q.value)&&(q.value=n)},{immediate:!0,deep:!0,flush:`sync`}),Se(()=>{dt.value=nt(r.value.outline??t.value.outline)}),x&&(ft.value=window.innerWidth>=960,window.addEventListener(`resize`,()=>{ft.value=window.innerWidth>=960},{passive:!0}));let i=N();I(()=>i.path,e),I(ft,e),ct(e)}var mt=Symbol(`layout-info`),ht={class:`VPDocAsideCarbonAds`},gt=B({__name:`VPDocAsideCarbonAds`,props:{carbonAds:{}},setup(e){let t=()=>null;return(n,r)=>(p(),H(`div`,ht,[S(D(t),{"carbon-ads":e.carbonAds},null,8,[`carbon-ads`])]))}}),_t=[`href`,`title`],vt=F(B({__name:`VPDocOutlineItem`,props:{headers:{},root:{type:Boolean}},setup(e){return(t,r)=>{let i=n(`VPDocOutlineItem`,!0);return p(),H(`ul`,{class:P([`VPDocOutlineItem`,e.root?`root`:`nested`])},[(p(!0),H(k,null,b(e.headers,({children:e,link:t,title:n})=>(p(),H(`li`,null,[A(`a`,{class:`outline-link`,href:t,title:n},O(n),9,_t),e?.length?(p(),E(i,{key:0,headers:e},null,8,[`headers`])):z(``,!0)]))),256))],2)}}}),[[`__scopeId`,`data-v-1ce71065`]]),yt={class:`content`},bt={"aria-level":`2`,class:`outline-title`,id:`doc-outline-aria-label`,role:`heading`},xt=F(B({__name:`VPDocAsideOutline`,setup(e){let{theme:t}=W(),n=L(),r=L(),{headers:i,hasLocalNav:a}=J();return at(n,r),(e,o)=>(p(),H(`nav`,{"aria-labelledby":`doc-outline-aria-label`,class:P([`VPDocAsideOutline`,{"has-outline":D(a)}]),ref_key:`container`,ref:n},[A(`div`,yt,[A(`div`,{class:`outline-marker`,ref_key:`marker`,ref:r},null,512),A(`div`,bt,O(D(tt)(D(t))),1),S(vt,{headers:D(i),root:!0},null,8,[`headers`])])],2))}}),[[`__scopeId`,`data-v-208c587c`]]),St={class:`VPDocAside`},Ct=F(B({__name:`VPDocAside`,setup(e){let{theme:t}=W();return(e,n)=>(p(),H(`div`,St,[U(e.$slots,`aside-top`,{},void 0,!0),U(e.$slots,`aside-outline-before`,{},void 0,!0),S(xt),U(e.$slots,`aside-outline-after`,{},void 0,!0),n[0]||=A(`div`,{class:`spacer`},null,-1),U(e.$slots,`aside-ads-before`,{},void 0,!0),D(t).carbonAds?(p(),E(gt,{key:0,"carbon-ads":D(t).carbonAds},null,8,[`carbon-ads`])):z(``,!0),U(e.$slots,`aside-ads-after`,{},void 0,!0),U(e.$slots,`aside-bottom`,{},void 0,!0)]))}}),[[`__scopeId`,`data-v-62132652`]]);function wt(){let{theme:e,page:t}=W();return j(()=>{let{text:n=`Edit this page`,pattern:r=``}=e.value.editLink||{},i;return i=typeof r==`function`?r(t.value):r.replace(/:path/g,t.value.filePath),{url:i,text:n}})}function Tt(){let{theme:e,page:t,frontmatter:n}=W();return j(()=>{let i=Le(Ye(qe(e.value.sidebar,t.value.relativePath)),e=>s(e.link)),a=i.findIndex(e=>r(t.value.relativePath,``,e.link,!1,!0)),o=e.value.docFooter?.prev===!1&&!n.value.prev||n.value.prev===!1,c=e.value.docFooter?.next===!1&&!n.value.next||n.value.next===!1;return{prev:o?void 0:{text:(typeof n.value.prev==`string`?n.value.prev:typeof n.value.prev==`object`?n.value.prev.text:void 0)??i[a-1]?.docFooterText??i[a-1]?.text,link:(typeof n.value.prev==`object`?n.value.prev.link:void 0)??i[a-1]?.link,target:(typeof n.value.prev==`object`?n.value.prev.target:void 0)??i[a-1]?.target,rel:(typeof n.value.prev==`object`?n.value.prev.rel:void 0)??i[a-1]?.rel},next:c?void 0:{text:(typeof n.value.next==`string`?n.value.next:typeof n.value.next==`object`?n.value.next.text:void 0)??i[a+1]?.docFooterText??i[a+1]?.text,link:(typeof n.value.next==`object`?n.value.next.link:void 0)??i[a+1]?.link,target:(typeof n.value.next==`object`?n.value.next.target:void 0)??i[a+1]?.target,rel:(typeof n.value.next==`object`?n.value.next.rel:void 0)??i[a+1]?.rel}}})}var Et={class:`VPLastUpdated`},Dt=[`datetime`],Ot=F(B({__name:`VPDocFooterLastUpdated`,setup(e){let{theme:t,page:n,lang:r}=W(),{language:i}=ie(),a=h(`timeRef`),o=j(()=>new Date(n.value.lastUpdated)),s=j(()=>o.value.toISOString()),c=we(``);return v(()=>{m(()=>{let e=t.value.lastUpdated?.formatOptions?.forceLocale?r.value:i.value;c.value=new Intl.DateTimeFormat(e,t.value.lastUpdated?.formatOptions??{dateStyle:`medium`,timeStyle:`medium`}).format(o.value),e&&r.value!==e?a.value?.setAttribute(`lang`,e):a.value?.removeAttribute(`lang`)})}),(e,n)=>(p(),H(`p`,Et,[V(O(D(t).lastUpdated?.text||`Last updated`)+`: `,1),A(`time`,{ref_key:`timeRef`,ref:a,datetime:s.value},O(c.value),9,Dt)]))}}),[[`__scopeId`,`data-v-430c07b8`]]),Y=B({__name:`VPLink`,props:{tag:{},href:{},noIcon:{type:Boolean},external:{type:Boolean,default:void 0},target:{},rel:{}},setup(e){let t=e,n=j(()=>t.tag??(t.href?`a`:`span`)),r=j(()=>Fe(t.href,t.target,t.external));return(t,i)=>(p(),E(C(n.value),{class:P([`VPLink`,{link:e.href,"vp-external-link-icon":r.value,"no-icon":e.noIcon}]),href:e.href?D(Ie)(e.href):void 0,target:e.target??(r.value?`_blank`:void 0),rel:e.rel??(r.value?`noreferrer`:void 0)},{default:T(()=>[U(t.$slots,`default`)]),_:3},8,[`class`,`href`,`target`,`rel`]))}}),kt={key:0,class:`VPDocFooter`},At={key:0,class:`edit-info`},jt={key:0,class:`edit-link`},Mt={key:1,class:`last-updated`},Nt={key:1,class:`prev-next`,"aria-labelledby":`doc-footer-aria-label`},Pt={class:`pager`},Ft=[`innerHTML`],It=[`innerHTML`],Lt={class:`pager`},Rt=[`innerHTML`],zt=[`innerHTML`],Bt=F(B({__name:`VPDocFooter`,setup(e){let{theme:t,page:n,frontmatter:r}=W(),i=wt(),a=Tt(),o=j(()=>t.value.editLink&&r.value.editLink!==!1),s=j(()=>n.value.lastUpdated),c=j(()=>o.value||s.value||a.value.prev||a.value.next);return(e,n)=>c.value?(p(),H(`footer`,kt,[U(e.$slots,`doc-footer-before`,{},void 0,!0),o.value||s.value?(p(),H(`div`,At,[o.value?(p(),H(`div`,jt,[S(Y,{class:`edit-link-button`,href:D(i).url,"no-icon":!0},{default:T(()=>[n[0]||=A(`span`,{class:`vpi-square-pen edit-link-icon`},null,-1),V(` `+O(D(i).text),1)]),_:1},8,[`href`])])):z(``,!0),s.value?(p(),H(`div`,Mt,[S(Ot)])):z(``,!0)])):z(``,!0),D(a).prev?.link||D(a).next?.link?(p(),H(`nav`,Nt,[n[1]||=A(`span`,{class:`visually-hidden`,id:`doc-footer-aria-label`},`Pager`,-1),A(`div`,Pt,[D(a).prev?.link?(p(),E(Y,{key:0,class:`pager-link prev`,href:D(a).prev.link,target:D(a).prev.target,rel:D(a).prev.rel},{default:T(()=>[A(`span`,{class:`desc`,innerHTML:D(t).docFooter?.prev||`Previous page`},null,8,Ft),A(`span`,{class:`title`,innerHTML:D(a).prev.text},null,8,It)]),_:1},8,[`href`,`target`,`rel`])):z(``,!0)]),A(`div`,Lt,[D(a).next?.link?(p(),E(Y,{key:0,class:`pager-link next`,href:D(a).next.link,target:D(a).next.target,rel:D(a).next.rel},{default:T(()=>[A(`span`,{class:`desc`,innerHTML:D(t).docFooter?.next||`Next page`},null,8,Rt),A(`span`,{class:`title`,innerHTML:D(a).next.text},null,8,zt)]),_:1},8,[`href`,`target`,`rel`])):z(``,!0)])])):z(``,!0)])):z(``,!0)}}),[[`__scopeId`,`data-v-4f2a98af`]]),Vt={class:`container`},Ht={class:`aside-container`},Ut={class:`aside-content`},Wt={class:`content`},Gt={class:`content-container`},Kt={class:`main`},qt=F(B({__name:`VPDoc`,setup(e){let{theme:t}=W(),r=N(),{hasSidebar:i,hasAside:a,leftAside:o}=J(),s=j(()=>r.path.replace(/[./]+/g,`_`).replace(/_html$/,``));return(e,r)=>{let c=n(`Content`);return p(),H(`div`,{class:P([`VPDoc`,{"has-sidebar":D(i),"has-aside":D(a)}])},[U(e.$slots,`doc-top`,{},void 0,!0),A(`div`,Vt,[D(a)?(p(),H(`div`,{key:0,class:P([`aside`,{"left-aside":D(o)}])},[r[0]||=A(`div`,{class:`aside-curtain`},null,-1),A(`div`,Ht,[A(`div`,Ut,[S(Ct,null,{"aside-top":T(()=>[U(e.$slots,`aside-top`,{},void 0,!0)]),"aside-bottom":T(()=>[U(e.$slots,`aside-bottom`,{},void 0,!0)]),"aside-outline-before":T(()=>[U(e.$slots,`aside-outline-before`,{},void 0,!0)]),"aside-outline-after":T(()=>[U(e.$slots,`aside-outline-after`,{},void 0,!0)]),"aside-ads-before":T(()=>[U(e.$slots,`aside-ads-before`,{},void 0,!0)]),"aside-ads-after":T(()=>[U(e.$slots,`aside-ads-after`,{},void 0,!0)]),_:3})])])],2)):z(``,!0),A(`div`,Wt,[A(`div`,Gt,[U(e.$slots,`doc-before`,{},void 0,!0),A(`main`,Kt,[S(c,{class:P([`vp-doc`,[s.value,D(t).externalLinkIcon&&`external-link-icon-enabled`]])},null,8,[`class`])]),S(Bt,null,{"doc-footer-before":T(()=>[U(e.$slots,`doc-footer-before`,{},void 0,!0)]),_:3}),U(e.$slots,`doc-after`,{},void 0,!0)])])]),U(e.$slots,`doc-bottom`,{},void 0,!0)],2)}}}),[[`__scopeId`,`data-v-d2ed57e1`]]),Jt=F(B({__name:`VPHomeContent`,setup(e){let{width:t}=se({initialWidth:0,includeScrollbar:!1});return(e,n)=>(p(),H(`div`,{class:`vp-doc container`,style:R(D(t)?{"--vp-offset":`calc(50% - ${D(t)/2}px)`}:{}),"data-allow-mismatch":`style`},[U(e.$slots,`default`,{},void 0,!0)],4))}}),[[`__scopeId`,`data-v-19aa779d`]]),Yt=[`src`,`alt`],Xt=F(B({inheritAttrs:!1,__name:`VPImage`,props:{image:{},alt:{}},setup(e){return(t,r)=>{let i=n(`VPImage`,!0);return e.image?(p(),H(k,{key:0},[typeof e.image==`string`||`src`in e.image?(p(),H(`img`,M({key:0,class:`VPImage`},typeof e.image==`string`?t.$attrs:{...e.image,...t.$attrs},{src:D(he)(typeof e.image==`string`?e.image:e.image.src),alt:e.alt??(typeof e.image==`string`?``:e.image.alt||``)}),null,16,Yt)):(p(),H(k,{key:1},[S(i,M({class:`dark`,image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,[`image`,`alt`]),S(i,M({class:`light`,image:e.image.light,alt:e.image.alt},t.$attrs),null,16,[`image`,`alt`])],64))],64)):z(``,!0)}}}),[[`__scopeId`,`data-v-e7da9998`]]),Zt={class:`box`},Qt={key:0,class:`icon`},$t=[`innerHTML`],en=[`innerHTML`],tn={key:3,class:`details`},nn=[`innerHTML`],rn=[`innerHTML`],an={key:5,class:`link-text`},on={class:`link-text-value`},sn=F(B({__name:`VPFeature`,props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(p(),E(Y,{class:`VPFeature`,href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?`a`:`div`},{default:T(()=>[A(`article`,Zt,[typeof e.icon==`object`&&e.icon.wrap?(p(),H(`div`,Qt,[S(Xt,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,[`image`,`alt`,`height`,`width`])])):typeof e.icon==`object`?(p(),E(Xt,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,[`image`,`alt`,`height`,`width`])):e.icon?(p(),H(`div`,{key:2,class:`icon`,innerHTML:e.icon},null,8,$t)):z(``,!0),A(`h2`,{class:`title`,innerHTML:e.title},null,8,en),Array.isArray(e.details)?(p(),H(`ul`,tn,[(p(!0),H(k,null,b(e.details,e=>(p(),H(`li`,{key:e,innerHTML:e},null,8,nn))),128))])):e.details?(p(),H(`p`,{key:4,class:`details`,innerHTML:e.details},null,8,rn)):z(``,!0),e.linkText?(p(),H(`div`,an,[A(`p`,on,[V(O(e.linkText)+` `,1),n[0]||=A(`span`,{class:`vpi-arrow-right link-text-icon`},null,-1)])])):z(``,!0)])]),_:1},8,[`href`,`rel`,`target`,`tag`]))}}),[[`__scopeId`,`data-v-e5511d04`]]),cn={key:0,class:`VPFeatures`},ln={class:`container`},un={class:`items`},dn=F(B({__name:`VPFeatures`,props:{features:{}},setup(e){let t=e,n=j(()=>{let e=t.features.length;if(e){if(e===2)return`grid-2`;if(e===3)return`grid-3`;if(e%3==0)return`grid-6`;if(e>3)return`grid-4`}});return(t,r)=>e.features?(p(),H(`div`,cn,[A(`div`,ln,[A(`ul`,un,[(p(!0),H(k,null,b(e.features,e=>(p(),H(`li`,{key:e.title,class:P([`item`,[n.value]])},[S(sn,{icon:e.icon,title:e.title,details:e.details,link:e.link,"link-text":e.linkText,rel:e.rel,target:e.target},null,8,[`icon`,`title`,`details`,`link`,`link-text`,`rel`,`target`])],2))),128))])])])):z(``,!0)}}),[[`__scopeId`,`data-v-bb74c475`]]),fn=B({__name:`VPHomeFeatures`,setup(e){let{frontmatter:t}=W();return(e,n)=>D(t).features?(p(),E(dn,{key:0,class:`VPHomeFeatures`,features:D(t).features},null,8,[`features`])):z(``,!0)}}),pn=F(B({__name:`VPButton`,props:{tag:{},size:{default:`medium`},theme:{default:`brand`},text:{},href:{},target:{},rel:{}},setup(e){let t=e,n=j(()=>t.href&&de.test(t.href)),r=j(()=>t.tag||(t.href?`a`:`button`));return(i,a)=>(p(),E(C(r.value),{class:P([`VPButton`,[e.size,e.theme]]),href:e.href?D(Ie)(e.href):void 0,target:t.target??(n.value?`_blank`:void 0),rel:t.rel??(n.value?`noreferrer`:void 0)},{default:T(()=>[U(i.$slots,`default`,{},()=>[V(O(e.text),1)],!0)]),_:3},8,[`class`,`href`,`target`,`rel`]))}}),[[`__scopeId`,`data-v-b8c35b0d`]]),mn={class:`container`},hn={class:`main`},gn={class:`heading`},_n=[`innerHTML`],vn=[`innerHTML`],yn=[`innerHTML`],bn={key:0,class:`actions`},xn={key:0,class:`image`},Sn={class:`image-container`},Cn=F(B({__name:`VPHero`,props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){let{heroImageSlotExists:t}=o(mt,{heroImageSlotExists:j(()=>!1)});return(n,r)=>(p(),H(`div`,{class:P([`VPHero`,{"has-image":e.image||D(t)}])},[A(`div`,mn,[A(`div`,hn,[U(n.$slots,`home-hero-info-before`,{},void 0,!0),U(n.$slots,`home-hero-info`,{},()=>[A(`h1`,gn,[e.name?(p(),H(`span`,{key:0,innerHTML:e.name,class:`name clip`},null,8,_n)):z(``,!0),e.text?(p(),H(`span`,{key:1,innerHTML:e.text,class:`text`},null,8,vn)):z(``,!0)]),e.tagline?(p(),H(`p`,{key:0,innerHTML:e.tagline,class:`tagline`},null,8,yn)):z(``,!0)],!0),U(n.$slots,`home-hero-info-after`,{},void 0,!0),e.actions?(p(),H(`div`,bn,[U(n.$slots,`home-hero-actions-before-actions`,{},void 0,!0),(p(!0),H(k,null,b(e.actions,e=>(p(),H(`div`,{key:e.link,class:`action`},[S(pn,{tag:`a`,size:`medium`,theme:e.theme,text:e.text,href:e.link,target:e.target,rel:e.rel},null,8,[`theme`,`text`,`href`,`target`,`rel`])]))),128))])):z(``,!0),U(n.$slots,`home-hero-actions-after`,{},void 0,!0)]),e.image||D(t)?(p(),H(`div`,xn,[A(`div`,Sn,[r[0]||=A(`div`,{class:`image-bg`},null,-1),U(n.$slots,`home-hero-image`,{},()=>[e.image?(p(),E(Xt,{key:0,class:`image-src`,image:e.image},null,8,[`image`])):z(``,!0)],!0)])])):z(``,!0)])],2))}}),[[`__scopeId`,`data-v-e62e4946`]]),wn=B({__name:`VPHomeHero`,setup(e){let{frontmatter:t}=W();return(e,n)=>D(t).hero?(p(),E(Cn,{key:0,class:`VPHomeHero`,name:D(t).hero.name,text:D(t).hero.text,tagline:D(t).hero.tagline,image:D(t).hero.image,actions:D(t).hero.actions},{"home-hero-info-before":T(()=>[U(e.$slots,`home-hero-info-before`)]),"home-hero-info":T(()=>[U(e.$slots,`home-hero-info`)]),"home-hero-info-after":T(()=>[U(e.$slots,`home-hero-info-after`)]),"home-hero-actions-after":T(()=>[U(e.$slots,`home-hero-actions-after`)]),"home-hero-actions-before-actions":T(()=>[U(e.$slots,`home-hero-actions-before-actions`)]),"home-hero-image":T(()=>[U(e.$slots,`home-hero-image`)]),_:3},8,[`name`,`text`,`tagline`,`image`,`actions`])):z(``,!0)}}),Tn=F(B({__name:`VPHome`,setup(e){let{frontmatter:t,theme:r}=W();return(e,i)=>{let a=n(`Content`);return p(),H(`div`,{class:P([`VPHome`,{"external-link-icon-enabled":D(r).externalLinkIcon}])},[U(e.$slots,`home-hero-before`,{},void 0,!0),S(wn,null,{"home-hero-info-before":T(()=>[U(e.$slots,`home-hero-info-before`,{},void 0,!0)]),"home-hero-info":T(()=>[U(e.$slots,`home-hero-info`,{},void 0,!0)]),"home-hero-info-after":T(()=>[U(e.$slots,`home-hero-info-after`,{},void 0,!0)]),"home-hero-actions-after":T(()=>[U(e.$slots,`home-hero-actions-after`,{},void 0,!0)]),"home-hero-actions-before-actions":T(()=>[U(e.$slots,`home-hero-actions-before-actions`,{},void 0,!0)]),"home-hero-image":T(()=>[U(e.$slots,`home-hero-image`,{},void 0,!0)]),_:3}),U(e.$slots,`home-hero-after`,{},void 0,!0),U(e.$slots,`home-features-before`,{},void 0,!0),S(fn),U(e.$slots,`home-features-after`,{},void 0,!0),D(t).markdownStyles===!1?(p(),E(a,{key:1})):(p(),E(Jt,{key:0},{default:T(()=>[S(a)]),_:1}))],2)}}}),[[`__scopeId`,`data-v-2862d62e`]]),En={},Dn={class:`VPPage`};function On(e,t){let r=n(`Content`);return p(),H(`div`,Dn,[U(e.$slots,`page-top`),S(r),U(e.$slots,`page-bottom`)])}var kn=F(En,[[`render`,On]]),An=F(B({__name:`VPContent`,setup(e){let{page:t,frontmatter:n}=W(),{isHome:r,hasSidebar:i}=J();function a(e){return typeof C(e)!=`string`}return(e,o)=>(p(),H(`div`,{class:P([`VPContent`,{"has-sidebar":D(i),"is-home":D(r)}]),id:`VPContent`},[D(t).isNotFound?U(e.$slots,`not-found`,{},()=>[S(Ke)],!0,0):D(n).layout===`page`&&!a(`page`)?(p(),E(kn,{key:1},{"page-top":T(()=>[U(e.$slots,`page-top`,{},void 0,!0)]),"page-bottom":T(()=>[U(e.$slots,`page-bottom`,{},void 0,!0)]),_:3})):D(n).layout===`home`&&!a(`home`)?(p(),E(Tn,{key:2},{"home-hero-before":T(()=>[U(e.$slots,`home-hero-before`,{},void 0,!0)]),"home-hero-info-before":T(()=>[U(e.$slots,`home-hero-info-before`,{},void 0,!0)]),"home-hero-info":T(()=>[U(e.$slots,`home-hero-info`,{},void 0,!0)]),"home-hero-info-after":T(()=>[U(e.$slots,`home-hero-info-after`,{},void 0,!0)]),"home-hero-actions-after":T(()=>[U(e.$slots,`home-hero-actions-after`,{},void 0,!0)]),"home-hero-actions-before-actions":T(()=>[U(e.$slots,`home-hero-actions-before-actions`,{},void 0,!0)]),"home-hero-image":T(()=>[U(e.$slots,`home-hero-image`,{},void 0,!0)]),"home-hero-after":T(()=>[U(e.$slots,`home-hero-after`,{},void 0,!0)]),"home-features-before":T(()=>[U(e.$slots,`home-features-before`,{},void 0,!0)]),"home-features-after":T(()=>[U(e.$slots,`home-features-after`,{},void 0,!0)]),_:3})):(!D(n).layout||D(n).layout===`doc`)&&!a(`doc`)?(p(),E(qt,{key:3},{"doc-top":T(()=>[U(e.$slots,`doc-top`,{},void 0,!0)]),"doc-bottom":T(()=>[U(e.$slots,`doc-bottom`,{},void 0,!0)]),"doc-footer-before":T(()=>[U(e.$slots,`doc-footer-before`,{},void 0,!0)]),"doc-before":T(()=>[U(e.$slots,`doc-before`,{},void 0,!0)]),"doc-after":T(()=>[U(e.$slots,`doc-after`,{},void 0,!0)]),"aside-top":T(()=>[U(e.$slots,`aside-top`,{},void 0,!0)]),"aside-outline-before":T(()=>[U(e.$slots,`aside-outline-before`,{},void 0,!0)]),"aside-outline-after":T(()=>[U(e.$slots,`aside-outline-after`,{},void 0,!0)]),"aside-ads-before":T(()=>[U(e.$slots,`aside-ads-before`,{},void 0,!0)]),"aside-ads-after":T(()=>[U(e.$slots,`aside-ads-after`,{},void 0,!0)]),"aside-bottom":T(()=>[U(e.$slots,`aside-bottom`,{},void 0,!0)]),_:3})):(p(),E(C(D(n).layout||`doc`),{key:4}))],2))}}),[[`__scopeId`,`data-v-7948e71f`]]),jn={class:`container`},Mn=[`innerHTML`],Nn=[`innerHTML`],Pn=F(B({__name:`VPFooter`,setup(e){let{theme:t,frontmatter:n}=W(),{hasSidebar:r}=J();return(e,i)=>D(t).footer&&D(n).footer!==!1?(p(),H(`footer`,{key:0,class:P([`VPFooter`,{"has-sidebar":D(r)}])},[A(`div`,jn,[D(t).footer.message?(p(),H(`p`,{key:0,class:`message`,innerHTML:D(t).footer.message},null,8,Mn)):z(``,!0),D(t).footer.copyright?(p(),H(`p`,{key:1,class:`copyright`,innerHTML:D(t).footer.copyright},null,8,Nn)):z(``,!0)])],2)):z(``,!0)}}),[[`__scopeId`,`data-v-c3855bb3`]]),Fn={class:`menu-text`},In={class:`header`},Ln={class:`outline`},Rn=F(B({__name:`VPLocalNavOutlineDropdown`,props:{headers:{},navHeight:{}},setup(t){let n=t,{theme:r}=W(),i=L(!1),a=L(0),o=L(),s=L();function c(e){o.value?.contains(e.target)||(i.value=!1)}I(i,e=>{if(e){document.addEventListener(`click`,c);return}document.removeEventListener(`click`,c)}),ne(`Escape`,()=>{i.value=!1}),Se(()=>{i.value=!1});function l(){i.value=!i.value,a.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function u(t){t.target.classList.contains(`outline-link`)&&(s.value&&(s.value.style.transition=`none`),e(()=>{i.value=!1}))}function d(){i.value=!1,window.scrollTo({top:0,left:0,behavior:`smooth`})}return(e,n)=>(p(),H(`div`,{ref_key:`main`,ref:o,class:`VPLocalNavOutlineDropdown`,style:R({"--vp-vh":a.value+`px`}),"data-allow-mismatch":`style`},[t.headers.length>0?(p(),H(`button`,{key:0,onClick:l,class:P({open:i.value})},[A(`span`,Fn,O(D(tt)(D(r))),1),n[0]||=A(`span`,{class:`vpi-chevron-right icon`},null,-1)],2)):(p(),H(`button`,{key:1,onClick:d},O(D(r).returnToTopLabel||`Return to top`),1)),S(Te,{name:`flyout`},{default:T(()=>[i.value?(p(),H(`div`,{key:0,ref_key:`items`,ref:s,class:`items`,onClick:u},[A(`div`,In,[A(`a`,{class:`top-link`,href:`#`,onClick:d},O(D(r).returnToTopLabel||`Return to top`),1)]),A(`div`,Ln,[S(vt,{headers:t.headers},null,8,[`headers`])])],512)):z(``,!0)]),_:1})],4))}}),[[`__scopeId`,`data-v-0c4290fe`]]),zn={class:`container`},Bn=[`aria-expanded`],Vn={class:`menu-text`},Hn=F(B({__name:`VPLocalNav`,props:{open:{type:Boolean}},emits:[`open-menu`],setup(e){let{theme:t}=W(),{isHome:n,hasSidebar:r,headers:i,hasLocalNav:a}=J(),{y:o}=oe(),s=L(0);v(()=>{s.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--vp-nav-height`))});let c=j(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:!a.value,fixed:!a.value&&!r.value}));return(l,u)=>!D(n)&&(D(a)||D(r)||D(o)>=s.value)?(p(),H(`div`,{key:0,class:P(c.value)},[A(`div`,zn,[D(r)?(p(),H(`button`,{key:0,class:`menu`,"aria-expanded":e.open,"aria-controls":`VPSidebarNav`,onClick:u[0]||=e=>l.$emit(`open-menu`)},[u[1]||=A(`span`,{class:`vpi-align-left menu-icon`},null,-1),A(`span`,Vn,O(D(t).sidebarMenuLabel||`Menu`),1)],8,Bn)):z(``,!0),S(Rn,{headers:D(i),navHeight:s.value},null,8,[`headers`,`navHeight`])])],2)):z(``,!0)}}),[[`__scopeId`,`data-v-db738f89`]]);function Un(){let e=L(!1);function t(){e.value=!0,window.addEventListener(`resize`,i)}function n(){e.value=!1,window.removeEventListener(`resize`,i)}function r(){e.value?n():t()}function i(){window.outerWidth>=768&&n()}let a=N();return I(()=>a.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:r}}var Wn=Symbol(`nav`),Gn={},Kn={class:`VPSwitch`,type:`button`,role:`switch`},qn={class:`check`},Jn={key:0,class:`icon`};function Yn(e,t){return p(),H(`button`,Kn,[A(`span`,qn,[e.$slots.default?(p(),H(`span`,Jn,[U(e.$slots,`default`,{},void 0,!0)])):z(``,!0)])])}var Xn=F(Gn,[[`render`,Yn],[`__scopeId`,`data-v-1d5665e3`]]),Zn=F(B({__name:`VPSwitchAppearance`,setup(e){let{isDark:t,theme:n}=W(),r=o(`toggle-appearance`,()=>{t.value=!t.value}),i=L(``);return ce(()=>{i.value=t.value?n.value.lightModeSwitchTitle||`Switch to light theme`:n.value.darkModeSwitchTitle||`Switch to dark theme`}),(e,n)=>(p(),E(Xn,{title:i.value,class:`VPSwitchAppearance`,"aria-checked":D(t),onClick:D(r)},{default:T(()=>[...n[0]||=[A(`span`,{class:`vpi-sun sun`},null,-1),A(`span`,{class:`vpi-moon moon`},null,-1)]]),_:1},8,[`title`,`aria-checked`,`onClick`]))}}),[[`__scopeId`,`data-v-5337faa4`]]),Qn={key:0,class:`VPNavBarAppearance`},$n=F(B({__name:`VPNavBarAppearance`,setup(e){let{site:t}=W();return(e,n)=>D(t).appearance&&D(t).appearance!==`force-dark`&&D(t).appearance!==`force-auto`?(p(),H(`div`,Qn,[S(Zn)])):z(``,!0)}}),[[`__scopeId`,`data-v-6c893767`]]),er=L(),tr=!1,nr=0;function rr(e){let t=L(!1);if(x){!tr&&ir(),nr++;let n=I(er,n=>{n===e.el.value||e.el.value?.contains(n)?(t.value=!0,e.onFocus?.()):(t.value=!1,e.onBlur?.())});re(()=>{n(),nr--,nr||ar()})}return pe(t)}function ir(){document.addEventListener(`focusin`,or),tr=!0,er.value=document.activeElement}function ar(){document.removeEventListener(`focusin`,or)}function or(){er.value=document.activeElement}var sr={class:`VPMenuLink`},cr=[`innerHTML`],lr=F(B({inheritAttrs:!1,__name:`VPMenuLink`,props:{item:{},rel:{}},setup(e){let t=e,n=N(),i=j(()=>typeof t.item.link==`function`?t.item.link(n.data):t.item.link),a=j(()=>r(n.data.relativePath,n.hash,t.item.activeMatch||i.value,!!t.item.activeMatch));return(n,r)=>(p(),H(`div`,sr,[S(Y,M(n.$attrs,{class:{active:a.value},href:i.value,target:e.item.target,rel:t.rel??e.item.rel,"no-icon":e.item.noIcon}),{default:T(()=>[A(`span`,{innerHTML:e.item.text},null,8,cr)]),_:1},16,[`class`,`href`,`target`,`rel`,`no-icon`])]))}}),[[`__scopeId`,`data-v-62ce4597`]]),ur={class:`VPMenuGroup`},dr={key:0,class:`title`},fr=F(B({__name:`VPMenuGroup`,props:{text:{},items:{}},setup(e){return(t,n)=>(p(),H(`div`,ur,[e.text?(p(),H(`p`,dr,O(e.text),1)):z(``,!0),(p(!0),H(k,null,b(e.items,e=>(p(),H(k,{key:JSON.stringify(e)},[`link`in e?(p(),E(lr,{key:0,item:e},null,8,[`item`])):z(``,!0)],64))),128))]))}}),[[`__scopeId`,`data-v-1963e1bb`]]),pr={class:`VPMenu`},mr={key:0,class:`items`},hr=F(B({__name:`VPMenu`,props:{items:{}},setup(e){return(t,n)=>(p(),H(`div`,pr,[e.items?(p(),H(`ul`,mr,[(p(!0),H(k,null,b(e.items,e=>(p(),H(`li`,{key:JSON.stringify(e)},[`link`in e?(p(),E(lr,{key:0,item:e},null,8,[`item`])):`component`in e?(p(),E(C(e.component),M({key:1,ref_for:!0},e.props),null,16)):(p(),E(fr,{key:2,text:e.text,items:e.items},null,8,[`text`,`items`]))]))),128))])):z(``,!0),U(t.$slots,`default`,{},void 0,!0)]))}}),[[`__scopeId`,`data-v-f7257f43`]]),gr=[`aria-expanded`,`aria-label`],_r={key:0,class:`text`},vr=[`innerHTML`],yr={key:1,class:`vpi-more-horizontal icon`},br={class:`menu`},xr=F(B({__name:`VPFlyout`,props:{icon:{},button:{},label:{},items:{}},setup(e){let t=L(!1),n=L();rr({el:n,onBlur:r});function r(){t.value=!1}return(r,i)=>(p(),H(`div`,{class:`VPFlyout`,ref_key:`el`,ref:n,onMouseenter:i[1]||=e=>t.value=!0,onMouseleave:i[2]||=e=>t.value=!1},[A(`button`,{type:`button`,class:`button`,"aria-haspopup":`true`,"aria-expanded":t.value,"aria-label":e.label,onClick:i[0]||=e=>t.value=!t.value},[e.button||e.icon?(p(),H(`span`,_r,[e.icon?(p(),H(`span`,{key:0,class:P([e.icon,`option-icon`])},null,2)):z(``,!0),e.button?(p(),H(`span`,{key:1,innerHTML:e.button},null,8,vr)):z(``,!0),i[3]||=A(`span`,{class:`vpi-chevron-down text-icon`},null,-1)])):(p(),H(`span`,yr))],8,gr),A(`div`,br,[S(hr,{items:e.items},{default:T(()=>[U(r.$slots,`default`,{},void 0,!0)]),_:3},8,[`items`])])],544))}}),[[`__scopeId`,`data-v-42cb505d`]]),Sr=[`href`,`aria-label`,`target`,`rel`,`innerHTML`],Cr=F(B({__name:`VPSocialLink`,props:{icon:{},link:{},ariaLabel:{},target:{},me:{type:Boolean}},setup(t){let n=t,r=L();v(async()=>{await e();let t=r.value?.children[0];t instanceof HTMLElement&&t.className.startsWith(`vpi-social-`)&&(getComputedStyle(t).maskImage||getComputedStyle(t).webkitMaskImage)===`none`&&t.style.setProperty(`--icon`,`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});let i=j(()=>typeof n.icon==`object`?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(e,n)=>(p(),H(`a`,{ref_key:`el`,ref:r,class:`VPSocialLink no-icon`,href:t.link,"aria-label":t.ariaLabel??(typeof t.icon==`string`?t.icon:``),target:t.target??(D(Oe)(t.link)?`_blank`:void 0),rel:t.me?`me noopener`:`noopener`,innerHTML:i.value},null,8,Sr))}}),[[`__scopeId`,`data-v-7bdffce5`]]),wr={class:`VPSocialLinks`},Tr=F(B({__name:`VPSocialLinks`,props:{links:{},me:{type:Boolean,default:!0}},setup(e){return(t,n)=>(p(),H(`ul`,wr,[(p(!0),H(k,null,b(e.links,({link:t,icon:n,ariaLabel:r,target:i})=>(p(),H(`li`,{key:t,class:`item`},[S(Cr,{icon:n,link:t,ariaLabel:r,target:i,me:e.me},null,8,[`icon`,`link`,`ariaLabel`,`target`,`me`])]))),128))]))}}),[[`__scopeId`,`data-v-babe741d`]]),Er={key:0,class:`group translations`},Dr={class:`trans-title`},Or={key:1,class:`group`},kr={class:`item appearance`},Ar={class:`label`},jr={class:`appearance-action`},Mr={key:2,class:`group`},Nr={class:`item social-links`},Pr=F(B({__name:`VPNavBarExtra`,setup(e){let{site:t,theme:n}=W(),{localeLinks:r,currentLang:i}=G({linkToCorrespondingPage:!0}),a=j(()=>r.value.length&&i.value.label||t.value.appearance||n.value.socialLinks);return(e,o)=>a.value?(p(),E(xr,{key:0,class:`VPNavBarExtra`,label:`extra navigation`},{default:T(()=>[D(r).length&&D(i).label?(p(),H(`ul`,Er,[A(`li`,Dr,O(D(i).label),1),(p(!0),H(k,null,b(D(r),e=>(p(),H(`li`,{key:e.link},[S(lr,{item:e,external:!1,lang:e.lang,hreflang:e.lang,rel:`alternate`,dir:e.dir,"data-allow-mismatch":`attribute`},null,8,[`item`,`lang`,`hreflang`,`dir`])]))),128))])):z(``,!0),D(t).appearance&&D(t).appearance!==`force-dark`&&D(t).appearance!==`force-auto`?(p(),H(`div`,Or,[A(`div`,kr,[A(`p`,Ar,O(D(n).darkModeSwitchLabel||`Appearance`),1),A(`div`,jr,[S(Zn)])])])):z(``,!0),D(n).socialLinks?(p(),H(`div`,Mr,[A(`div`,Nr,[S(Tr,{class:`social-links-list`,links:D(n).socialLinks},null,8,[`links`])])])):z(``,!0)]),_:1})):z(``,!0)}}),[[`__scopeId`,`data-v-3da7c200`]]),Fr=[`aria-expanded`],Ir=F(B({__name:`VPNavBarHamburger`,props:{active:{type:Boolean}},emits:[`click`],setup(e){return(t,n)=>(p(),H(`button`,{type:`button`,class:P([`VPNavBarHamburger`,{active:e.active}]),"aria-label":`mobile navigation`,"aria-expanded":e.active,"aria-controls":`VPNavScreen`,onClick:n[0]||=e=>t.$emit(`click`)},[...n[1]||=[A(`span`,{class:`container`},[A(`span`,{class:`top`}),A(`span`,{class:`middle`}),A(`span`,{class:`bottom`})],-1)]],10,Fr))}}),[[`__scopeId`,`data-v-e5dd9c1c`]]),Lr=B({__name:`VPNavBarMenuGroup`,props:{item:{}},setup(e){let t=e,n=N(),i=j(()=>t.item.activeMatch?r(n.data.relativePath,n.hash,t.item.activeMatch,!0):a(t.item));function a(e){if(`component`in e)return!1;if(`link`in e){let t=typeof e.link==`function`?e.link(n.data):e.link;return r(n.data.relativePath,n.hash,e.activeMatch||t,!!e.activeMatch)}return e.items.some(a)}return(t,n)=>(p(),E(xr,{class:P({VPNavBarMenuGroup:!0,active:i.value}),button:e.item.text,items:e.item.items},null,8,[`class`,`button`,`items`]))}}),Rr=[`innerHTML`],zr=F(B({__name:`VPNavBarMenuLink`,props:{item:{}},setup(e){let t=e,n=N(),i=j(()=>typeof t.item.link==`function`?t.item.link(n.data):t.item.link),a=j(()=>r(n.data.relativePath,n.hash,t.item.activeMatch||i.value,!!t.item.activeMatch));return(t,n)=>(p(),E(Y,{class:P({VPNavBarMenuLink:!0,active:a.value}),href:i.value,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:`0`},{default:T(()=>[A(`span`,{innerHTML:e.item.text},null,8,Rr)]),_:1},8,[`class`,`href`,`target`,`rel`,`no-icon`]))}}),[[`__scopeId`,`data-v-7547a935`]]),Br={key:0,"aria-labelledby":`main-nav-aria-label`,class:`VPNavBarMenu`},Vr={class:`list`},Hr=F(B({__name:`VPNavBarMenu`,setup(e){let{theme:t}=W();return(e,n)=>D(t).nav?(p(),H(`nav`,Br,[n[0]||=A(`span`,{id:`main-nav-aria-label`,class:`visually-hidden`},` Main Navigation `,-1),A(`ul`,Vr,[(p(!0),H(k,null,b(D(t).nav,e=>(p(),H(`li`,{key:JSON.stringify(e)},[`link`in e?(p(),E(zr,{key:0,item:e},null,8,[`item`])):`component`in e?(p(),E(C(e.component),M({key:1,ref_for:!0},e.props),null,16)):(p(),E(Lr,{key:2,item:e},null,8,[`item`]))]))),128))])])):z(``,!0)}}),[[`__scopeId`,`data-v-3ffeddce`]]);function Ur(e){let t=e.mode??`auto`,n=Wr(e),r=e.askAi,i=!!(r&&typeof r==`object`&&r.sidePanel);switch(t){case`sidePanel`:return{mode:t,showKeywordSearch:!1,useSidePanel:!0};case`hybrid`:return n||console.error(`[vitepress] mode: "hybrid" requires keyword search credentials (appId, apiKey, indexName).`),{mode:t,showKeywordSearch:n,useSidePanel:!0};case`modal`:return{mode:t,showKeywordSearch:n,useSidePanel:!1};default:return{mode:`auto`,showKeywordSearch:n,useSidePanel:i}}}function Wr(e){return!!(e.appId&&e.apiKey&&e.indexName)}function Gr(e,t){return[...(Array.isArray(e)?e:e?[e]:[]).map(e=>Array.isArray(e)?e.filter(e=>typeof e==`string`&&!e.startsWith(`lang:`)):e).filter(e=>typeof e==`string`?!e.startsWith(`lang:`):Array.isArray(e)&&e.length>0),`lang:${t}`]}function Kr(e,t,n){let r=typeof e==`string`,i=!r&&e.searchParameters?{...e.searchParameters}:void 0,a=!r&&e.agentStudio===!0,o=Gr(i?.facetFilters??t.searchParameters?.facetFilters,n),s=a?i:{...i,facetFilters:o.length?o:void 0},c={...r?{}:e,indexName:r?t.indexName:e.indexName,apiKey:r?t.apiKey:e.apiKey,appId:r?t.appId:e.appId,assistantId:r?e:e.assistantId};return s&&Object.values(s).some(e=>e!=null)&&(c.searchParameters=s),c}function qr(e,t,n){e=Jr(e,e.locales?.[t]||{});let r=Gr(e.searchParameters?.facetFilters,n),i=e.askAi?Kr(e.askAi,e,n):void 0;return{...e,searchParameters:{...e.searchParameters,facetFilters:r},askAi:i}}function Jr(e,t){let n={...e};for(let e in t){let r=t[e];if(r!==void 0){if(e===`searchParameters`){n[e]=r;continue}n[e]=ae(r)&&ae(n[e])?Jr(n[e],r):r}}return delete n.locales,n}function Yr(e,t=(e,t)=>JSON.stringify(e)===JSON.stringify(t)){return j(n=>{let r=e();return n===void 0||!t(r,n)?r:n})}var Xr={},Zr={type:`button`,class:`VPNavBarAskAiButton`};function Qr(e,t){return p(),H(`button`,Zr,[...t[0]||=[A(`span`,{class:`vpi-sparkles`,"aria-hidden":`true`},null,-1)]])}var $r=F(Xr,[[`render`,Qr],[`__scopeId`,`data-v-4eb17e89`]]),ei={type:`button`,class:`VPNavBarSearchButton`},ti={class:`text`},ni=F(B({__name:`VPNavBarSearchButton`,props:{text:{}},setup(e){return(t,n)=>(p(),H(`button`,ei,[n[0]||=A(`span`,{class:`vpi-search`,"aria-hidden":`true`},null,-1),A(`span`,ti,O(e.text),1),n[1]||=A(`span`,{class:`keys`,"aria-hidden":`true`},[A(`kbd`,{class:`key-cmd`},`⌘`),A(`kbd`,{class:`key-ctrl`},`Ctrl`),A(`kbd`,null,`K`)],-1)]))}}),[[`__scopeId`,`data-v-baa3be99`]]);xe();var ri={class:`VPNavBarSearch`},ii=F(B({__name:`VPNavBarSearch`,setup(e){let t=i(()=>ue(()=>import(`./VPLocalSearchBox.BAcSfnB1.js`),__vite__mapDeps([0,1,2,3]))),n=()=>null,{theme:r,localeIndex:a,lang:o}=W(),s=`local`,c=Yr(()=>qr(r.value.search?.options||{},a.value,o.value)),l=j(()=>Ur(c.value)),u=j(()=>{if(!l.value.useSidePanel)return null;let e=c.value.askAi;return!e||typeof e==`string`||!e.sidePanel?null:e.sidePanel===!0?{}:e.sidePanel}),d=j(()=>u.value?.keyboardShortcuts?.[`Ctrl/Cmd+I`]!==!1),f=L(null),ee=0,m=L(!1),h=L(!1);v(()=>{});function g(e){m.value||=!0,f.value={target:e,nonce:++ee}}let _=L(!1);ne(`k`,e=>{(e.ctrlKey||e.metaKey)&&(e.preventDefault(),_.value=!0)}),ne(`/`,e=>{te(e)||(e.preventDefault(),_.value=!0)});function te(e){let t=e.target,n=t.tagName;return t.isContentEditable||n===`INPUT`||n===`SELECT`||n===`TEXTAREA`}return(e,r)=>(p(),H(`div`,ri,[D(s)===`algolia`?(p(),H(k,{key:0},[l.value.showKeywordSearch?(p(),E(ni,{key:0,text:D(c).translations?.button?.buttonText||`Search`,"aria-label":D(c).translations?.button?.buttonAriaLabel||`Search`,"aria-keyshortcuts":`/ control+k meta+k`,onClick:r[0]||=e=>g(`search`)},null,8,[`text`,`aria-label`])):z(``,!0),u.value?(p(),E($r,{key:1,"aria-label":u.value.button?.translations?.buttonAriaLabel||`Ask AI`,"aria-keyshortcuts":d.value?`control+i meta+i`:void 0,onClick:r[1]||=e=>h.value?g(`toggleAskAi`):g(`askAi`)},null,8,[`aria-label`,`aria-keyshortcuts`])):z(``,!0),m.value?(p(),E(D(n),{key:2,"algolia-options":D(c),"open-request":f.value,onVnodeBeforeMount:r[2]||=e=>h.value=!0},null,8,[`algolia-options`,`open-request`])):z(``,!0)],64)):D(s)===`local`?(p(),H(k,{key:1},[S(ni,{text:D(c).translations?.button?.buttonText||`Search`,"aria-label":D(c).translations?.button?.buttonAriaLabel||`Search`,"aria-keyshortcuts":`/ control+k meta+k`,onClick:r[3]||=e=>_.value=!0},null,8,[`text`,`aria-label`]),_.value?(p(),E(D(t),{key:0,onClose:r[4]||=e=>_.value=!1})):z(``,!0)],64)):z(``,!0)]))}}),[[`__scopeId`,`data-v-2fc7f2c6`]]),ai=F(B({__name:`VPNavBarSocialLinks`,setup(e){let{theme:t}=W();return(e,n)=>D(t).socialLinks?(p(),E(Tr,{key:0,class:`VPNavBarSocialLinks`,links:D(t).socialLinks},null,8,[`links`])):z(``,!0)}}),[[`__scopeId`,`data-v-0394ad82`]]),oi=[`href`,`rel`,`target`],si=[`innerHTML`],ci={key:2},li=F(B({__name:`VPNavBarTitle`,setup(e){let{site:t,theme:n}=W(),{hasSidebar:r}=J(),{currentLang:i}=G(),a=j(()=>typeof n.value.logoLink==`string`?n.value.logoLink:n.value.logoLink?.link),o=j(()=>typeof n.value.logoLink==`string`?void 0:n.value.logoLink?.rel),s=j(()=>typeof n.value.logoLink==`string`?void 0:n.value.logoLink?.target);return(e,c)=>(p(),H(`div`,{class:P([`VPNavBarTitle`,{"has-sidebar":D(r)}])},[A(`a`,{class:`title`,href:a.value??D(Ie)(D(i).link),rel:o.value,target:s.value},[U(e.$slots,`nav-bar-title-before`,{},void 0,!0),D(n).logo?(p(),E(Xt,{key:0,class:`logo`,image:D(n).logo},null,8,[`image`])):z(``,!0),D(n).siteTitle?(p(),H(`span`,{key:1,innerHTML:D(n).siteTitle},null,8,si)):D(n).siteTitle===void 0?(p(),H(`span`,ci,O(D(t).title),1)):z(``,!0),U(e.$slots,`nav-bar-title-after`,{},void 0,!0)],8,oi)],2))}}),[[`__scopeId`,`data-v-1e38c6bc`]]),ui={class:`items`},di={class:`title`},fi=F(B({__name:`VPNavBarTranslations`,setup(e){let{theme:t}=W(),{localeLinks:n,currentLang:r}=G({linkToCorrespondingPage:!0});return(e,i)=>D(n).length&&D(r).label?(p(),E(xr,{key:0,class:`VPNavBarTranslations`,icon:`vpi-languages`,label:D(t).langMenuLabel||`Change language`},{default:T(()=>[A(`ul`,ui,[A(`li`,di,O(D(r).label),1),(p(!0),H(k,null,b(D(n),e=>(p(),H(`li`,{key:e.link},[S(lr,{item:e,external:!1,lang:e.lang,hreflang:e.lang,rel:`alternate`,dir:e.dir,"data-allow-mismatch":`attribute`},null,8,[`item`,`lang`,`hreflang`,`dir`])]))),128))])]),_:1},8,[`label`])):z(``,!0)}}),[[`__scopeId`,`data-v-6e8525b1`]]),pi={class:`wrapper`},mi={class:`container`},hi={class:`title`},gi={class:`content`},_i={class:`content-body`},vi=F(B({__name:`VPNavBar`,props:{isScreenOpen:{type:Boolean}},emits:[`toggle-screen`],setup(e){let{y:t}=oe(),{isHome:n,hasSidebar:r}=J();return(i,a)=>(p(),H(`div`,{class:P([`VPNavBar`,{"has-sidebar":D(r),home:D(n),top:D(t)===0,"screen-open":e.isScreenOpen}])},[A(`div`,pi,[A(`div`,mi,[A(`div`,hi,[S(li,null,{"nav-bar-title-before":T(()=>[U(i.$slots,`nav-bar-title-before`,{},void 0,!0)]),"nav-bar-title-after":T(()=>[U(i.$slots,`nav-bar-title-after`,{},void 0,!0)]),_:3})]),A(`div`,gi,[A(`div`,_i,[U(i.$slots,`nav-bar-content-before`,{},void 0,!0),S(ii,{class:`search`}),S(Hr,{class:`menu`}),S(fi,{class:`translations`}),S($n,{class:`appearance`}),S(ai,{class:`social-links`}),S(Pr,{class:`extra`}),U(i.$slots,`nav-bar-content-after`,{},void 0,!0),S(Ir,{class:`hamburger`,active:e.isScreenOpen,onClick:a[0]||=e=>i.$emit(`toggle-screen`)},null,8,[`active`])])])])]),a[1]||=A(`div`,{class:`divider`},[A(`div`,{class:`divider-line`})],-1)],2))}}),[[`__scopeId`,`data-v-9ca1369d`]]),yi={key:0,class:`VPNavScreenAppearance`},bi={class:`text`},xi=F(B({__name:`VPNavScreenAppearance`,setup(e){let{site:t,theme:n}=W();return(e,r)=>D(t).appearance&&D(t).appearance!==`force-dark`&&D(t).appearance!==`force-auto`?(p(),H(`div`,yi,[A(`p`,bi,O(D(n).darkModeSwitchLabel||`Appearance`),1),S(Zn)])):z(``,!0)}}),[[`__scopeId`,`data-v-b44890b2`]]),Si=[`innerHTML`],Ci=F(B({__name:`VPNavScreenMenuGroupLink`,props:{item:{}},setup(e){let t=e,n=N(),i=j(()=>typeof t.item.link==`function`?t.item.link(n.data):t.item.link),a=j(()=>r(n.data.relativePath,n.hash,t.item.activeMatch||i.value,!!t.item.activeMatch)),{closeScreen:s}=o(Wn);return(t,n)=>(p(),E(Y,{class:P({VPNavScreenMenuGroupLink:!0,active:a.value}),href:i.value,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:D(s)},{default:T(()=>[A(`span`,{innerHTML:e.item.text},null,8,Si)]),_:1},8,[`class`,`href`,`target`,`rel`,`no-icon`,`onClick`]))}}),[[`__scopeId`,`data-v-f57b246c`]]),wi={class:`VPNavScreenMenuGroupSection`},Ti={key:0,class:`title`},Ei=F(B({__name:`VPNavScreenMenuGroupSection`,props:{text:{},items:{}},setup(e){return(t,n)=>(p(),H(`div`,wi,[e.text?(p(),H(`p`,Ti,O(e.text),1)):z(``,!0),A(`ul`,null,[(p(!0),H(k,null,b(e.items,e=>(p(),H(`li`,{key:e.text},[S(Ci,{item:e},null,8,[`item`])]))),128))])]))}}),[[`__scopeId`,`data-v-fd65402d`]]),Di=[`aria-controls`,`aria-expanded`],Oi=[`innerHTML`],ki=[`id`],Ai={key:0,class:`item`},ji={key:1,class:`item`},Mi={key:2,class:`group`},Ni=F(B({__name:`VPNavScreenMenuGroup`,props:{text:{},items:{}},setup(e){let t=e,n=L(!1),r=j(()=>`NavScreenGroup-${t.text.replace(` `,`-`).toLowerCase()}`);function i(){n.value=!n.value}return(t,a)=>(p(),H(`div`,{class:P([`VPNavScreenMenuGroup`,{open:n.value}])},[A(`button`,{class:`button`,"aria-controls":r.value,"aria-expanded":n.value,onClick:i},[A(`span`,{class:`button-text`,innerHTML:e.text},null,8,Oi),a[0]||=A(`span`,{class:`vpi-plus button-icon`},null,-1)],8,Di),A(`ul`,{id:r.value,class:`items`},[(p(!0),H(k,null,b(e.items,e=>(p(),H(`li`,{key:JSON.stringify(e)},[`link`in e?(p(),H(`div`,Ai,[S(Ci,{item:e},null,8,[`item`])])):`component`in e?(p(),H(`div`,ji,[(p(),E(C(e.component),M({ref_for:!0},e.props,{"screen-menu":``}),null,16))])):(p(),H(`div`,Mi,[S(Ei,{text:e.text,items:e.items},null,8,[`text`,`items`])]))]))),128))],8,ki)],2))}}),[[`__scopeId`,`data-v-684cc37d`]]),Pi=[`innerHTML`],Fi=F(B({__name:`VPNavScreenMenuLink`,props:{item:{}},setup(e){let t=e,n=N(),i=j(()=>typeof t.item.link==`function`?t.item.link(n.data):t.item.link),a=j(()=>r(n.data.relativePath,n.hash,t.item.activeMatch||i.value,!!t.item.activeMatch)),{closeScreen:s}=o(Wn);return(t,n)=>(p(),E(Y,{class:P({VPNavScreenMenuLink:!0,active:a.value}),href:i.value,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:D(s)},{default:T(()=>[A(`span`,{innerHTML:e.item.text},null,8,Pi)]),_:1},8,[`class`,`href`,`target`,`rel`,`no-icon`,`onClick`]))}}),[[`__scopeId`,`data-v-bd67b1dd`]]),Ii={key:0,class:`VPNavScreenMenu`},Li=B({__name:`VPNavScreenMenu`,setup(e){let{theme:t}=W();return(e,n)=>D(t).nav?(p(),H(`nav`,Ii,[A(`ul`,null,[(p(!0),H(k,null,b(D(t).nav,e=>(p(),H(`li`,{key:JSON.stringify(e)},[`link`in e?(p(),E(Fi,{key:0,item:e},null,8,[`item`])):`component`in e?(p(),E(C(e.component),M({key:1,ref_for:!0},e.props,{"screen-menu":``}),null,16)):(p(),E(Ni,{key:2,text:e.text||``,items:e.items},null,8,[`text`,`items`]))]))),128))])])):z(``,!0)}}),Ri=B({__name:`VPNavScreenSocialLinks`,setup(e){let{theme:t}=W();return(e,n)=>D(t).socialLinks?(p(),E(Tr,{key:0,class:`VPNavScreenSocialLinks`,links:D(t).socialLinks},null,8,[`links`])):z(``,!0)}}),zi={class:`list`},Bi=F(B({__name:`VPNavScreenTranslations`,setup(e){let{localeLinks:t,currentLang:n}=G({linkToCorrespondingPage:!0}),r=L(!1);function i(){r.value=!r.value}return(e,a)=>D(t).length&&D(n).label?(p(),H(`div`,{key:0,class:P([`VPNavScreenTranslations`,{open:r.value}])},[A(`button`,{class:`title`,onClick:i},[a[0]||=A(`span`,{class:`vpi-languages icon lang`},null,-1),V(` `+O(D(n).label)+` `,1),a[1]||=A(`span`,{class:`vpi-chevron-down icon chevron`},null,-1)]),A(`ul`,zi,[(p(!0),H(k,null,b(D(t),e=>(p(),H(`li`,{key:e.link,class:`item`},[S(Y,{class:`link`,href:e.link,external:!1,lang:e.lang,hreflang:e.lang,rel:`alternate`,dir:e.dir,"data-allow-mismatch":`attribute`},{default:T(()=>[V(O(e.text),1)]),_:2},1032,[`href`,`lang`,`hreflang`,`dir`])]))),128))])],2)):z(``,!0)}}),[[`__scopeId`,`data-v-9f676d38`]]),Vi={key:0,class:`VPNavScreen`,id:`VPNavScreen`},Hi={class:`container`},Ui=F(B({__name:`VPNavScreen`,props:{open:{type:Boolean}},setup(e){let n=t(x?document.body:null);return(t,r)=>(p(),E(Te,{name:`fade`,onEnter:r[0]||=e=>n.value=!0,onAfterLeave:r[1]||=e=>n.value=!1},{default:T(()=>[e.open?(p(),H(`div`,Vi,[A(`div`,Hi,[U(t.$slots,`nav-screen-content-before`,{},void 0,!0),S(Li,{class:`menu`}),S(Bi,{class:`translations`}),S(xi,{class:`appearance`}),S(Ri,{class:`social-links`}),U(t.$slots,`nav-screen-content-after`,{},void 0,!0)])])):z(``,!0)]),_:3}))}}),[[`__scopeId`,`data-v-05f3d7bc`]]),Wi={key:0,class:`VPNav`},Gi=F(B({__name:`VPNav`,setup(e){let{isScreenOpen:t,closeScreen:n,toggleScreen:r}=Un(),{frontmatter:i}=W(),a=j(()=>i.value.navbar!==!1);return _(Wn,{closeScreen:n}),m(()=>{x&&document.documentElement.classList.toggle(`hide-nav`,!a.value)}),(e,n)=>a.value?(p(),H(`header`,Wi,[S(vi,{"is-screen-open":D(t),onToggleScreen:D(r)},{"nav-bar-title-before":T(()=>[U(e.$slots,`nav-bar-title-before`,{},void 0,!0)]),"nav-bar-title-after":T(()=>[U(e.$slots,`nav-bar-title-after`,{},void 0,!0)]),"nav-bar-content-before":T(()=>[U(e.$slots,`nav-bar-content-before`,{},void 0,!0)]),"nav-bar-content-after":T(()=>[U(e.$slots,`nav-bar-content-after`,{},void 0,!0)]),_:3},8,[`is-screen-open`,`onToggleScreen`]),S(Ui,{open:D(t)},{"nav-screen-content-before":T(()=>[U(e.$slots,`nav-screen-content-before`,{},void 0,!0)]),"nav-screen-content-after":T(()=>[U(e.$slots,`nav-screen-content-after`,{},void 0,!0)]),_:3},8,[`open`])])):z(``,!0)}}),[[`__scopeId`,`data-v-9f75dce3`]]),Ki=[`role`,`tabindex`],qi={key:1,class:`items`},Ji={key:0},Yi=F(B({__name:`VPSidebarItem`,props:{item:{},depth:{}},setup(e){let t=e,{collapsed:r,collapsible:i,isLink:a,isActiveLink:o,hasActiveLink:s,hasChildren:c,toggle:l}=ut(j(()=>t.item)),u=j(()=>c.value?`section`:`div`),d=j(()=>a.value?`a`:`div`),f=j(()=>c.value?t.depth+2===7?`p`:`h${t.depth+2}`:`p`),m=j(()=>a.value?void 0:`button`),h=j(()=>[[`level-${t.depth}`],{collapsible:i.value},{collapsed:r.value},{"is-link":a.value},{"is-active":o.value},{"has-active":s.value}]);function g(e){`key`in e&&e.key!==`Enter`||!t.item.link&&l()}function _(){t.item.link&&l()}return(t,r)=>{let i=n(`VPSidebarItem`,!0);return p(),E(C(u.value),{class:P([`VPSidebarItem`,h.value])},{default:T(()=>[e.item.text?(p(),H(`div`,M({key:0,class:`item`,role:m.value},ee(e.item.items?{click:g,keydown:g}:{},!0),{tabindex:e.item.items&&0}),[r[1]||=A(`div`,{class:`indicator`},null,-1),e.item.link?(p(),E(Y,{key:0,tag:d.value,class:`link`,href:e.item.link,rel:e.item.rel,target:e.item.target},{default:T(()=>[(p(),E(C(f.value),{class:`text`,innerHTML:e.item.text},null,8,[`innerHTML`]))]),_:1},8,[`tag`,`href`,`rel`,`target`])):(p(),E(C(f.value),{key:1,class:`text`,innerHTML:e.item.text},null,8,[`innerHTML`])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(p(),H(`div`,{key:2,class:`caret`,role:`button`,"aria-label":`toggle section`,onClick:_,onKeydown:ye(_,[`enter`]),tabindex:`0`},[...r[0]||=[A(`span`,{class:`vpi-chevron-right caret-icon`},null,-1)]],32)):z(``,!0)],16,Ki)):z(``,!0),e.item.items&&e.item.items.length?(p(),H(`ul`,qi,[e.depth<5?(p(),H(`li`,Ji,[(p(!0),H(k,null,b(e.item.items,t=>(p(),E(i,{key:t.text,item:t,depth:e.depth+1},null,8,[`item`,`depth`]))),128))])):z(``,!0)])):z(``,!0)]),_:1},8,[`class`])}}}),[[`__scopeId`,`data-v-1988c617`]]),Xi=F(B({__name:`VPSidebarGroup`,props:{items:{}},setup(e){let t=L(!0),n=null;return v(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),te(()=>{n!=null&&(clearTimeout(n),n=null)}),(n,r)=>(p(!0),H(k,null,b(e.items,e=>(p(),H(`div`,{key:e.text,class:P([`group`,{"no-transition":t.value}])},[S(Yi,{item:e,depth:0},null,8,[`item`])],2))),128))}}),[[`__scopeId`,`data-v-8d50c081`]]),Zi={class:`nav`,id:`VPSidebarNav`,"aria-labelledby":`sidebar-aria-label`,tabindex:`-1`},Qi=F(B({__name:`VPSidebar`,props:{open:{type:Boolean}},setup(e){let{sidebarGroups:n,hasSidebar:r}=J(),i=e,a=L(null),o=t(x?document.body:null);I([i,a],()=>{i.open?(o.value=!0,a.value?.focus()):o.value=!1},{immediate:!0,flush:`post`});let s=L(0);return I(n,()=>{s.value+=1},{deep:!0}),(t,i)=>D(r)?(p(),H(`aside`,{key:0,class:P([`VPSidebar`,{open:e.open}]),ref_key:`navEl`,ref:a,onClick:i[0]||=De(()=>{},[`stop`])},[i[2]||=A(`div`,{class:`curtain`},null,-1),A(`nav`,Zi,[i[1]||=A(`span`,{class:`visually-hidden`,id:`sidebar-aria-label`},` Sidebar Navigation `,-1),U(t.$slots,`sidebar-nav-before`,{},void 0,!0),(p(),E(Xi,{items:D(n),key:s.value},null,8,[`items`])),U(t.$slots,`sidebar-nav-after`,{},void 0,!0)])],2)):z(``,!0)}}),[[`__scopeId`,`data-v-af661f50`]]),$i={href:`#VPContent`,class:`VPSkipLink visually-hidden`},ea=F(B({__name:`VPSkipLink`,setup(e){let{theme:t}=W(),n=N(),r=L();return I(()=>n.path,()=>r.value.focus()),(e,n)=>(p(),H(k,null,[A(`span`,{ref_key:`backToTop`,ref:r,tabindex:`-1`},null,512),A(`a`,$i,O(D(t).skipToContentLabel||`Skip to content`),1)],64))}}),[[`__scopeId`,`data-v-414181b2`]]),ta={Layout:F(B({__name:`Layout`,setup(e){let{isOpen:t,open:r,close:i}=lt();pt({closeSidebar:i});let{frontmatter:a}=W(),o=d(),s=j(()=>!!o[`home-hero-image`]);return _(mt,{heroImageSlotExists:s}),(e,o)=>{let s=n(`Content`);return D(a).layout===!1?(p(),E(s,{key:1})):(p(),H(`div`,{key:0,class:P([`Layout`,D(a).pageClass])},[U(e.$slots,`layout-top`,{},void 0,!0),S(ea),S(Me,{class:`backdrop`,show:D(t),onClick:D(i)},null,8,[`show`,`onClick`]),S(Gi,null,{"nav-bar-title-before":T(()=>[U(e.$slots,`nav-bar-title-before`,{},void 0,!0)]),"nav-bar-title-after":T(()=>[U(e.$slots,`nav-bar-title-after`,{},void 0,!0)]),"nav-bar-content-before":T(()=>[U(e.$slots,`nav-bar-content-before`,{},void 0,!0)]),"nav-bar-content-after":T(()=>[U(e.$slots,`nav-bar-content-after`,{},void 0,!0)]),"nav-screen-content-before":T(()=>[U(e.$slots,`nav-screen-content-before`,{},void 0,!0)]),"nav-screen-content-after":T(()=>[U(e.$slots,`nav-screen-content-after`,{},void 0,!0)]),_:3}),S(Hn,{open:D(t),onOpenMenu:D(r)},null,8,[`open`,`onOpenMenu`]),S(Qi,{open:D(t)},{"sidebar-nav-before":T(()=>[U(e.$slots,`sidebar-nav-before`,{},void 0,!0)]),"sidebar-nav-after":T(()=>[U(e.$slots,`sidebar-nav-after`,{},void 0,!0)]),_:3},8,[`open`]),S(An,null,{"page-top":T(()=>[U(e.$slots,`page-top`,{},void 0,!0)]),"page-bottom":T(()=>[U(e.$slots,`page-bottom`,{},void 0,!0)]),"not-found":T(()=>[U(e.$slots,`not-found`,{},void 0,!0)]),"home-hero-before":T(()=>[U(e.$slots,`home-hero-before`,{},void 0,!0)]),"home-hero-info-before":T(()=>[U(e.$slots,`home-hero-info-before`,{},void 0,!0)]),"home-hero-info":T(()=>[U(e.$slots,`home-hero-info`,{},void 0,!0)]),"home-hero-info-after":T(()=>[U(e.$slots,`home-hero-info-after`,{},void 0,!0)]),"home-hero-actions-after":T(()=>[U(e.$slots,`home-hero-actions-after`,{},void 0,!0)]),"home-hero-actions-before-actions":T(()=>[U(e.$slots,`home-hero-actions-before-actions`,{},void 0,!0)]),"home-hero-image":T(()=>[U(e.$slots,`home-hero-image`,{},void 0,!0)]),"home-hero-after":T(()=>[U(e.$slots,`home-hero-after`,{},void 0,!0)]),"home-features-before":T(()=>[U(e.$slots,`home-features-before`,{},void 0,!0)]),"home-features-after":T(()=>[U(e.$slots,`home-features-after`,{},void 0,!0)]),"doc-footer-before":T(()=>[U(e.$slots,`doc-footer-before`,{},void 0,!0)]),"doc-before":T(()=>[U(e.$slots,`doc-before`,{},void 0,!0)]),"doc-after":T(()=>[U(e.$slots,`doc-after`,{},void 0,!0)]),"doc-top":T(()=>[U(e.$slots,`doc-top`,{},void 0,!0)]),"doc-bottom":T(()=>[U(e.$slots,`doc-bottom`,{},void 0,!0)]),"aside-top":T(()=>[U(e.$slots,`aside-top`,{},void 0,!0)]),"aside-bottom":T(()=>[U(e.$slots,`aside-bottom`,{},void 0,!0)]),"aside-outline-before":T(()=>[U(e.$slots,`aside-outline-before`,{},void 0,!0)]),"aside-outline-after":T(()=>[U(e.$slots,`aside-outline-after`,{},void 0,!0)]),"aside-ads-before":T(()=>[U(e.$slots,`aside-ads-before`,{},void 0,!0)]),"aside-ads-after":T(()=>[U(e.$slots,`aside-ads-after`,{},void 0,!0)]),_:3}),S(Pn),U(e.$slots,`layout-bottom`,{},void 0,!0)],2))}}}),[[`__scopeId`,`data-v-0cf61682`]]),enhanceApp:({app:e})=>{e.component(`Badge`,Ae)}};xe();var na={class:`hint-text`},ra=1500,ia=F(B({__name:`EmbeddedHylimoEditor`,props:{code:{type:String,required:!0}},setup(e){let t=me(()=>ue(()=>import(`./HylimoEditor.CDj2BCvk.js`),__vite__mapDeps([4,2,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,3,28]))),n=h(`wrapper`),r=L(!1),i=L(!1),a=L(`Click to interact`),o;function s(){return r.value||(n.value?.contains(ve?.activeElement??null)??!1)}function c(e){s()||(e.stopPropagation(),u())}function u(){i.value=!0,clearTimeout(o),o=setTimeout(()=>{i.value=!1},ra)}return l(n,`wheel`,c,{capture:!0}),l(n,`touchmove`,c,{capture:!0}),l(ve,`pointerdown`,e=>{n.value?.contains(e.target)?e.pointerType===`touch`?a.value=`Tap to interact`:r.value=!0:r.value=!1},{capture:!0}),l(n,`click`,()=>{r.value=!0}),te(()=>{clearTimeout(o)}),(r,o)=>(p(),H(`div`,{ref_key:`wrapper`,ref:n,class:`wrapper`},[S(D(t),{class:`editor`,"model-value":decodeURIComponent(e.code),horizontal:``},null,8,[`model-value`]),A(`div`,{class:P([`hint`,{visible:i.value}]),"aria-hidden":`true`},[A(`span`,na,O(a.value),1)],2)],512))}}),[[`__scopeId`,`data-v-3535b0ed`]]),X=[{id:`class`,title:`Class diagram`,description:`The domain model of a small shop`,group:`Diagram types`,source:`classDiagram {
    package("ordering") {
        interface("Payable") {
            public {
                pay(amount : Money) : void
            }
        } layout {
            pos = apos(0, -320)
        }

        class("Order") {
            public {
                id : String
                state : OrderState
            }
            public(abstract = true) {
                total() : Money
            }
            public(static = true) {
                create(customer : Customer) : Order
            }
            section("{ total = sum(items.price) }")
        } layout {
            pos = apos(0, 0)
        }

        class("OrderItem") {
            public {
                amount : Int
                price : Money
            }
        } layout {
            pos = apos(0, 420)
        }

        enum("OrderState") {
            entries {
                NEW
                PAID
                SHIPPED
            }
        } layout {
            pos = apos(540, 0)
        }

        package("payment") {
            interface("PaymentMethod")

            class("CreditCard") layout {
                pos = apos(0, 240)
            }

            CreditCard implements PaymentMethod with {
                over = start(Position.Top).line(end(Position.Bottom))
            }
        } layout {
            pos = apos(540, 260)
        }

        class("Customer", abstract = true) {
            public {
                name : String
            }
        } layout {
            pos = apos(-580, 0)
        }

        class("PrivateCustomer") layout {
            pos = apos(-760, 320)
        }

        class("BusinessCustomer", keywords = list("legal entity")) layout {
            pos = apos(-400, 320)
        }

        note = comment("Customers are imported from the CRM") layout {
            pos = apos(-580, -320)
        }

        Order implements Payable with {
            over = start(Position.Top).line(end(Position.Bottom))
        }

        Order *--> OrderItem with {
            over = start(Position.Bottom).line(end(Position.Top))
            label("1", 0.15, -12)
            label("+items", 0.5, -32)
            label("1..*", 0.78, -14)
        }

        Order --> OrderState with {
            over = start(Position.Right).line(end(Position.Left))
            label("+state", 0.5, -12)
        }

        Customer --> Order with {
            over = start(Position.Right).line(end(Position.Left))
            label("0..*", 0.85, -12)
        }

        PrivateCustomer extends Customer with {
            over = start(Position.Top).axisAligned(-0.5, end(Position.BottomLeft))
        }

        BusinessCustomer extends Customer with {
            over = start(Position.Top).axisAligned(-0.5, end(Position.BottomRight))
        }

        note .. Customer with {
            over = start(0.25).line(end(0.75))
        }
    }
}
`,docs:{text:`UML Class Diagram`,link:`/docs/class`}},{id:`component`,title:`Component diagram`,description:`The parts of the shop and the interfaces between them`,group:`Diagram types`,source:`componentDiagram {
    component("Shop", keywords = list("subsystem")) {
        component("Catalog")

        component("Cart") layout {
            pos = apos(0, 240)
        }

        Cart ..> Catalog with {
            over = start(Position.Top).line(end(Position.Bottom))
        }
    } layout {
        pos = apos(0, 0)
    }

    Shop.port(0.75).provides("Web", 0.75)

    component("PaymentService") {
        public {
            authorize(amount : Money) : Token
        }
    } layout {
        pos = apos(0, 380)
    }

    PaymentService.provides("Payment", 0.75, dist = 60, namePos = [60, -9])
    Shop.requires(0.25, Payment)

    component("Warehouse") layout {
        pos = apos(800, 0)
    }

    Warehouse.provides("Stock", 0.5, namePos = [0, -34])
    stockRequired = Shop.requires(0)
    stockRequired dependsOn Stock

    note = comment("The shop is deployed as a single container") layout {
        pos = apos(-600, 0)
    }
    Shop .. note with {
        over = start(0.5).line(end(0))
    }
}
`,docs:{text:`UML Component Diagram`,link:`/docs/component`}},{id:`sequence`,title:`Sequence diagram`,description:`An order, from the first click to the confirmation`,group:`Diagram types`,source:`sequenceDiagram {
    user = actor("user") {
        values {
            loggedIn = true
        }
    }
    participant("ourShop", "Shop")
    instance("Cart")
    component("Payment")

    activate(user, after = 25)
    activate(ourShop)
    user --> ourShop with {
        label("checkout()", 0.5)
    }

    activate(Cart, after = 25)
    ourShop -->> Cart with {
        label("getItems()", 0.5)
    }

    activate(ourShop, after = 25)
    ourShop <<.. Cart with {
        label("items", 0.5, -8)
    }
    deactivate(Cart)

    frame("alt", subtext = "cart not empty", after = 20) {
        activate(Payment, after = 50)
        ourShop -->> Payment with {
            label("pay(total)", 0.5)
        }

        frame("ref", subtext = "fraud check", left = ourShop, right = Payment, after = 15) {
            delay(40)
        }

        ourShop <<.. Payment with {
            label("receipt", 0.5, -8)
        }
        deactivate(Payment)

        fragment("else", after = 40)
        ourShop -->> lostMessage(distance = 150) with {
            label("logEmpty()", 0.5)
        }
    }

    delay(15)
    user <.. ourShop with {
        label("confirmation", 0.5)
    }
    deactivate(ourShop)
    deactivate(ourShop)
    destroy(Cart)
    deactivate(user, after = 25)
}
`,docs:{text:`UML Sequence Diagram`,link:`/docs/sequence`}},{id:`activity`,title:`Activity diagram`,description:`Order handling, with decisions and parallel flows`,group:`Diagram types`,source:`activityDiagram {
    start("begin") layout {
        pos = apos(0, 0)
    }
    action("Receive order") layout {
        pos = apos(0, 90)
    }
    object("Order", state = "accepted") layout {
        pos = apos(0, 210)
    }
    decision("Order valid?") layout {
        pos = apos(0, 330)
    }
    action("Reject order") layout {
        pos = apos(340, 330)
    }
    end("rejected") layout {
        pos = apos(340, 500)
    }
    fork("split") layout {
        pos = apos(0, 500)
    }
    action("Ship order") {
        pin(0.25, "shipment", namePos = [-60, 0])
    } layout {
        pos = apos(-190, 620)
    }
    action("Send invoice") layout {
        pos = apos(190, 620)
    }
    join("sync") layout {
        pos = apos(0, 800)
    }
    outgoing = connector("A") layout {
        pos = apos(0, 900)
    }

    incoming = connector("A") layout {
        pos = apos(700, 0)
    }
    sendSignal("Order shipped") layout {
        pos = apos(700, 120)
    }
    acceptEvent("Payment received") layout {
        pos = apos(700, 260)
    }
    stop("done") layout {
        pos = apos(700, 400)
    }

    begin --> \`Receive order\` with {
        over = start(0.25).line(end(0.75))
    }
    \`Receive order\` --> Order with {
        over = start(0.25).line(end(0.75))
    }
    Order --> \`Order valid?\` with {
        over = start(0.25).line(end(0.75))
    }
    \`Order valid?\` --> split with {
        over = start(0.25).line(end(0.75))
        label("[yes]", 0.5, -20)
    }
    \`Order valid?\` --> \`Reject order\` with {
        label("[no]", 0.5, -20)
    }
    \`Reject order\` --> rejected with {
        over = start(0.25).line(end(0.75))
    }
    split --> \`Ship order\` with {
        over = start(0.3).axisAligned(-0.5, end(0.75))
    }
    split --> \`Send invoice\` with {
        over = start(0.2).axisAligned(-0.5, end(0.75))
    }
    shipment --> sync with {
        over = start(0.25).axisAligned(-0.5, end(0.7))
    }
    \`Send invoice\` --> sync with {
        over = start(0.25).axisAligned(-0.5, end(0.8))
    }
    sync --> outgoing with {
        over = start(0.25).line(end(0.75))
    }
    incoming --> \`Order shipped\` with {
        over = start(0.25).line(end(0.75))
    }
    \`Order shipped\` --> \`Payment received\` with {
        over = start(0.25).line(end(0.75))
    }
    \`Payment received\` --> done with {
        over = start(0.25).line(end(0.75))
    }

    note = comment("The order is closed once both flows have finished") layout {
        pos = apos(430, 800)
    }
    sync .. note with {
        over = start(0).line(end(0.5))
    }
}
`,docs:{text:`UML Activity Diagram`,link:`/docs/activity`}},{id:`deployment`,title:`Deployment diagram`,description:`Where the shop runs and what is deployed onto it`,group:`Diagram types`,source:`deploymentDiagram {
    device("appHost", "ApplicationHost") {
        executionEnvironment("JVM") {
            artifact("shop.war")
        }
    } layout {
        pos = apos(0, 0)
    }

    device("dbHost", "DatabaseHost") {
        artifact("schema.sql")
    } layout {
        pos = apos(700, 0)
    }

    appHost -- dbHost with {
        over = start(Position.Right).line(end(Position.Left))
        label(keyword("JDBC"), 0.486, -15.1)
    }

    component("Shop") layout {
        pos = apos(-20, 500)
    }

    \`shop.war\` ..> Shop with {
        over = start(Position.Bottom).line(end(Position.Top))
        label(keyword("manifest"), 0.487, -39)
    }

    deploymentSpec("shopDeployment") {
        values {
            deploymentLocation = "/opt/shop"
            executionLocation = "/opt/shop/bin"
        }
    } layout {
        pos = apos(700, 500)
    }
}
`,docs:{text:`UML Deployment Diagram`,link:`/docs/deployment`}},{id:`usecase`,title:`Use case diagram`,description:`Who uses the shop, and what for`,group:`Diagram types`,source:`useCaseDiagram {
    actor("Customer") layout {
        pos = apos(0, 300)
    }

    actor("Warehouse worker") layout {
        pos = apos(0, 700)
    }

    subject("Online Shop") {
        useCase("Browse catalog") layout {
            pos = apos(0, 0)
        }

        useCase("Place order") {
            extensionPoints {
                "Payment declined"
            }
        } layout {
            pos = apos(0, 250)
        }

        useCase("Authenticate") layout {
            pos = apos(500, 120)
        }

        useCase("Offer voucher") layout {
            pos = apos(500, 380)
        }

        useCase("Ship order") layout {
            pos = apos(0, 500)
        }
    } layout {
        pos = apos(400, 60)
    }

    systemActor("Payment Gateway") layout {
        pos = apos(1500, 400)
    }

    Customer -- \`Browse catalog\`

    Customer -- \`Place order\`

    \`Warehouse worker\` -- \`Ship order\`

    \`Place order\` ..> Authenticate with {
        over = start(0.94).line(end(Position.Left))
        label(keyword("include"), 0.5, -38)
    }

    \`Offer voucher\` ..> \`Place order\` with {
        over = start(Position.Left).line(end(0.06))
        label(keyword("extend"), 0.5, -38)
    }

    \`Place order\` -- \`Payment Gateway\`
}
`,docs:{text:`UML Use Case Diagram`,link:`/docs/usecase`}},{id:`uml`,title:`Mixed UML diagram`,description:`A use case, the component realizing it, and what it does`,group:`Diagram types`,source:`umlDiagram {
    component("Shop") {
        public {
            checkout(cart : Cart) : Order
        }
    } layout {
        pos = apos(0, 0)
    }

    Shop.provides("Web", 0.75)

    class("Order") {
        public {
            id : String
            state : OrderState
        }
    } layout {
        pos = apos(-620, 260)
    }

    enum("OrderState") {
        entries {
            NEW
            PAID
        }
    } layout {
        pos = apos(-620, 560)
    }

    instance("order", "Order") {
        values {
            id = "4711"
        }
    } layout {
        pos = apos(-180, 560)
    }

    actor("Customer") layout {
        pos = apos(-300, -100)
    }

    useCase("Place order") layout {
        pos = apos(-300, -320)
    }

    Shop ..> Order with {
        over = start(0.5).axisAligned(-0.5, end(0.75))
    }

    Order --> OrderState with {
        over = start(0.25).line(end(0.75))
        label("+state", 0.5, -12)
    }

    order ..> Order with {
        over = start(0.75).line(end(0.19))
    }

    Customer --> Shop with {
        over = start(0).line(end(0.5))
        label("uses", 0.5, -12)
    }

    Customer -- \`Place order\` with {
        over = start(Position.Top).line(end(Position.Bottom))
    }

    Shop implements \`Place order\` with {
        over = start(Position.TopLeft).line(end(Position.Right))
    }

    start("begin") layout {
        pos = apos(500, 40)
    }
    action("Receive order") layout {
        pos = apos(500, 140)
    }
    decision("Order valid?") layout {
        pos = apos(500, 280)
    }
    action("Reject order") layout {
        pos = apos(840, 280)
    }
    end("rejected") layout {
        pos = apos(840, 450)
    }
    action("Ship order") layout {
        pos = apos(500, 450)
    }
    stop("done") layout {
        pos = apos(500, 590)
    }

    begin --> \`Receive order\` with {
        over = start(0.25).line(end(0.75))
    }
    \`Receive order\` --> \`Order valid?\` with {
        over = start(0.25).line(end(0.75))
    }
    \`Order valid?\` --> \`Ship order\` with {
        over = start(0.25).line(end(0.75))
        label("[yes]", 0.5, -20)
    }
    \`Order valid?\` --> \`Reject order\` with {
        label("[no]", 0.5, -20)
    }
    \`Reject order\` --> rejected with {
        over = start(0.25).line(end(0.75))
    }
    \`Ship order\` --> done with {
        over = start(0.25).line(end(0.75))
    }

    note = comment("The activity is performed by the shop") layout {
        pos = apos(0, 300)
    }
    Shop .. note with {
        over = start(0.25).line(end(0.75))
    }
}
`,docs:{text:`UML Diagram`,link:`/docs/uml`}},{id:`automotive`,title:`Classes in a package`,description:`Class, interface, package and comment in one diagram`,group:`More examples`,source:`classDiagram {
    package("Automotive") {
        class("Car") {
            private {
                weight : Double
            }
            public {
                startEngine() : void
            }
        } layout {
            pos = apos(-42, 96)
        }

        interface("CarPart") {

        } layout {
            pos = rpos(Car, 450, 0)
        }

        class("CarDoor") {
            private {
                color : Color
            }
        } layout {
            pos = rpos(CarPart, 0, 150)
        }

        Car *-- CarPart with {
            over = start(Position.Right).line(end(Position.Left))
            label("1..*", 0.827, 24.1)
            label("+parts", 0.749, -4.7)
        }

        CarDoor implements CarPart with {
            over = start(Position.Top).line(end(Position.Bottom))
        }

        comment("Drives on roads, and sometimes not on roads") layout {
            width = 177.0234375
            pos = apos(33, 243)
        } .. Car with {
            over = start(0.8015633964429145).line(end(0.19))
        }
    } layout {
        pos = apos(-213, -11)
    }
}
`,docs:{text:`UML Class Diagram`,link:`/docs/class`}},{id:`language-server`,title:`The HyLiMo language server`,description:`The class structure behind the editor`,group:`More examples`,source:`classDiagram {
    vdist = 190
    hdist = 450

    class("LanguageServer") layout {
        height = 92.2
        pos = apos(-315.3, -172.5)
    }
    class("DiagramImplementationManager", abstract = true) layout {
        pos = rpos(LanguageServer, 0, vdist * 1.2)
    }

    class("LocalDiagramImplementationManager") layout {
        pos = rpos(DiagramImplementationManager, hdist / -2, vdist)
    }

    class("RemoteDiagramImplementationManager") layout {
        pos = rpos(DiagramImplementationManager, hdist / 2, vdist)
    }

    class("LocalDiagramImplementation") layout {
        pos = rpos(LocalDiagramImplementationManager, 0, vdist)
    }

    class("RemoteDiagramImplementation") layout {
        pos = rpos(RemoteDiagramImplementationManager, 0, vdist)
    }

    class("DiagramImplementation", abstract = true) layout {
        pos = rpos(DiagramImplementationManager, 0, 3 * vdist)
    }

    class("TextDocument") layout {
        pos = rpos(LanguageServer, hdist, 0)
    }

    class("DiagramServerManager") layout {
        pos = rpos(TextDocument, 0, -(vdist))
    }

    class("DiagramServer") layout {
        pos = rpos(DiagramServerManager, hdist, 0)
    }

    class("Diagram") layout {
        pos = rpos(TextDocument, 0, vdist)
    }

    class("DiagramEngine") layout {
        pos = rpos(LanguageServer, -(hdist), vdist / 2)
    }

    class("CompletionEngine") layout {
        pos = rpos(LanguageServer, -(hdist), vdist / -2)
    }

    LanguageServer *--> Diagram with {
        over = start(Position.BottomRight).line(end(Position.Left))
        label("0..*", 0.75, -9.9, 39.1)
    }

    LanguageServer *--> TextDocument with {
        over = start(Position.Right).line(end(Position.Left))
        label("0..*", 0.7, -3.2)
    }

    LanguageServer *--> DiagramImplementationManager with {
        over = start(Position.Bottom).line(end(Position.Top))
        label("1", 0.6, -9.6)
    }

    LocalDiagramImplementationManager extends DiagramImplementationManager with {
        over = start(Position.Top).axisAligned(
            -0.3,
            end(Position.BottomLeft - 0.05)
        )
    }

    RemoteDiagramImplementationManager extends DiagramImplementationManager with {
        over = start(Position.Top).axisAligned(
            -0.3,
            end(Position.BottomRight + 0.05)
        )
    }

    LocalDiagramImplementation extends DiagramImplementation with {
        over = start(Position.Bottom).axisAligned(
            -0.3,
            end(Position.TopLeft + 0.05)
        )
    }

    RemoteDiagramImplementation extends DiagramImplementation with {
        over = start(Position.Bottom).axisAligned(
            -0.3,
            end(Position.TopRight - 0.05)
        )
    }

    DiagramServerManager *--> DiagramServer with {
        over = start(Position.Right).line(end(Position.Left))
        label("0..*", 0.7, -6.3)
    }

    LanguageServer *--> DiagramEngine with {
        over = start(0.375).line(end(0))
        label("1", 0.761, 8.2)
    }

    LanguageServer *--> CompletionEngine with {
        over = start(0.625).line(end(0))
        label("1", 0.8, 5.2)
    }

    LanguageServer *--> DiagramServerManager with {
        over = start(0.875).line(end(Position.Left))
        label("1", 0.882, -5.8)
    }

    DiagramServer !--> Diagram with {
        over = start(Position.Bottom).axisAligned(0, end(Position.Right))
        label("1", 1.0, 19.8)
        label("0..*", 0.363, -23.1)
    }

    LocalDiagramImplementationManager *--> LocalDiagramImplementation with {
        over = start(Position.Bottom).line(end(Position.Top))
        label("{subsets implementations}\\n+implementations", 0.56, -109)
        label("0..*", 0.705, 22.6)
    }

    RemoteDiagramImplementationManager *--> RemoteDiagramImplementation with {
        over = start(Position.Bottom).line(end(Position.Top))
        label("{subsets implementations}\\n+implementations", 0.56, -107.8)
        label("0..*", 0.705, 23.9)
    }

    Diagram -- DiagramImplementation with {
        over = start(0.2).axisAligned(0, end(Position.Right))
        label("1", 0.3, 11.6)
        label("0..1", 0.976, -25.7)
    }

    DiagramImplementationManager *--> DiagramImplementation with {
        over = start(Position.Bottom).line(end(Position.Top))
        label("+implementations", 0.797, -28.3, -90)
        label("0..*", 0.9, 12.3, -90)
    }

    TextDocument <--! Diagram with {
        over = start(Position.Bottom).line(end(Position.Top))
        label("1", 0.16, -10.1)
        label("1", 0.7, -10.1)
    }
}
`,docs:{text:`UML Class Diagram`,link:`/docs/class`}},{id:`packages`,title:`The HyLiMo packages`,description:`A package diagram built from custom elements`,group:`More examples`,source:`classDiagram {
    customPackage = {
        name = it
        package("") {
            element {
                text {
                    span(text = name) styles {
                        fontSize = 15
                        fontWeight = "bold"
                    }
                }
            }
        } layout {
            width = 200
        }
    }

    styles {
        cls("package-canvas") {
            variables.subcanvasMargin = 15
            hAlign = HAlign.Center
        }
        cls("title-wrapper") {
            //visibility = Visibility.Collapse
        }
        cls("package") {
            width = 60
            height = 25
        }
        cls("package-element") {
            vAlign = VAlign.Bottom
            hAlign = HAlign.Center
        }
    }

    vdist = 150

    hdist = 300

    top = 0.1608
    left = [4, 0.5]
    right = [2, 0.5]
    bottom = [3, 0.5]

    chevrotain = customPackage("Chevrotaion") styles {
        class += "foreign"
    }

    vscodeLSP = customPackage("vscode-languageserver") styles {
        class += "foreign"
    } layout {
        pos = rpos(chevrotain, 0, 2 * vdist)
    }

    core = customPackage("core") layout {
        pos = rpos(chevrotain, hdist, 0)
    }

    diagram = customPackage("diagram") layout {
        pos = rpos(core, 0, vdist)
    }

    diagramCommon = customPackage("diagram-common") layout {
        pos = rpos(diagram, hdist, 0)
    }

    _fonts = customPackage("fonts") layout {
        pos = rpos(core, hdist, 0)
    }

    languageServer = customPackage("language-server") layout {
        pos = rpos(diagram, 0, vdist)
    }

    diagramProtocol = customPackage("diagram-protocol") layout {
        pos = rpos(languageServer, hdist, 0)
    }

    diagramUI = customPackage("diagram-ui") layout {
        pos = rpos(diagramProtocol, hdist, 0)
    }

    renderPdf = customPackage("diagram-render-pdf") layout {
        pos = rpos(languageServer, 0, vdist)
    }

    renderSvg = customPackage("diagram-render-svg") layout {
        pos = rpos(renderPdf, hdist, 0)
    }

    sprotty = customPackage("sprotty") layout {
        pos = rpos(diagramUI, hdist, 0)
    } styles {
        class += "foreign"
    }

    pdfkit = customPackage("PDFKit") layout {
        pos = rpos(renderPdf, 0, vdist)
    } styles {
        class += "foreign"
    }

    diagram --> core with {
        over = start(top).line(end(bottom))
    }

    diagram --> diagramCommon with {
        over = start(right).line(end(left))
    }

    diagram --> _fonts with {
        over = start(0.2).axisAligned(-0.51, end(bottom))
    }

    renderSvg --> diagramCommon with {
        over = start(right).axisAligned(
            -1,
            rpos(diagramUI, 137, 0),
            0,
            end(right)
        )
    }

    renderPdf --> renderSvg with {
        over = start(right).line(end(left))
    }

    renderPdf --> diagram with {
        over = start(left).axisAligned(
            1,
            rpos(languageServer, -149, 2),
            0,
            end(left)
        )
    }

    languageServer --> diagram with {
        over = start(top).line(end(bottom))
    }

    languageServer --> diagramProtocol with {
        over = start(right).line(end(left))
    }

    diagramUI --> diagramProtocol with {
        over = start(left).line(end(right))
    }

    diagramUI --> diagramCommon with {
        over = start(top).axisAligned(0, end(right))
    }

    languageServer --> vscodeLSP with {
        over = start(left).line(end(right))
    }

    core --> chevrotain with {
        over = start(left).line(end(right))
    }

    renderPdf --> pdfkit with {
        over = start(bottom).line(end(top))
    }

    diagramUI --> sprotty with {
        over = start(right).line(end(left))
    }

    globe = {
        target = it
        element(
            path(
                path = "m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382 M209,15a195,195 0 1,0 2,0z"
            )
        ) layout {
            pos = rpos(target, 76.80471820620753, -46.57664161215641)
            width = 20
            height = 20
        } styles {
            type("path") {
                stroke = var("primary")
                strokeWidth = 1.5
            }
        }
    }

    globe(diagramUI)
    globe(sprotty)
    styles {
        cls("foreign") {
            any {
                strokeDash = 10
                strokeDashSpace = 5
            }
        }
    }
}
`,docs:{text:`Diagram DSL`,link:`/docs/diagram`}}];function aa(e){let t=X.find(t=>t.id===e);if(t==null)throw Error(`Unknown diagram example: ${e}`);return t}var oa=B({__name:`DiagramExample`,props:{id:{type:String,required:!0}},setup(e){let t=e,n=j(()=>encodeURIComponent(aa(t.id).source));return(e,t)=>(p(),E(ia,{code:n.value},null,8,[`code`]))}}),sa={class:`gallery`},ca={class:`group-title`},la={class:`entries`},ua=[`aria-pressed`,`onClick`],da={class:`entry-title`},fa={class:`entry-description`},pa={class:`caption`},ma=[`href`],ha=F(B({__name:`DiagramGallery`,setup(e){let t=L(X[0].id),n=j(()=>X.find(e=>e.id===t.value)),r=j(()=>encodeURIComponent(n.value.source)),i=j(()=>[...new Set(X.map(e=>e.group))].map(e=>({name:e,examples:X.filter(t=>t.group===e)})));return(e,a)=>(p(),H(`div`,sa,[(p(!0),H(k,null,b(i.value,e=>(p(),H(`div`,{key:e.name,class:`group`},[A(`p`,ca,O(e.name),1),A(`div`,la,[(p(!0),H(k,null,b(e.examples,e=>(p(),H(`button`,{key:e.id,class:P([`entry`,{active:e.id===t.value}]),"aria-pressed":e.id===t.value,onClick:n=>t.value=e.id},[A(`span`,da,O(e.title),1),A(`span`,fa,O(e.description),1)],10,ua))),128))])]))),128)),S(ia,{code:r.value},null,8,[`code`]),A(`p`,pa,[A(`span`,null,O(n.value.title)+` - `+O(n.value.description),1),n.value.docs?(p(),H(`a`,{key:0,href:D(he)(n.value.docs.link)},O(n.value.docs.text),9,ma)):z(``,!0)])]))}}),[[`__scopeId`,`data-v-d685f0b7`]]),ga=[`id`],_a=F(B({__name:`NavTeleportTarget`,props:{targetId:{type:String,required:!0}},setup(e){return(t,n)=>(p(),H(`div`,{id:e.targetId,class:`nav-teleport-target`},null,8,ga))}}),[[`__scopeId`,`data-v-2745cdb1`]]),va=[`title`],ya={class:`screen-menu-label`},ba=F(B({__name:`IconButton`,props:{label:{type:String,required:!0},icon:{type:String,required:!0},screenMenu:{type:Boolean,default:!1},iconColor:{type:String,default:void 0}},setup(e){return(t,n)=>(p(),H(`button`,{type:`button`,class:P([`icon-button`,{"screen-menu":e.screenMenu}]),title:e.screenMenu?void 0:e.label,style:R({"--icon-color":e.iconColor})},[e.screenMenu?(p(),H(k,{key:0},[A(`span`,ya,O(e.label),1),n[0]||=A(`span`,{class:`spacer`},null,-1)],64)):z(``,!0),A(`span`,{class:P([e.icon])},null,2)],14,va))}}),[[`__scopeId`,`data-v-e10acba7`]]),xa={class:`vp-code-group settings-tabs`},Sa={class:`tabs`},Ca=[`id`,`checked`,`onChange`],wa=[`for`,`onClick`],Ta=F(B({__name:`SettingsTabs`,props:y({tabs:{type:Array,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=w(e,`modelValue`);return(n,r)=>(p(),H(`div`,xa,[A(`div`,Sa,[(p(!0),H(k,null,b(e.tabs,e=>(p(),H(k,null,[A(`input`,{type:`radio`,id:`tab-${e.id}`,checked:e.id==t.value,onChange:n=>t.value=e.id},null,40,Ca),A(`label`,{for:`tab-${e.id}`,onClick:n=>t.value=e.id},O(e.name),9,wa)],64))),256))]),U(n.$slots,`default`,{},void 0,!0)]))}}),[[`__scopeId`,`data-v-5c607a0c`]]),Ea=Symbol(`languageClient`),Da=Symbol(`languageServerConfig`),Oa=Symbol(`diagramIdProvider`),ka=F(B({__name:`BaseInput`,props:y({isValid:{type:Boolean,default:!0},defaultValue:{type:String,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=w(e,`modelValue`);function r(){n.value=t.defaultValue}return(t,i)=>(p(),H(k,null,[le(A(`input`,{"onUpdate:modelValue":i[0]||=e=>n.value=e,class:P([`text-field`,{invalid:!e.isValid}])},null,2),[[Ee,n.value]]),S(ba,{icon:`vpi-rotate-cw`,label:`Reset`,class:`reset-button`,onClick:r})],64))}}),[[`__scopeId`,`data-v-0f9bceaf`]]),Aa=B({__name:`NumberInput`,props:y({defaultValue:{type:Number,required:!0}},{modelValue:{type:Number,required:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=w(e,`modelValue`),n=L(!0),r=L(``);return I(t,e=>{Number.parseFloat(r.value)!=e&&(r.value=e?.toString()??``)},{immediate:!0}),I(r,e=>{if(e.trim()===``)n.value=!0,t.value=void 0;else if(n.value=/^(0|[1-9][0-9]*)?(\.[0-9]*)?$/.test(e.trim()),n.value){let n=Number.parseFloat(e);t.value!==n&&(t.value=n)}},{immediate:!0}),(t,i)=>(p(),E(ka,{modelValue:r.value,"onUpdate:modelValue":i[0]||=e=>r.value=e,"is-valid":n.value,"default-value":e.defaultValue.toString()},null,8,[`modelValue`,`is-valid`,`default-value`]))}}),ja={class:`subtitle`},Ma={class:`wrapper`},Na=F(B({__name:`SettingsItem`,props:{subtitle:{type:String,required:!0}},setup(e){return(t,n)=>(p(),H(`div`,null,[A(`p`,ja,O(e.subtitle),1),A(`div`,Ma,[U(t.$slots,`default`,{},void 0,!0)])]))}}),[[`__scopeId`,`data-v-d5d9aa9b`]]),Z=B({__name:`NumberInputItem`,props:y({subtitle:{type:String,required:!0},defaultValue:{type:Number,required:!0}},{modelValue:{type:Number,required:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=w(e,`modelValue`);return(n,r)=>(p(),E(Na,{subtitle:e.subtitle},{default:T(()=>[S(Aa,{modelValue:t.value,"onUpdate:modelValue":r[0]||=e=>t.value=e,"default-value":e.defaultValue},null,8,[`modelValue`,`default-value`])]),_:1},8,[`subtitle`]))}}),Pa={class:`color-input-wrapper`},Fa=F(B({__name:`ColorInput`,props:y({defaultValue:{type:String,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=w(e,`modelValue`),n=L(!0),r=L(``);return I(t,e=>{r.value!==e&&(r.value=e)},{immediate:!0}),I(r,e=>{n.value=/^#[0-9a-fA-F]{6}$/.test(e.trim()),n.value&&(t.value=e.trim())},{immediate:!0}),(i,a)=>(p(),H(`div`,Pa,[A(`div`,{class:`color-picker-wrapper`,style:R({backgroundColor:t.value})},[le(A(`input`,{"onUpdate:modelValue":a[0]||=e=>r.value=e,type:`color`,class:`color-picker`},null,512),[[Ee,r.value]])],4),S(ka,{modelValue:r.value,"onUpdate:modelValue":a[1]||=e=>r.value=e,"is-valid":n.value,"default-value":e.defaultValue},null,8,[`modelValue`,`is-valid`,`default-value`])]))}}),[[`__scopeId`,`data-v-92296929`]]),Ia=B({__name:`ColorInputItem`,props:y({subtitle:{type:String,required:!0},defaultValue:{type:String,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=w(e,`modelValue`);return(n,r)=>(p(),E(Na,{subtitle:e.subtitle},{default:T(()=>[S(Fa,{modelValue:t.value,"onUpdate:modelValue":r[0]||=e=>t.value=e,"default-value":e.defaultValue},null,8,[`modelValue`,`default-value`])]),_:1},8,[`subtitle`]))}}),La=F(B({__name:`BooleanInputItem`,props:y({subtitle:{type:String,required:!0}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=w(e,`modelValue`);return(n,r)=>(p(),E(Na,{subtitle:e.subtitle},{default:T(()=>[S(Xn,{class:P({checked:t.value}),onClick:r[0]||=e=>t.value=!t.value},null,8,[`class`])]),_:1},8,[`subtitle`]))}}),[[`__scopeId`,`data-v-6e25ab24`]]),Q={translationPrecision:1,resizePrecision:1,linePointPosPrecision:.001,linePointDistancePrecision:.1,axisAlignedPosPrecision:.001,rotationPrecision:1},$={lightPrimaryColor:`#000000`,lightBackgroundColor:`#ffffff`,darkPrimaryColor:`#ffffff`,darkBackgroundColor:`#1e1e1e`,enableFontSubsetting:!0,enableExternalFonts:!1},Ra={toolboxEnabled:!0,snappingEnabled:!0,gridEnabled:!0},za={class:`content`},Ba=F(B({__name:`SettingsContent`,setup(e){let t=o(Da),n=t.settings,r=t.diagramConfig,i=t.editorConfig,a=[{name:`Graphical editor`,id:`graphical-editor`},{name:`Theme`,id:`theme`},{name:`Diagram`,id:`diagram`}],s=L(`graphical-editor`);return(e,t)=>(p(),H(k,null,[t[15]||=A(`p`,{class:`title`},`Settings`,-1),S(Ta,{modelValue:s.value,"onUpdate:modelValue":t[14]||=e=>s.value=e,tabs:a,class:`settings-tabs`},{default:T(()=>[A(`div`,za,[s.value==`graphical-editor`?(p(),H(k,{key:0},[S(Z,{subtitle:`Absolute/relative point translation precision`,modelValue:D(n).translationPrecision,"onUpdate:modelValue":t[0]||=e=>D(n).translationPrecision=e,"default-value":D(Q).translationPrecision},null,8,[`modelValue`,`default-value`]),S(Z,{subtitle:`Resize precision`,modelValue:D(n).resizePrecision,"onUpdate:modelValue":t[1]||=e=>D(n).resizePrecision=e,"default-value":D(Q).resizePrecision},null,8,[`modelValue`,`default-value`]),S(Z,{subtitle:`Line point pos precision`,modelValue:D(n).linePointPosPrecision,"onUpdate:modelValue":t[2]||=e=>D(n).linePointPosPrecision=e,"default-value":D(Q).linePointPosPrecision},null,8,[`modelValue`,`default-value`]),S(Z,{subtitle:`Line point distance precision`,modelValue:D(n).linePointDistancePrecision,"onUpdate:modelValue":t[3]||=e=>D(n).linePointDistancePrecision=e,"default-value":D(Q).linePointDistancePrecision},null,8,[`modelValue`,`default-value`]),S(Z,{subtitle:`Axis aligned pos precision`,modelValue:D(n).axisAlignedPosPrecision,"onUpdate:modelValue":t[4]||=e=>D(n).axisAlignedPosPrecision=e,"default-value":D(Q).axisAlignedPosPrecision},null,8,[`modelValue`,`default-value`]),S(Z,{subtitle:`Rotation precision`,modelValue:D(n).rotationPrecision,"onUpdate:modelValue":t[5]||=e=>D(n).rotationPrecision=e,"default-value":D(Q).rotationPrecision},null,8,[`modelValue`,`default-value`]),S(La,{subtitle:`Grid`,modelValue:D(i).gridEnabled,"onUpdate:modelValue":t[6]||=e=>D(i).gridEnabled=e},null,8,[`modelValue`]),S(La,{subtitle:`Snap to elements/points`,modelValue:D(i).snappingEnabled,"onUpdate:modelValue":t[7]||=e=>D(i).snappingEnabled=e},null,8,[`modelValue`])],64)):s.value==`theme`?(p(),H(k,{key:1},[S(Ia,{subtitle:`Light mode primary color`,modelValue:D(r).lightPrimaryColor,"onUpdate:modelValue":t[8]||=e=>D(r).lightPrimaryColor=e,"default-value":D($).lightPrimaryColor},null,8,[`modelValue`,`default-value`]),S(Ia,{subtitle:`Light mode background color`,modelValue:D(r).lightBackgroundColor,"onUpdate:modelValue":t[9]||=e=>D(r).lightBackgroundColor=e,"default-value":D($).lightBackgroundColor},null,8,[`modelValue`,`default-value`]),S(Ia,{subtitle:`Dark mode primary color`,modelValue:D(r).darkPrimaryColor,"onUpdate:modelValue":t[10]||=e=>D(r).darkPrimaryColor=e,"default-value":D($).darkPrimaryColor},null,8,[`modelValue`,`default-value`]),S(Ia,{subtitle:`Dark mode background color`,modelValue:D(r).darkBackgroundColor,"onUpdate:modelValue":t[11]||=e=>D(r).darkBackgroundColor=e,"default-value":D($).darkBackgroundColor},null,8,[`modelValue`,`default-value`])],64)):s.value==`diagram`?(p(),H(k,{key:2},[S(La,{subtitle:`Font subsetting`,modelValue:D(r).enableFontSubsetting,"onUpdate:modelValue":t[12]||=e=>D(r).enableFontSubsetting=e},null,8,[`modelValue`]),S(La,{subtitle:`External fonts`,modelValue:D(r).enableExternalFonts,"onUpdate:modelValue":t[13]||=e=>D(r).enableExternalFonts=e},null,8,[`modelValue`])],64)):z(``,!0)])]),_:1},8,[`modelValue`])],64))}}),[[`__scopeId`,`data-v-574c0955`]]),Va={class:`modal-mask`},Ha=F(B({__name:`Settings`,props:{screenMenu:{type:Boolean,default:!1}},setup(e){let t=L(!1),r=L(null);return ge(r,()=>{t.value=!1}),(i,a)=>{let o=n(`ClientOnly`);return p(),H(k,null,[S(ba,{icon:`vpi-settings`,label:`Settings`,class:P([`settings-button`,{"screen-menu":e.screenMenu}]),"screen-menu":e.screenMenu,onClick:a[0]||=e=>t.value=!0},null,8,[`class`,`screen-menu`]),S(o,null,{default:T(()=>[(p(),E(Ce,{to:`body`},[S(Te,{name:`modal`},{default:T(()=>[le(A(`div`,Va,[A(`div`,{ref_key:`dialog`,ref:r,class:`modal-container`},[S(Ba)],512)],512),[[fe,t.value]])]),_:1})]))]),_:1})],64)}}}),[[`__scopeId`,`data-v-31eb380a`]]);xe();var Ua={key:0,class:`pwa-snackbar`,role:`alertdialog`,"aria-labelledby":`pwa-message`},Wa=F(B({__name:`RegisterSW`,setup(e){let t=L(!1),n=L(100);function r(){t.value=!0,i()}function i(){let e=null;function r(i){e||=i;let a=i-e,o=Math.max(0,100-a/2500*100);o<=0?t.value=!1:(n.value=o,requestAnimationFrame(r))}requestAnimationFrame(r)}return _e(async()=>{let{registerSW:e}=await ue(async()=>{let{registerSW:e}=await import(`./virtual_pwa-register.DdstIz06.js`);return{registerSW:e}},__vite__mapDeps([29,1,2]));e({immediate:!0,onOfflineReady:r,onRegistered(){console.info(`Service Worker registered`)},onRegisterError(e){console.error(`Service Worker registration error!`,e)}})}),(e,r)=>t.value?(p(),H(`div`,Ua,[r[0]||=A(`div`,{id:`pwa-message`,class:`snackbar-message`},`App ready to work offline`,-1),A(`div`,{class:`progress-bar`,style:R({width:n.value+`%`})},null,4)])):z(``,!0)}}),[[`__scopeId`,`data-v-e1d935cb`]]),Ga={install(t){let n=t.runWithContext(()=>ke().isDark);I(n,e=>{Ka(e)}),e(()=>{Ka(n.value)})}};function Ka(e){let t=e?`#1B1B1F`:`#ffffff`,n=document.querySelector(`meta[name=theme-color]`);if(n)n.setAttribute(`content`,t);else{let e=document.createElement(`meta`);e.name=`theme-color`,e.content=t,document.head.appendChild(e)}}var qa=B({__name:`CustomNavBarMenuLink`,props:{item:{type:Object,required:!0},screenMenu:{type:Boolean,default:!1}},setup(e){let t=e,n=j(()=>({...t.item,target:t.item.target??(i.value?`_blank`:void 0)})),r=f(),i=j(()=>r.embedded!=null);return(t,r)=>(p(),H(k,null,[e.screenMenu?(p(),E(Fi,{key:0,item:n.value},null,8,[`item`])):z(``,!0),S(zr,{item:n.value},null,8,[`item`])],64))}});xe();var Ja={extends:ta,async enhanceApp({app:e}){e.component(`EmbeddedHylimoEditor`,ia),e.component(`DiagramExample`,oa),e.component(`DiagramGallery`,ha),e.component(`NavTeleportTarget`,_a),e.component(`CustomNavBarMenuLink`,qa),e.component(`Settings`,Ha);{e.use(Ga);let{lspPlugin:t}=await ue(async()=>{let{lspPlugin:e}=await import(`./lspPlugin.Dw8Ck4Ih.js`).then(e=>e.n);return{lspPlugin:e}},__vite__mapDeps([27,2,1,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,26,6,24,25]));e.use(t)}},Layout(){return c(ta.Layout,null,{"layout-bottom":()=>c(Wa)})}};export{Q as a,Da as c,xr as d,W as f,Ra as i,ba as l,Wa as n,Oa as o,$ as r,Ea as s,Ja as t,Gi as u};