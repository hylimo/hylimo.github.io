const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.8Mw97QAa.js","assets/chunks/framework.Nsm6iT4J.js","assets/chunks/rolldown-runtime.BCiCTKAo.js","assets/chunks/es.um3c9qb5.js","assets/chunks/HylimoEditor.Cp-nKfDl.js","assets/chunks/language.BgMTe69W.js","assets/chunks/FileSaver.min.qesKBDKl.js","assets/chunks/configuration.service.Bk1Pahv4.js","assets/chunks/standaloneServices.BkZk2JcU.js","assets/chunks/workspaceTrust.CFUg0qf9.js","assets/chunks/contextkeys.B1MrETFw.js","assets/chunks/platformObservableUtils.Cq2Yibk0.js","assets/chunks/editorBrowser.DH0RUb9G.js","assets/chunks/languageConfiguration.DeK4Bp1D.js","assets/chunks/tools.CWPycx75.js","assets/chunks/theme.BCS-xB_-.js","assets/chunks/editor.DYV1jZ54.js","assets/chunks/preferences.service.myuKPzYj.js","assets/chunks/monaco-vscode-files-service-override.B08OWD4P.js","assets/chunks/extensions.S-iUbGY8.js","assets/chunks/extensionManagement.service.CdPnyfdz.js","assets/chunks/jsonErrorMessages.DPZOYLBp.js","assets/chunks/monaco-vscode-extensions-service-override.Dfyw6aMv.js","assets/chunks/extensionsRegistry.oVAWgeDL.js","assets/chunks/getIconClasses.DcLHKuJm.js","assets/chunks/textMateTokenizationFeature.service.DTY4OpHy.js","assets/chunks/workbenchThemeService.service.DMxoYa9A.js","assets/chunks/languageStatusService.service.CBgu71iZ.js","assets/chunks/languageService.BhfEN0c0.js","assets/chunks/semanticTokensConfig.a9c3J34T.js","assets/chunks/hostColorSchemeService.service.DHPQtFfK.js","assets/chunks/vscode.C_NI1qav.js","assets/chunks/lspPlugin.DXAPgFza.js"])))=>i.map(i=>d[i]);
import{$ as e,A as t,At as n,B as r,Bt as i,Ct as a,D as o,Dt as s,Et as c,F as l,Ft as u,Gt as d,H as f,I as p,It as m,J as h,Jt as g,Kt as _,L as v,Lt as y,M as ee,Mt as te,N as ne,Nt as b,O as re,Ot as x,Pt as S,Q as C,Qt as w,R as T,Rt as ie,S as ae,St as oe,T as se,Tt as E,Ut as ce,Vt as le,W as ue,Wt as de,X as fe,Xt as pe,Y as me,_ as he,_t as D,at as O,bt as k,ct as A,d as j,dt as ge,en as M,ft as _e,gt as N,h as ve,ht as P,it as F,jt as I,lt as ye,m as be,mt as L,n as xe,nn as Se,nt as R,p as Ce,pt as we,qt as Te,r as z,rn as B,rt as V,st as Ee,t as De,tn as H,tt as U,ut as W,v as Oe,vt as ke,w as Ae,wt as je,xt as Me,yt as Ne,z as Pe,zt as Fe}from"./framework.Nsm6iT4J.js";var G=ae;function Ie(e,t){let n,r=!1;return()=>{n&&clearTimeout(n),r?n=window.setTimeout(e,t):(e(),(r=!0)&&window.setTimeout(()=>r=!1,t))}}function Le(e){return e.startsWith(`/`)?e:`/${e}`}function Re(e,t,n){return n===void 0?!!e&&v(e)||t===`_blank`:n}function ze(e){let{pathname:t,search:n,hash:r,protocol:i}=new URL(e,`http://a.com`);if(v(e)||e.startsWith(`#`)||!i.startsWith(`http`)||!f(t))return e;let{site:a}=G(),o=t.endsWith(`/`)||t.endsWith(`.html`)?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,a.value.cleanUrls?``:`.html`)}${n}${r}`);if(Pe(a.value.base)&&!a.value.cleanUrls){let e=o.replace(/[?#].*$/,``);e.endsWith(`/`)&&(o=e+`index.html`+o.slice(e.length))}return Oe(o)}function Be(e,t){let n=new Set;return e.filter(e=>{let r=t(e);return!n.has(r)&&n.add(r)})}function Ve(e,t){if(Array.isArray(e))return Ge(e);if(e==null)return[];t=Le(t);let n=Object.keys(e).sort((e,t)=>t.split(`/`).length-e.split(`/`).length).find(e=>t.startsWith(Le(e))),r=n?e[n]??[]:[];return Array.isArray(r)?Ge(r):Ge(r.items,r.base)}function He(e){let t=[],n=0;for(let r of e){if(r.items){n=t.push(r);continue}let e=t[n];e||(e={items:[]},t.push(e)),e.items?.push(r)}return t}function Ue(e){let t=[];function n(e){for(let r of e)r.text&&r.link&&t.push({text:r.text,link:r.link,docFooterText:r.docFooterText,rel:r.rel,target:r.target}),r.items&&n(r.items)}return n(e),t}function We(e,t,n,r=!1){return Array.isArray(n)?n.some(n=>We(e,t,n,r)):n.link&&p(e,t,n.link,!1,r)?!0:n.items?We(e,t,n.items,r):!1}function Ge(e,t){return[...e].map(e=>{let n={...e},r=n.base||t;return r&&n.link&&!v(n.link)&&(n.link=r+n.link.replace(/^\//,r.endsWith(`/`)?``:`/`)),n.items&&=Ge(n.items,r),n})}var Ke=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,qe=[];function Je(e){return typeof e.outline==`object`&&!Array.isArray(e.outline)&&e.outline.label||`On this page`}function Ye(e){return Ze([...document.querySelectorAll(`.VPDoc h1, .VPDoc h2, .VPDoc h3, .VPDoc h4, .VPDoc h5, .VPDoc h6`)].filter(e=>e.id&&e.hasChildNodes()).map(e=>{let t=Number(e.tagName[1]);return{element:e,title:Xe(e),link:`#`+e.id,level:t}}),e)}function Xe(e){let t=``;for(let n of e.childNodes)if(n.nodeType===1){if(Ke.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function Ze(e,t){if(t===!1)return[];let n=(typeof t==`object`&&!Array.isArray(t)?t.level:t)||2,[r,i]=typeof n==`number`?[n,n]:n===`deep`?[2,6]:n;return et(e,r,i)}function Qe(e,t){let n=o(`(min-width: 80rem)`),r=Ie(c,100),i=null,a=!1;k(()=>{requestAnimationFrame(c),window.addEventListener(`scroll`,r),e.value?.addEventListener(`click`,s)}),oe(()=>{l(location.hash)}),Me(()=>{window.removeEventListener(`scroll`,r)});function s(e){if(!n.value)return;let t=e.target instanceof Element?e.target.closest(`a`)?.hash:null;t&&(a=!0,l(t))}function c(){if(!n.value)return;if(a){a=!1;return}let e=window.scrollY,t=window.innerHeight,r=document.body.offsetHeight,i=e+t-r>=0,o=qe.map(({element:e,link:t})=>({link:t,top:$e(e),scrollMarginTop:Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0})).filter(({top:e})=>!Number.isNaN(e)).sort((e,t)=>e.top-t.top);if(!o.length||e<1){l(null);return}if(i){l(o.at(-1)?.link??null);return}let s=null;for(let{link:t,top:n,scrollMarginTop:r}of o){if(n>e+r+4)break;s=t}l(s)}function l(n){let r=n==null?null:e.value?.querySelector(`a[href$="${decodeURIComponent(n)}"]`)??null;r!==i&&(i?.classList.remove(`active`),i=r,r?(r.classList.add(`active`),t.value&&(t.value.style.top=r.offsetTop+(r.offsetParent?.offsetTop??0)+(r.offsetHeight-t.value.offsetHeight)/2+`px`,t.value.style.opacity=`1`),r.scrollIntoView({block:`nearest`,behavior:`smooth`})):t.value&&(t.value.style.top=``,t.value.style.opacity=`0`))}}function $e(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function et(e,t,n){qe.length=0;let r=[],i=[];return e.forEach(e=>{let a={...e,children:[]},o=i[i.length-1];for(;o&&o.level>=a.level;)i.pop(),o=i[i.length-1];a.element.classList.contains(`ignore-header`)||o&&`shouldIgnore`in o?i.push({level:a.level,shouldIgnore:!0}):a.level>n||a.level<t||(qe.push({element:a.element,link:a.link}),o?o.children.push(a):r.push(a),i.push(a))}),r}var tt=_(!1);function nt(e){let t;u(()=>{t=tt.value?document.activeElement:void 0}),k(()=>{window.addEventListener(`keyup`,n)}),Me(()=>{window.removeEventListener(`keyup`,n)});function n(n){n.key===`Escape`&&tt.value&&(e(),t?.focus())}}function rt(){function e(){tt.value=!0}function t(){tt.value=!1}function n(){tt.value?t():e()}return{isOpen:tt,open:e,close:t,toggle:n}}function it(e){let t=j(),n=_(!1),r=U(()=>e.value.collapsed!=null),i=U(()=>!!e.value.link),a=_(!1),o=_(!1);function s(r=!1){e.value.link?a.value=p(t.data.relativePath,t.hash,e.value.link,!1,r):a.value=!1,a.value?(o.value=!0,D(()=>n.value=!1)):e.value.items?(o.value=We(t.data.relativePath,t.hash,e.value.items,r),o.value&&D(()=>n.value=!1)):o.value=!1}s(!0),S([e,t],()=>s()),k(()=>s());let c=U(()=>e.value.link?p(t.data.relativePath,t.hash,e.value.link):!1),l=U(()=>!!(e.value.items&&e.value.items.length));u(()=>{n.value=!!(r.value&&e.value.collapsed)});function d(){r.value&&(n.value=!n.value)}return{collapsed:n,collapsible:r,isLink:i,isActiveLink:a,isCurrentLink:c,hasActiveLink:o,hasChildren:l,toggle:d}}var at=g([]),ot=g([]),st=o(`(min-width: 60rem)`);function K(){let{frontmatter:e,theme:t}=G(),n=U(()=>!!(e.value.isHome??e.value.layout===`home`)),r=U(()=>e.value.sidebar!==!1&&ot.value.length>0&&!n.value),i=U(()=>r.value&&st.value),a=U(()=>r.value?He(ot.value):[]),o=U(()=>n.value?!1:e.value.aside==null?t.value.aside!==!1:!!e.value.aside),s=U(()=>o.value?e.value.aside==null?t.value.aside===`left`:e.value.aside===`left`:!1),c=U(()=>at.value.length>0);return{isHome:n,sidebar:Te(ot),sidebarGroups:a,hasSidebar:r,isSidebarEnabled:i,hasAside:o,leftAside:s,headers:Te(at),hasLocalNav:c}}function ct({closeSidebar:e}){let{theme:t,page:n,frontmatter:r}=G();S(()=>[n.value.relativePath,t.value.sidebar],([e,t])=>{let n=t?Ve(t,e):[];JSON.stringify(n)!==JSON.stringify(ot.value)&&(ot.value=n)},{immediate:!0,deep:!0,flush:`sync`}),ve(()=>{at.value=Ye(r.value.outline??t.value.outline)});let i=j();S(()=>i.path,e),S(st,e),nt(e)}var lt=Symbol(`layout-info`),ut={__name:`VPBadge`,props:{text:{type:String,required:!1},type:{type:String,required:!1,default:`tip`}},setup(e){return(t,n)=>(a(),O(`span`,{class:H([`VPBadge`,e.type]),dir:`auto`},[c(t.$slots,`default`,{},()=>[Ee(B(e.text),1)])],2))}},dt={key:0,class:`VPBackdrop`},ft=z({__name:`VPBackdrop`,props:{show:{type:Boolean,required:!0}},setup(e){return(t,n)=>(a(),V(ue,{name:`fade`},{default:y(()=>[e.show?(a(),O(`div`,dt)):F(``,!0)]),_:1}))}},[[`__scopeId`,`data-v-cbc1b13d`]]);function pt({linkToCorrespondingPage:e=!1}={}){let t=G(),n=j(),{site:r,localeIndex:i}=t,a=U(()=>({label:r.value.locales[i.value]?.label,link:r.value.locales[i.value]?.link||(i.value===`root`?`/`:`/${i.value}/`)}));return{currentLang:a,localeLinks:U(()=>Object.entries(r.value.locales).flatMap(([r,i])=>a.value.label===i.label?[]:{text:i.label,link:mt(t,n,{targetLocale:r,targetLocaleLink:i.link||(r===`root`?`/`:`/${r}/`),currentLocaleLink:a.value.link,linkToCorrespondingPage:e}),lang:i.lang,dir:i.dir}))}}function mt(e,t,{targetLocale:n,targetLocaleLink:r,currentLocaleLink:i,linkToCorrespondingPage:a}){let{site:o,theme:s}=e,c=s.value.i18nRouting;return a&&typeof c==`function`?c(e,t,n):ht(r,c!==!1&&a,t.data.relativePath.slice(i.length-1),!o.value.cleanUrls)+t.query+t.hash}function ht(e,t,n,r){return t?e.replace(/\/$/,``)+Le(n.replace(/(^|\/)index\.md$/,`$1`).replace(/\.md$/,r?`.html`:``)):e}var gt={class:`NotFound`},_t={class:`code`},vt={class:`title`},yt={class:`quote`},bt={class:`action`},xt=[`href`,`aria-label`],St=z({__name:`NotFound`,setup(e){let{theme:t}=G(),{currentLang:n}=pt();return(e,r)=>(a(),O(`div`,gt,[R(`p`,_t,B(M(t).notFound?.code??`404`),1),R(`h1`,vt,[R(`bdi`,null,B(M(t).notFound?.title??`PAGE NOT FOUND`),1)]),r[0]||=R(`div`,{class:`divider`},null,-1),R(`blockquote`,yt,[R(`bdi`,null,B(M(t).notFound?.quote??`But if you don't change your direction, and if you keep looking, you may end up where you are heading.`),1)]),R(`div`,bt,[R(`a`,{class:`link`,href:M(Oe)(M(t).notFound?.link??M(n).link),"aria-label":M(t).notFound?.linkLabel??`go to home`},[R(`bdi`,null,B(M(t).notFound?.linkText??`Take me home`),1)],8,xt)])]))}},[[`__scopeId`,`data-v-aaca58ce`]]),Ct={class:`VPDocAsideCarbonAds`},wt={__name:`VPDocAsideCarbonAds`,props:{carbonAds:{type:Object,required:!0}},setup(e){let t=()=>null;return(n,r)=>(a(),O(`div`,Ct,[A(M(t),{"carbon-ads":e.carbonAds},null,8,[`carbon-ads`])]))}},Tt=[`href`,`title`],Et=z({__name:`VPDocOutlineItem`,props:{headers:{type:Array,required:!0},root:{type:Boolean,required:!1}},setup(e){return(t,n)=>{let r=s(`VPDocOutlineItem`,!0);return a(),O(`ul`,{class:H([`VPDocOutlineItem`,e.root?`root`:`nested`])},[(a(!0),O(C,null,E(e.headers,({children:e,link:t,title:n})=>(a(),O(`li`,null,[R(`a`,{class:`outline-link`,href:t,title:n},[R(`bdi`,null,B(n),1)],8,Tt),e?.length?(a(),V(r,{key:0,headers:e},null,8,[`headers`])):F(``,!0)]))),256))],2)}}},[[`__scopeId`,`data-v-e0e8121f`]]),Dt={class:`content`},Ot={"aria-level":`2`,class:`outline-title`,id:`doc-outline-aria-label`,role:`heading`},kt=z({__name:`VPDocAsideOutline`,setup(e){let{theme:t}=G(),n=b(`container`),r=b(`marker`),{headers:i,hasLocalNav:o}=K();return Qe(n,r),(e,s)=>(a(),O(`nav`,{"aria-labelledby":`doc-outline-aria-label`,class:H([`VPDocAsideOutline`,{"has-outline":M(o)}]),ref_key:`container`,ref:n},[R(`div`,Dt,[R(`div`,{class:`outline-marker`,ref_key:`marker`,ref:r},null,512),R(`div`,Ot,B(M(Je)(M(t))),1),A(Et,{headers:M(i),root:!0},null,8,[`headers`])])],2))}},[[`__scopeId`,`data-v-a66a529d`]]),At={class:`VPDocAside`},jt=z({__name:`VPDocAside`,setup(e){let{theme:t}=G();return(e,n)=>(a(),O(`div`,At,[c(e.$slots,`aside-top`,{},void 0,!0),c(e.$slots,`aside-outline-before`,{},void 0,!0),A(kt),c(e.$slots,`aside-outline-after`,{},void 0,!0),n[0]||=R(`div`,{class:`spacer`},null,-1),c(e.$slots,`aside-ads-before`,{},void 0,!0),M(t).carbonAds?(a(),V(wt,{key:0,"carbon-ads":M(t).carbonAds},null,8,[`carbon-ads`])):F(``,!0),c(e.$slots,`aside-ads-after`,{},void 0,!0),c(e.$slots,`aside-bottom`,{},void 0,!0)]))}},[[`__scopeId`,`data-v-117643ad`]]);function Mt(){let{theme:e,page:t}=G();return U(()=>{let{text:n=`Edit this page`,pattern:r=``}=e.value.editLink||{},i;return i=typeof r==`function`?r(t.value):r.replace(/:path/g,t.value.filePath),{url:i,text:n}})}function Nt(){let{theme:e,page:t,frontmatter:n}=G();return U(()=>{let i=Be(Ue(Ve(e.value.sidebar,t.value.relativePath)),e=>r(e.link)),a=i.findIndex(e=>p(t.value.relativePath,``,e.link,!1,!0)),o=e.value.docFooter?.prev===!1&&!n.value.prev||n.value.prev===!1,s=e.value.docFooter?.next===!1&&!n.value.next||n.value.next===!1;return{prev:o?void 0:{text:(typeof n.value.prev==`string`?n.value.prev:typeof n.value.prev==`object`?n.value.prev.text:void 0)??i[a-1]?.docFooterText??i[a-1]?.text,link:(typeof n.value.prev==`object`?n.value.prev.link:void 0)??i[a-1]?.link,target:(typeof n.value.prev==`object`?n.value.prev.target:void 0)??i[a-1]?.target,rel:(typeof n.value.prev==`object`?n.value.prev.rel:void 0)??i[a-1]?.rel},next:s?void 0:{text:(typeof n.value.next==`string`?n.value.next:typeof n.value.next==`object`?n.value.next.text:void 0)??i[a+1]?.docFooterText??i[a+1]?.text,link:(typeof n.value.next==`object`?n.value.next.link:void 0)??i[a+1]?.link,target:(typeof n.value.next==`object`?n.value.next.target:void 0)??i[a+1]?.target,rel:(typeof n.value.next==`object`?n.value.next.rel:void 0)??i[a+1]?.rel}}})}var Pt={class:`VPLastUpdated`},Ft=[`datetime`],It=z({__name:`VPDocFooterLastUpdated`,setup(e){let{theme:t,page:n,lang:r}=G(),{language:i}=re(),o=b(`timeRef`),s=U(()=>new Date(n.value.lastUpdated)),c=U(()=>s.value.toISOString()),l=g(``);return k(()=>{u(()=>{let e=t.value.lastUpdated?.formatOptions?.forceLocale?r.value:i.value;l.value=new Intl.DateTimeFormat(e,t.value.lastUpdated?.formatOptions??{dateStyle:`medium`,timeStyle:`medium`}).format(s.value),e&&r.value!==e?o.value?.setAttribute(`lang`,e):o.value?.removeAttribute(`lang`)})}),(e,n)=>(a(),O(`p`,Pt,[R(`bdi`,null,B(M(t).lastUpdated?.text||`Last updated`)+`:`,1),R(`time`,{ref_key:`timeRef`,ref:o,dir:`auto`,datetime:c.value},B(l.value),9,Ft)]))}},[[`__scopeId`,`data-v-6043a0aa`]]),q=z({__name:`VPLink`,props:{tag:{type:String,required:!1},href:{type:String,required:!1},noIcon:{type:Boolean,required:!1},external:{type:Boolean,required:!1,default:void 0},target:{type:String,required:!1},rel:{type:String,required:!1}},setup(e){let t=e,n=U(()=>t.tag??(t.href?`a`:`span`)),r=U(()=>Re(t.href,t.target,t.external));return(t,i)=>(a(),V(x(n.value),{class:H([`VPLink`,{link:e.href,"vp-external-link-icon":r.value,"no-icon":e.noIcon}]),href:e.href?M(ze)(e.href):void 0,target:e.target??(r.value?`_blank`:void 0),rel:e.rel??(r.value?`noreferrer`:void 0)},{default:y(()=>[c(t.$slots,`default`,{},void 0,!0)]),_:3},8,[`class`,`href`,`target`,`rel`]))}},[[`__scopeId`,`data-v-e389e67b`]]),Lt={key:0,class:`VPDocFooter`},Rt={key:0,class:`edit-info`},zt={key:0,class:`edit-link`},Bt={key:1,class:`last-updated`},Vt={key:1,class:`prev-next`,"aria-labelledby":`doc-footer-aria-label`},Ht={class:`pager`},Ut=[`innerHTML`],Wt={class:`title`},Gt=[`innerHTML`],Kt={class:`pager`},qt=[`innerHTML`],Jt={class:`title`},Yt=[`innerHTML`],Xt=z({__name:`VPDocFooter`,setup(e){let{theme:t,page:n,frontmatter:r}=G(),i=Mt(),o=Nt(),s=U(()=>t.value.editLink&&r.value.editLink!==!1),l=U(()=>n.value.lastUpdated),u=U(()=>s.value||l.value||o.value.prev||o.value.next);return(e,n)=>u.value?(a(),O(`footer`,Lt,[c(e.$slots,`doc-footer-before`,{},void 0,!0),s.value||l.value?(a(),O(`div`,Rt,[s.value?(a(),O(`div`,zt,[A(q,{class:`edit-link-button`,href:M(i).url,"no-icon":!0},{default:y(()=>[n[0]||=R(`span`,{class:`vpi-square-pen edit-link-icon`},null,-1),Ee(` `+B(M(i).text),1)]),_:1},8,[`href`])])):F(``,!0),l.value?(a(),O(`div`,Bt,[A(It)])):F(``,!0)])):F(``,!0),M(o).prev?.link||M(o).next?.link?(a(),O(`nav`,Vt,[n[1]||=R(`span`,{class:`visually-hidden`,id:`doc-footer-aria-label`},`Pager`,-1),R(`div`,Ht,[M(o).prev?.link?(a(),V(q,{key:0,class:`pager-link prev`,href:M(o).prev.link,target:M(o).prev.target,rel:M(o).prev.rel},{default:y(()=>[R(`span`,{class:`desc`,innerHTML:M(t).docFooter?.prev||`Previous page`},null,8,Ut),R(`span`,Wt,[R(`bdi`,{innerHTML:M(o).prev.text},null,8,Gt)])]),_:1},8,[`href`,`target`,`rel`])):F(``,!0)]),R(`div`,Kt,[M(o).next?.link?(a(),V(q,{key:0,class:`pager-link next`,href:M(o).next.link,target:M(o).next.target,rel:M(o).next.rel},{default:y(()=>[R(`span`,{class:`desc`,innerHTML:M(t).docFooter?.next||`Next page`},null,8,qt),R(`span`,Jt,[R(`bdi`,{innerHTML:M(o).next.text},null,8,Yt)])]),_:1},8,[`href`,`target`,`rel`])):F(``,!0)])])):F(``,!0)])):F(``,!0)}},[[`__scopeId`,`data-v-d4be643d`]]),Zt={class:`container`},Qt={class:`aside-container`},$t={class:`aside-content`},en={class:`content`},tn={class:`content-container`},nn={class:`main`},rn=z({__name:`VPDoc`,setup(e){let{theme:t,site:n}=G(),r=j(),{hasSidebar:i,hasAside:o,leftAside:l}=K(),u=U(()=>(Pe(n.value.base)?`/`+r.path.slice(he().length):r.path).replace(/[./]+/g,`_`).replace(/_html$/,``));return(e,n)=>{let r=s(`Content`);return a(),O(`div`,{class:H([`VPDoc`,{"has-sidebar":M(i),"has-aside":M(o)}])},[c(e.$slots,`doc-top`,{},void 0,!0),R(`div`,Zt,[M(o)?(a(),O(`div`,{key:0,class:H([`aside`,{"left-aside":M(l)}])},[n[0]||=R(`div`,{class:`aside-curtain`},null,-1),R(`div`,Qt,[R(`div`,$t,[A(jt,null,{"aside-top":y(()=>[c(e.$slots,`aside-top`,{},void 0,!0)]),"aside-bottom":y(()=>[c(e.$slots,`aside-bottom`,{},void 0,!0)]),"aside-outline-before":y(()=>[c(e.$slots,`aside-outline-before`,{},void 0,!0)]),"aside-outline-after":y(()=>[c(e.$slots,`aside-outline-after`,{},void 0,!0)]),"aside-ads-before":y(()=>[c(e.$slots,`aside-ads-before`,{},void 0,!0)]),"aside-ads-after":y(()=>[c(e.$slots,`aside-ads-after`,{},void 0,!0)]),_:3})])])],2)):F(``,!0),R(`div`,en,[R(`div`,tn,[c(e.$slots,`doc-before`,{},void 0,!0),R(`main`,nn,[A(r,{class:H([`vp-doc`,[u.value,M(t).externalLinkIcon&&`external-link-icon-enabled`]])},null,8,[`class`])]),A(Xt,null,{"doc-footer-before":y(()=>[c(e.$slots,`doc-footer-before`,{},void 0,!0)]),_:3}),c(e.$slots,`doc-after`,{},void 0,!0)])])]),c(e.$slots,`doc-bottom`,{},void 0,!0)],2)}}},[[`__scopeId`,`data-v-7c5b4cbc`]]),an={},on={class:`VPHomeContent vp-doc container`};function sn(e,t){return a(),O(`div`,on,[c(e.$slots,`default`,{},void 0,!0)])}var cn=z(an,[[`render`,sn],[`__scopeId`,`data-v-352af9d5`]]),ln=[`src`,`alt`],un=z(Object.assign({inheritAttrs:!1},{__name:`VPImage`,props:{image:{type:[String,Object],required:!0},alt:{type:String,required:!1}},setup(e){return(t,n)=>{let r=s(`VPImage`,!0);return e.image?(a(),O(C,{key:0},[typeof e.image==`string`||`src`in e.image?(a(),O(`img`,N({key:0,class:`VPImage`},typeof e.image==`string`?t.$attrs:{...e.image,...t.$attrs},{src:M(Oe)(typeof e.image==`string`?e.image:e.image.src),alt:e.alt??(typeof e.image==`string`?``:e.image.alt||``)}),null,16,ln)):(a(),O(C,{key:1},[A(r,N({class:`dark`,image:e.image.dark,alt:e.alt??e.image.alt},t.$attrs),null,16,[`image`,`alt`]),A(r,N({class:`light`,image:e.image.light,alt:e.alt??e.image.alt},t.$attrs),null,16,[`image`,`alt`])],64))],64)):F(``,!0)}}}),[[`__scopeId`,`data-v-ee2305b6`]]),dn={class:`box`},fn={key:0,class:`icon`},pn=[`innerHTML`],mn={class:`title`},hn=[`innerHTML`],gn={key:3,class:`details`},_n=[`innerHTML`],vn={key:4,class:`details`},yn=[`innerHTML`],bn={key:5,class:`link-text`},xn={class:`link-text-value`},Sn=z({__name:`VPFeature`,props:{icon:{type:[String,Object],required:!1},title:{type:String,required:!0},details:{type:String,required:!1},link:{type:String,required:!1},linkText:{type:String,required:!1},rel:{type:String,required:!1},target:{type:String,required:!1}},setup(e){return(t,n)=>(a(),V(q,{class:`VPFeature`,href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?`a`:`div`},{default:y(()=>[R(`article`,dn,[typeof e.icon==`object`&&e.icon.wrap?(a(),O(`div`,fn,[A(un,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,[`image`,`alt`,`height`,`width`])])):typeof e.icon==`object`?(a(),V(un,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,[`image`,`alt`,`height`,`width`])):e.icon?(a(),O(`div`,{key:2,class:`icon`,innerHTML:e.icon},null,8,pn)):F(``,!0),R(`h2`,mn,[R(`bdi`,{innerHTML:e.title},null,8,hn)]),Array.isArray(e.details)?(a(),O(`ul`,gn,[(a(!0),O(C,null,E(e.details,e=>(a(),O(`li`,{key:e},[R(`bdi`,{innerHTML:e},null,8,_n)]))),128))])):e.details?(a(),O(`p`,vn,[R(`bdi`,{innerHTML:e.details},null,8,yn)])):F(``,!0),e.linkText?(a(),O(`div`,bn,[R(`p`,xn,[R(`bdi`,null,B(e.linkText),1),n[0]||=Ee(),n[1]||=R(`span`,{class:`vpi-arrow-right link-text-icon`},null,-1)])])):F(``,!0)])]),_:1},8,[`href`,`rel`,`target`,`tag`]))}},[[`__scopeId`,`data-v-d3488d93`]]),Cn={key:0,class:`VPFeatures`},wn={class:`container`},Tn={class:`items`},En=z({__name:`VPFeatures`,props:{features:{type:Array,required:!0}},setup(e){let t=e,n=U(()=>{let e=t.features.length;if(e){if(e===2)return`grid-2`;if(e===3)return`grid-3`;if(e%3==0)return`grid-6`;if(e>3)return`grid-4`}});return(t,r)=>e.features?(a(),O(`div`,Cn,[R(`div`,wn,[R(`ul`,Tn,[(a(!0),O(C,null,E(e.features,e=>(a(),O(`li`,{key:e.title,class:H([`item`,[n.value]])},[A(Sn,{icon:e.icon,title:e.title,details:e.details,link:e.link,"link-text":e.linkText,rel:e.rel,target:e.target},null,8,[`icon`,`title`,`details`,`link`,`link-text`,`rel`,`target`])],2))),128))])])])):F(``,!0)}},[[`__scopeId`,`data-v-aff0b625`]]),Dn={__name:`VPHomeFeatures`,setup(e){let{frontmatter:t}=G();return(e,n)=>M(t).features?(a(),V(En,{key:0,class:`VPHomeFeatures`,features:M(t).features},null,8,[`features`])):F(``,!0)}},On=z({__name:`VPButton`,props:{tag:{type:String,required:!1},size:{type:String,required:!1,default:`medium`},theme:{type:String,required:!1,default:`brand`},text:{type:String,required:!1},href:{type:String,required:!1},target:{type:String,required:!1},rel:{type:String,required:!1}},setup(e){let t=e,n=U(()=>t.href&&ne.test(t.href)),r=U(()=>t.tag||(t.href?`a`:`button`));return(i,o)=>(a(),V(x(r.value),{class:H([`VPButton no-icon`,[e.size,e.theme]]),href:e.href?M(ze)(e.href):void 0,target:t.target??(n.value?`_blank`:void 0),rel:t.rel??(n.value?`noreferrer`:void 0)},{default:y(()=>[c(i.$slots,`default`,{},()=>[Ee(B(e.text),1)],!0)]),_:3},8,[`class`,`href`,`target`,`rel`]))}},[[`__scopeId`,`data-v-b26d7e87`]]),kn={class:`container`},An={class:`main`},jn={class:`heading`},Mn=[`innerHTML`],Nn=[`innerHTML`],Pn={key:0,class:`tagline`},Fn=[`innerHTML`],In={key:0,class:`actions`},Ln={key:0,class:`image`},Rn={class:`image-container`},zn=z({__name:`VPHero`,props:{name:{type:String,required:!1},text:{type:String,required:!1},tagline:{type:String,required:!1},image:{type:[String,Object],required:!1},actions:{type:Array,required:!1}},setup(e){let{heroImageSlotExists:t}=L(lt,{heroImageSlotExists:U(()=>!1)});return(n,r)=>(a(),O(`div`,{class:H([`VPHero`,{"has-image":e.image||M(t)}])},[R(`div`,kn,[R(`div`,An,[c(n.$slots,`home-hero-info-before`,{},void 0,!0),c(n.$slots,`home-hero-info`,{},()=>[R(`h1`,jn,[e.name?(a(),O(`span`,{key:0,dir:`auto`,innerHTML:e.name,class:`name clip`},null,8,Mn)):F(``,!0),e.text?(a(),O(`span`,{key:1,dir:`auto`,innerHTML:e.text,class:`text`},null,8,Nn)):F(``,!0)]),e.tagline?(a(),O(`p`,Pn,[R(`bdi`,{innerHTML:e.tagline},null,8,Fn)])):F(``,!0)],!0),c(n.$slots,`home-hero-info-after`,{},void 0,!0),e.actions?(a(),O(`div`,In,[c(n.$slots,`home-hero-actions-before-actions`,{},void 0,!0),(a(!0),O(C,null,E(e.actions,e=>(a(),O(`div`,{key:e.link,class:`action`},[A(On,{tag:`a`,size:`medium`,theme:e.theme,text:e.text,href:e.link,target:e.target,rel:e.rel},null,8,[`theme`,`text`,`href`,`target`,`rel`])]))),128))])):F(``,!0),c(n.$slots,`home-hero-actions-after`,{},void 0,!0)]),e.image||M(t)?(a(),O(`div`,Ln,[R(`div`,Rn,[r[0]||=R(`div`,{class:`image-bg`},null,-1),c(n.$slots,`home-hero-image`,{},()=>[e.image?(a(),V(un,{key:0,class:`image-src`,image:e.image},null,8,[`image`])):F(``,!0)],!0)])])):F(``,!0)])],2))}},[[`__scopeId`,`data-v-a8344c8a`]]),Bn={__name:`VPHomeHero`,setup(e){let{frontmatter:t}=G();return(e,n)=>M(t).hero?(a(),V(zn,{key:0,class:`VPHomeHero`,name:M(t).hero.name,text:M(t).hero.text,tagline:M(t).hero.tagline,image:M(t).hero.image,actions:M(t).hero.actions},{"home-hero-info-before":y(()=>[c(e.$slots,`home-hero-info-before`)]),"home-hero-info":y(()=>[c(e.$slots,`home-hero-info`)]),"home-hero-info-after":y(()=>[c(e.$slots,`home-hero-info-after`)]),"home-hero-actions-after":y(()=>[c(e.$slots,`home-hero-actions-after`)]),"home-hero-actions-before-actions":y(()=>[c(e.$slots,`home-hero-actions-before-actions`)]),"home-hero-image":y(()=>[c(e.$slots,`home-hero-image`)]),_:3},8,[`name`,`text`,`tagline`,`image`,`actions`])):F(``,!0)}},Vn=z({__name:`VPHome`,setup(e){let{frontmatter:t,theme:n}=G();return(e,r)=>{let i=s(`Content`);return a(),O(`div`,{class:H([`VPHome`,{"external-link-icon-enabled":M(n).externalLinkIcon}])},[c(e.$slots,`home-hero-before`,{},void 0,!0),A(Bn,null,{"home-hero-info-before":y(()=>[c(e.$slots,`home-hero-info-before`,{},void 0,!0)]),"home-hero-info":y(()=>[c(e.$slots,`home-hero-info`,{},void 0,!0)]),"home-hero-info-after":y(()=>[c(e.$slots,`home-hero-info-after`,{},void 0,!0)]),"home-hero-actions-after":y(()=>[c(e.$slots,`home-hero-actions-after`,{},void 0,!0)]),"home-hero-actions-before-actions":y(()=>[c(e.$slots,`home-hero-actions-before-actions`,{},void 0,!0)]),"home-hero-image":y(()=>[c(e.$slots,`home-hero-image`,{},void 0,!0)]),_:3}),c(e.$slots,`home-hero-after`,{},void 0,!0),c(e.$slots,`home-features-before`,{},void 0,!0),A(Dn),c(e.$slots,`home-features-after`,{},void 0,!0),M(t).markdownStyles===!1?(a(),V(i,{key:1})):(a(),V(cn,{key:0},{default:y(()=>[A(i)]),_:1}))],2)}}},[[`__scopeId`,`data-v-c6199a69`]]),Hn={},Un={class:`VPPage`};function Wn(e,t){let n=s(`Content`);return a(),O(`div`,Un,[c(e.$slots,`page-top`),A(n),c(e.$slots,`page-bottom`)])}var Gn=z(Hn,[[`render`,Wn]]),Kn=z({__name:`VPContent`,setup(e){let{page:t,frontmatter:n}=G(),{isHome:r,hasSidebar:i}=K();function o(e){return typeof x(e)!=`string`}return(e,s)=>(a(),O(`div`,{class:H([`VPContent`,{"has-sidebar":M(i),"is-home":M(r)}]),id:`VPContent`},[M(t).isNotFound?c(e.$slots,`not-found`,{},()=>[A(St)],!0,0):M(n).layout===`page`&&!o(`page`)?(a(),V(Gn,{key:1},{"page-top":y(()=>[c(e.$slots,`page-top`,{},void 0,!0)]),"page-bottom":y(()=>[c(e.$slots,`page-bottom`,{},void 0,!0)]),_:3})):M(n).layout===`home`&&!o(`home`)?(a(),V(Vn,{key:2},{"home-hero-before":y(()=>[c(e.$slots,`home-hero-before`,{},void 0,!0)]),"home-hero-info-before":y(()=>[c(e.$slots,`home-hero-info-before`,{},void 0,!0)]),"home-hero-info":y(()=>[c(e.$slots,`home-hero-info`,{},void 0,!0)]),"home-hero-info-after":y(()=>[c(e.$slots,`home-hero-info-after`,{},void 0,!0)]),"home-hero-actions-after":y(()=>[c(e.$slots,`home-hero-actions-after`,{},void 0,!0)]),"home-hero-actions-before-actions":y(()=>[c(e.$slots,`home-hero-actions-before-actions`,{},void 0,!0)]),"home-hero-image":y(()=>[c(e.$slots,`home-hero-image`,{},void 0,!0)]),"home-hero-after":y(()=>[c(e.$slots,`home-hero-after`,{},void 0,!0)]),"home-features-before":y(()=>[c(e.$slots,`home-features-before`,{},void 0,!0)]),"home-features-after":y(()=>[c(e.$slots,`home-features-after`,{},void 0,!0)]),_:3})):(!M(n).layout||M(n).layout===`doc`)&&!o(`doc`)?(a(),V(rn,{key:3},{"doc-top":y(()=>[c(e.$slots,`doc-top`,{},void 0,!0)]),"doc-bottom":y(()=>[c(e.$slots,`doc-bottom`,{},void 0,!0)]),"doc-footer-before":y(()=>[c(e.$slots,`doc-footer-before`,{},void 0,!0)]),"doc-before":y(()=>[c(e.$slots,`doc-before`,{},void 0,!0)]),"doc-after":y(()=>[c(e.$slots,`doc-after`,{},void 0,!0)]),"aside-top":y(()=>[c(e.$slots,`aside-top`,{},void 0,!0)]),"aside-outline-before":y(()=>[c(e.$slots,`aside-outline-before`,{},void 0,!0)]),"aside-outline-after":y(()=>[c(e.$slots,`aside-outline-after`,{},void 0,!0)]),"aside-ads-before":y(()=>[c(e.$slots,`aside-ads-before`,{},void 0,!0)]),"aside-ads-after":y(()=>[c(e.$slots,`aside-ads-after`,{},void 0,!0)]),"aside-bottom":y(()=>[c(e.$slots,`aside-bottom`,{},void 0,!0)]),_:3})):(a(),V(x(M(n).layout||`doc`),{key:4}))],2))}},[[`__scopeId`,`data-v-9995aa1a`]]),qn={class:`container`},Jn={key:0,class:`message`},Yn=[`innerHTML`],Xn={key:1,class:`copyright`},Zn=[`innerHTML`],Qn=z({__name:`VPFooter`,setup(e){let{theme:t,frontmatter:n}=G(),{hasSidebar:r}=K();return(e,i)=>M(t).footer&&M(n).footer!==!1?(a(),O(`footer`,{key:0,class:H([`VPFooter`,{"has-sidebar":M(r)}])},[R(`div`,qn,[M(t).footer.message?(a(),O(`p`,Jn,[R(`bdi`,{innerHTML:M(t).footer.message},null,8,Yn)])):F(``,!0),M(t).footer.copyright?(a(),O(`p`,Xn,[R(`bdi`,{innerHTML:M(t).footer.copyright},null,8,Zn)])):F(``,!0)])],2)):F(``,!0)}},[[`__scopeId`,`data-v-f871aebe`]]),$n=l&&(/iP(?:ad|hone|od)/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1),er=new Set([` `,`PageUp`,`PageDown`,`Home`,`End`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`]),J={capture:!0,passive:!1};function tr(e){let t=e instanceof Element?e:null;for(;t&&t!==document.body;){let{overflowX:e,overflowY:n}=getComputedStyle(t);if((n===`auto`||n===`scroll`)&&t.scrollHeight>t.clientHeight||(e===`auto`||e===`scroll`)&&t.scrollWidth>t.clientWidth)return!0;t=t.parentElement}return!1}function Y(e){`touches`in e&&e.touches.length>1||tr(e.target)||e.preventDefault()}function nr(e){if(e.metaKey||e.ctrlKey||e.altKey||!er.has(e.key))return;let t=e.target;t instanceof HTMLElement&&(t.isContentEditable||t.matches(`input, textarea, select`))||Y(e)}var rr=0,ir=0,ar,or;function sr(e){if(++rr>1)return;let t=document.documentElement;e&&!getComputedStyle(t).scrollbarGutter.includes(`stable`)&&(or=t.style.scrollbarGutter,t.style.scrollbarGutter=`stable`),ar=document.body.style.overflow,document.body.style.overflow=`hidden`,$n&&document.addEventListener(`touchmove`,Y,J)}function cr(){--rr>0||($n&&document.removeEventListener(`touchmove`,Y,J),document.body.style.overflow=ar??``,or!==void 0&&(document.documentElement.style.scrollbarGutter=or),ar=or=void 0)}function lr(){++ir>1||(document.addEventListener(`wheel`,Y,J),document.addEventListener(`touchmove`,Y,J),document.addEventListener(`keydown`,nr,J))}function ur(){--ir>0||(document.removeEventListener(`wheel`,Y,J),document.removeEventListener(`touchmove`,Y,J),document.removeEventListener(`keydown`,nr,J))}function dr(){let e=g(!1),t=!1;function n(){if(e.value)return;let n=window.innerWidth>document.documentElement.clientWidth;t=n&&!CSS.supports(`scrollbar-gutter`,`stable`),t?lr():sr(n),e.value=!0}function r(){e.value&&=(t?ur():cr(),!1)}return ce(r),U({get:()=>e.value,set:e=>e?n():r()})}var fr=[`aria-expanded`,`aria-controls`],pr={class:`menu-text`},mr=[`id`],hr={class:`header`},gr={class:`outline`},_r=z({__name:`VPLocalNavOutlineDropdown`,props:{headers:{type:Array,required:!0},navHeight:{type:Number,required:!0}},setup(e){let t=e,{theme:r}=G(),i=_(!1),o=_(0),s=b(`main`),c=b(`items`),l=n(),u=dr();function d(e){s.value?.contains(e.target)||(i.value=!1)}S(i,e=>{u.value=e,e?document.addEventListener(`click`,d):document.removeEventListener(`click`,d)}),Ae(`Escape`,()=>{i.value=!1}),ve(()=>{i.value=!1});function f(){i.value=!i.value,o.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function p(e){e.target.classList.contains(`outline-link`)&&(c.value&&(c.value.style.transition=`none`),D(()=>{i.value=!1}))}function m(){i.value=!1,window.scrollTo({top:0,left:0,behavior:`smooth`})}return(t,n)=>(a(),O(`div`,{ref_key:`main`,ref:s,class:`VPLocalNavOutlineDropdown`,style:Se({"--vp-vh":o.value+`px`}),"data-allow-mismatch":`style`},[e.headers.length>0?(a(),O(`button`,{key:0,type:`button`,"aria-expanded":i.value,"aria-controls":M(l),class:H({open:i.value}),onClick:f},[R(`span`,pr,B(M(Je)(M(r))),1),n[0]||=R(`span`,{class:`vpi-chevron-right icon`,"aria-hidden":`true`},null,-1)],10,fr)):(a(),O(`button`,{key:1,type:`button`,onClick:m},B(M(r).returnToTopLabel||`Return to top`),1)),A(ue,{name:`flyout`},{default:y(()=>[i.value?(a(),O(`div`,{key:0,ref_key:`items`,ref:c,id:M(l),class:`items`,onClick:p},[R(`div`,hr,[R(`a`,{class:`top-link`,href:`#`,onClick:m},B(M(r).returnToTopLabel||`Return to top`),1)]),R(`div`,gr,[A(Et,{headers:e.headers},null,8,[`headers`])])],8,mr)):F(``,!0)]),_:1})],4))}},[[`__scopeId`,`data-v-b8450a51`]]),vr={class:`container`},yr=[`aria-expanded`],br={class:`menu-text`},xr=z({__name:`VPLocalNav`,props:{open:{type:Boolean,required:!0}},emits:[`open-menu`],setup(e){let{theme:n}=G(),{isHome:r,hasSidebar:i,headers:o,hasLocalNav:s}=K(),{y:c}=t(),l=_(0);k(()=>{let e=document.createElement(`div`);e.style.cssText=`position: absolute; visibility: hidden; height: var(--vp-nav-height)`,document.body.appendChild(e),l.value=e.offsetHeight,e.remove()});let u=U(()=>c.value>=l.value);return(t,c)=>!M(r)&&(M(s)||M(i)||u.value)?(a(),O(`div`,{key:0,class:H([`VPLocalNav`,{"has-sidebar":M(i),empty:!M(s),fixed:!M(s)&&!M(i)}])},[R(`div`,vr,[M(i)?(a(),O(`button`,{key:0,type:`button`,class:`menu`,"aria-expanded":e.open,"aria-controls":`VPSidebarNav`,onClick:c[0]||=e=>t.$emit(`open-menu`)},[c[1]||=R(`span`,{class:`vpi-text-align-start menu-icon`,"aria-hidden":`true`},null,-1),R(`span`,br,B(M(n).sidebarMenuLabel||`Menu`),1)],8,yr)):F(``,!0),A(_r,{headers:M(o),navHeight:l.value},null,8,[`headers`,`navHeight`])])],2)):F(``,!0)}},[[`__scopeId`,`data-v-62839282`]]),Sr=_(!1),Cr=g(null);function wr(){Sr.value=!0}function Tr(){Sr.value=!1}function Er(){Sr.value?Tr():wr()}var Dr=!1;function Or(){if(l&&!Dr){Dr=!0;let e=o(`(min-width: 48rem)`);ee(e,Tr);let t=j();S(()=>t.path,Tr)}return{isScreenOpen:Sr,screenTriggerEl:Cr,openScreen:wr,closeScreen:Tr,toggleScreen:Er}}function kr(){let{site:e}=G();return U(()=>!!e.value.appearance&&e.value.appearance!==`force-dark`&&e.value.appearance!==`force-auto`)}function Ar(e){let t=j(),n=U(()=>{let{link:n}=w(e);return typeof n==`function`?n(t.data):n});return{href:n,isActiveLink:U(()=>{let{activeMatch:r}=w(e);return p(t.data.relativePath,t.hash,r||n.value,!!r)}),isCurrentLink:U(()=>p(t.data.relativePath,t.hash,n.value))}}var jr=Symbol(`nav`),Mr=Symbol(`nav-screen`),Nr=[`translations`,`appearance`,`socialLinks`],Pr={visibleItemCount:1/0,translations:!0,appearance:!0,socialLinks:!0};function Fr(e){let{itemWidths:t,available:n,extraWidth:r}=e,i=t.reduce((e,t)=>e+t,0);if(i+((e.translations??0)+(e.appearance??0)+(e.socialLinks??0))<=n)return Pr;let a=n-r;if(i>a){let n=0,r=0;for(let e of t){if(n+e>a)break;n+=e,r++}return{visibleItemCount:r,translations:e.translations==null,appearance:e.appearance==null,socialLinks:e.socialLinks==null}}let o={...Pr},s=i,c=!1;for(let t of Nr){let n=e[t];n!=null&&(c||s+n>a?(c=!0,o[t]=!1):s+=n)}return o}var Ir=24,Lr=48,Rr=Symbol(`nav-overflow`);function zr(){return L(Rr,null)}function Br(e){let t=de({...Pr}),n=new Map,r=new Map,i=null,a=null,s=null,c=Lr,u=null,d=new Set,f=!1;function p(e){l&&e instanceof Element&&!d.has(e)&&(d.add(e),(u??=new ResizeObserver(m)).observe(e))}function m(){l&&!f&&(f=!0,requestAnimationFrame(()=>{f=!1,v()}))}let h={state:t,hasCollapsed:()=>t.visibleItemCount!==1/0||!t.translations||!t.appearance||!t.socialLinks,setContainerEl(e){i=e,p(e),m()},setMenuEl(e){a=e,p(e),m()},setExtraEl(e){s=e,p(e),m()},setItemEl(e,t){t?n.set(e,t):n.delete(e),p(t),m()},setClusterEl(e,t){t?r.set(e,t):r.delete(e),p(t),m()}};if(je(Rr,h),!l)return h;let g=o(`(min-width: 48rem)`);function _(e){return Math.max(e.offsetWidth,e.scrollWidth)}function v(){if(!g.value)return y(Pr);if(!i)return;s&&s.offsetWidth>0&&(c=s.offsetWidth);let e=0;for(let t of Array.from(i.children)){if(!(t instanceof HTMLElement)||t===a||t===s)continue;let n=!1;for(let e of r.values())if(e===t){n=!0;break}n||(e+=t.offsetWidth)}let t=[];for(let e=0;e<n.size;e++){let r=n.get(e);if(!r)return;t.push(_(r))}let o=e=>{let t=r.get(e);return t?_(t):null};y(Fr({itemWidths:t,translations:o(`translations`),appearance:o(`appearance`),socialLinks:o(`socialLinks`),available:i.clientWidth-e-Ir,extraWidth:c}))}function y(e){t.visibleItemCount!==e.visibleItemCount&&(t.visibleItemCount=e.visibleItemCount);for(let n of Nr)t[n]!==e[n]&&(t[n]=e[n])}return S(g,m),S(()=>w(e.itemsKey),m),document.fonts?.ready&&document.fonts.ready.then(m).catch(()=>{}),ce(()=>{u?.disconnect(),u=null,d.clear()}),h}var Vr={},Hr={class:`VPSwitch`,type:`button`,role:`switch`},Ur={class:`check`},Wr={key:0,class:`icon`};function Gr(e,t){return a(),O(`button`,Hr,[R(`span`,Ur,[e.$slots.default?(a(),O(`span`,Wr,[c(e.$slots,`default`,{},void 0,!0)])):F(``,!0)])])}var Kr=z(Vr,[[`render`,Gr],[`__scopeId`,`data-v-05c53074`]]),qr=z({__name:`VPSwitchAppearance`,setup(e){let{isDark:t,theme:n}=G(),r=L(`toggle-appearance`,()=>{t.value=!t.value}),i=_(``);return m(()=>{i.value=t.value?n.value.lightModeSwitchTitle||`Switch to light theme`:n.value.darkModeSwitchTitle||`Switch to dark theme`}),(e,o)=>(a(),V(Kr,{title:i.value,class:`VPSwitchAppearance`,"aria-label":M(n).darkModeSwitchLabel||`Appearance`,"aria-checked":M(t),onClick:M(r)},{default:y(()=>[...o[0]||=[R(`span`,{class:`vpi-sun sun`,"aria-hidden":`true`},null,-1),R(`span`,{class:`vpi-moon moon`,"aria-hidden":`true`},null,-1)]]),_:1},8,[`title`,`aria-label`,`aria-checked`,`onClick`]))}},[[`__scopeId`,`data-v-b1dd21f5`]]),Jr=[`id`],Yr=z({__name:`VPNavAppearance`,props:{row:{type:Boolean,required:!1},screen:{type:Boolean,required:!1}},setup(e){let t=e,{theme:r}=G(),i=kr(),o=t.row?null:zr(),s=U(()=>!!o&&!o.state.appearance),c=n();return(t,n)=>M(i)?(a(),O(`div`,{key:0,class:H([`VPNavAppearance`,[e.row?e.screen?`VPNavScreenAppearance`:`menu-appearance`:`VPNavBarAppearance`,{collapsed:s.value}]]),ref:e=>M(o)?.setClusterEl(`appearance`,e)},[e.row?(a(),O(`p`,{key:0,id:M(c),class:`text`},B(M(r).darkModeSwitchLabel||`Appearance`),9,Jr)):F(``,!0),A(qr,{"aria-labelledby":e.row?M(c):void 0},null,8,[`aria-labelledby`])],2)):F(``,!0)}},[[`__scopeId`,`data-v-4226adf4`]]),Xr=_(),Zr=!1,Qr=0;function $r(e){let t=_(!1);if(l){!Zr&&ei(),Qr++;let n=S(Xr,n=>{n===e.el.value||e.el.value?.contains(n)?(t.value=!0,e.onFocus?.()):(t.value=!1,e.onBlur?.())});Me(()=>{n(),Qr--,Qr||ti()})}return d(t)}function ei(){document.addEventListener(`focusin`,ni),Zr=!0,Xr.value=document.activeElement}function ti(){document.removeEventListener(`focusin`,ni),Zr=!1}function ni(){Xr.value=document.activeElement}var ri={class:`VPMenuLink`},ii=[`innerHTML`],ai=z(Object.assign({inheritAttrs:!1},{__name:`VPMenuLink`,props:{item:{type:null,required:!0},rel:{type:String,required:!1}},setup(e){let t=e,{href:n,isActiveLink:r,isCurrentLink:i}=Ar(()=>t.item),o=L(Mr,!1),s=L(jr,null);function c(){o&&s?.closeScreen()}return(s,l)=>(a(),O(`li`,ri,[A(q,N(s.$attrs,{class:{active:M(r),VPNavScreenMenuGroupLink:M(o)},"aria-current":M(i)?`page`:void 0,href:M(n),target:e.item.target,rel:t.rel??e.item.rel,"no-icon":e.item.noIcon,onClick:c}),{default:y(()=>[R(`span`,{dir:`auto`,innerHTML:e.item.text},null,8,ii)]),_:1},16,[`class`,`aria-current`,`href`,`target`,`rel`,`no-icon`])]))}}),[[`__scopeId`,`data-v-04e469d3`]]),oi={key:0,class:`title`},si=z({__name:`VPMenuGroup`,props:{text:{type:String,required:!1},items:{type:Array,required:!0}},setup(e){let t=e,n=L(Mr,!1),r=U(()=>t.items.some(e=>!(`link`in e)&&!(`component`in e)));return(t,i)=>{let o=s(`VPMenuGroup`,!0);return a(),O(`li`,{class:H([`VPMenuGroup`,{VPNavScreenMenuGroupSection:M(n)}])},[e.text?(a(),O(`p`,oi,B(e.text),1)):F(``,!0),R(`ul`,{class:H({"sub-groups":r.value})},[(a(!0),O(C,null,E(e.items,e=>(a(),O(C,{key:JSON.stringify(e)},[`link`in e?(a(),V(ai,{key:0,item:e},null,8,[`item`])):`component`in e?(a(),V(x(e.component),N({key:1,ref_for:!0},e.props,{"screen-menu":M(n)||void 0,menu:!M(n)||void 0}),null,16,[`screen-menu`,`menu`])):(a(),V(o,{key:2,text:e.text,items:e.items},null,8,[`text`,`items`]))],64))),128))],2)],2)}}},[[`__scopeId`,`data-v-6e3b89b3`]]),ci={class:`VPMenu`},li={key:0,class:`items`},ui=z({__name:`VPMenu`,props:{items:{type:Array,required:!1}},setup(e){return(t,n)=>(a(),O(`div`,ci,[e.items?(a(),O(`ul`,li,[(a(!0),O(C,null,E(e.items,e=>(a(),O(C,{key:JSON.stringify(e)},[`link`in e?(a(),V(ai,{key:0,item:e},null,8,[`item`])):`component`in e?(a(),V(x(e.component),N({key:1,ref_for:!0},e.props,{menu:``}),null,16)):(a(),V(si,{key:2,text:e.text,items:e.items},null,8,[`text`,`items`]))],64))),128))])):F(``,!0),c(t.$slots,`default`,{},void 0,!0)]))}},[[`__scopeId`,`data-v-a835e0c5`]]),di=[`aria-expanded`,`aria-controls`,`aria-label`],fi={key:0,class:`text`},pi=[`innerHTML`],mi={key:1,class:`vpi-ellipsis icon`,"aria-hidden":`true`},hi=[`id`],gi=z({__name:`VPFlyout`,props:{icon:{type:String,required:!1},button:{type:String,required:!1},label:{type:String,required:!1},items:{type:Array,required:!1}},setup(e){let t=_(!1),r=b(`el`),i=b(`buttonEl`),o=b(`menuEl`),s=n();$r({el:r,onBlur:m});let l=j();S(()=>l.path,m);let u=!1;function d(e){e.pointerType===`mouse`&&(t.value||(t.value=!0,u=!0))}function f(e){if(e.pointerType!==`mouse`)return;let t=e.relatedTarget;t&&(i.value?.contains(t)||o.value?.contains(t))||m()}function p(){t.value&&u?u=!1:(u=!1,t.value=!t.value)}function m(){t.value=!1,u=!1}return Ae(`Escape`,()=>{if(!t.value)return;let e=r.value?.contains(document.activeElement);m(),e&&r.value?.querySelector(`button`)?.focus()}),se(`pointerdown`,e=>{t.value&&r.value&&!r.value.contains(e.target)&&m()}),(n,l)=>(a(),O(`div`,{class:`VPFlyout`,ref_key:`el`,ref:r},[R(`button`,{ref_key:`buttonEl`,ref:i,type:`button`,class:`button`,"aria-expanded":t.value,"aria-controls":M(s),"aria-label":e.label,onPointerenter:d,onPointerleave:f,onClick:p},[e.button||e.icon?(a(),O(`span`,fi,[e.icon?(a(),O(`span`,{key:0,class:H([e.icon,`option-icon`]),"aria-hidden":`true`},null,2)):F(``,!0),e.button?(a(),O(`span`,{key:1,dir:`auto`,innerHTML:e.button},null,8,pi)):F(``,!0),l[0]||=R(`span`,{class:`vpi-chevron-down text-icon`,"aria-hidden":`true`},null,-1)])):(a(),O(`span`,mi))],40,di),R(`div`,{ref_key:`menuEl`,ref:o,class:`menu`,id:M(s),onPointerleave:f},[A(ui,{items:e.items},{default:y(()=>[c(n.$slots,`default`,{},void 0,!0)]),_:3},8,[`items`])],40,hi)],512))}},[[`__scopeId`,`data-v-984cdb41`]]),_i=[`aria-expanded`,`aria-controls`],vi=[`id`],yi={key:1,class:`VPNavTranslations group translations`},bi={class:`title`},xi={class:`title`},Si={class:`items`},Ci=z({__name:`VPNavTranslations`,props:{screen:{type:Boolean,required:!1},menu:{type:Boolean,required:!1}},setup(e){let t=e,{theme:r}=G(),{localeLinks:i,currentLang:o}=pt({linkToCorrespondingPage:!0}),s=U(()=>!!(i.value.length&&o.value.label)),c=t.screen||t.menu?null:zr(),l=U(()=>!!c&&!c.state.translations),u=_(!1),d=n();function f(){u.value=!u.value}let p=e=>({lang:e.lang,hreflang:e.lang,rel:`alternate`,dir:e.dir,"data-allow-mismatch":`attribute`});return(t,n)=>e.screen&&s.value?(a(),O(`div`,{key:0,class:H([`VPNavTranslations VPNavScreenTranslations`,{open:u.value}])},[R(`button`,{type:`button`,class:`title`,"aria-expanded":u.value,"aria-controls":M(d),onClick:f},[n[0]||=R(`span`,{class:`vpi-languages icon lang`,"aria-hidden":`true`},null,-1),Ee(` `+B(M(o).label)+` `,1),n[1]||=R(`span`,{class:`vpi-chevron-down icon chevron`,"aria-hidden":`true`},null,-1)],8,_i),ie(R(`ul`,{id:M(d),class:`list`},[(a(!0),O(C,null,E(M(i),e=>(a(),O(`li`,{key:e.link,class:`item`},[A(q,N({class:`link`,href:e.link,external:!1},{ref_for:!0},p(e)),{default:y(()=>[Ee(B(e.text),1)]),_:2},1040,[`href`])]))),128))],8,vi),[[me,u.value]])],2)):e.menu&&s.value?(a(),O(`div`,yi,[R(`p`,bi,B(M(o).label),1),R(`ul`,null,[(a(!0),O(C,null,E(M(i),e=>(a(),V(ai,N({key:e.link,item:e,external:!1},{ref_for:!0},p(e)),null,16,[`item`]))),128))])])):!e.menu&&s.value?(a(),V(gi,{key:2,class:H([`VPNavTranslations VPNavBarTranslations`,{collapsed:l.value}]),icon:`vpi-languages`,label:M(r).langMenuLabel||`Change language`,ref:e=>M(c)?.setClusterEl(`translations`,e?.$el??null)},{default:y(()=>[R(`p`,xi,B(M(o).label),1),R(`ul`,Si,[(a(!0),O(C,null,E(M(i),e=>(a(),V(ai,N({key:e.link,item:e,external:!1},{ref_for:!0},p(e)),null,16,[`item`]))),128))])]),_:1},8,[`class`,`label`])):F(``,!0)}},[[`__scopeId`,`data-v-4e40c20b`]]),wi=[`innerHTML`],Ti=z({__name:`VPIcon`,props:{icon:{type:[String,Object],required:!0}},setup(e){let t=e,n=b(`el`),r=Ce(()=>t.icon,n);return(t,i)=>typeof e.icon==`object`?(a(),O(`span`,{key:0,class:`VPIcon`,innerHTML:e.icon.svg},null,8,wi)):(a(),O(`span`,{key:1,ref_key:`el`,ref:n,class:H(M(r))},null,2))}},[[`__scopeId`,`data-v-ac9da605`]]),Ei=[`href`,`aria-label`,`target`,`rel`],Di=z({__name:`VPSocialLink`,props:{icon:{type:[String,Object],required:!0},link:{type:String,required:!0},ariaLabel:{type:String,required:!1},target:{type:String,required:!1},me:{type:Boolean,required:!0}},setup(e){let t=e,n=U(()=>typeof t.icon==`string`&&!t.icon.includes(`:`)?`simple-icons:${t.icon}`:t.icon);return(t,r)=>(a(),O(`a`,{class:`VPSocialLink no-icon`,href:e.link,"aria-label":e.ariaLabel??(typeof e.icon==`string`?e.icon:``),target:e.target??(M(v)(e.link)?`_blank`:void 0),rel:e.me?`me noopener`:`noopener`},[A(Ti,{icon:n.value},null,8,[`icon`])],8,Ei))}},[[`__scopeId`,`data-v-75f3ae3a`]]),Oi={class:`VPSocialLinks`},ki=z({__name:`VPSocialLinks`,props:{links:{type:Array,required:!0},me:{type:Boolean,required:!1,default:!0}},setup(e){return(t,n)=>(a(),O(`ul`,Oi,[(a(!0),O(C,null,E(e.links,({link:t,icon:n,ariaLabel:r,target:i})=>(a(),O(`li`,{key:t},[A(Di,{icon:n,link:t,ariaLabel:r,target:i,me:e.me},null,8,[`icon`,`link`,`ariaLabel`,`target`,`me`])]))),128))]))}},[[`__scopeId`,`data-v-bf5b9ad4`]]),Ai={key:0,class:`group overflow-items`},ji={key:2,class:`group`},Mi={key:3,class:`group`},Ni={class:`item social-links`},Pi=z({__name:`VPNavBarExtra`,setup(e){let{theme:t}=G(),{localeLinks:n,currentLang:r}=pt({linkToCorrespondingPage:!0}),i=kr(),o=zr(),s=U(()=>{let e=o?.state.visibleItemCount??1/0;return e===1/0||!t.value.nav?[]:t.value.nav.slice(e)}),c=U(()=>!!(n.value.length&&r.value.label)&&!(o?.state.translations??!0)),l=U(()=>i.value&&!(o?.state.appearance??!0)),u=U(()=>!!t.value.socialLinks&&!(o?.state.socialLinks??!0)),d=U(()=>s.value.length>0||c.value||l.value||u.value);return(e,n)=>d.value?(a(),V(gi,{key:0,class:`VPNavBarExtra`,label:M(t).extraMenuLabel||`More options`,ref:e=>M(o)?.setExtraEl(e?.$el??null)},{default:y(()=>[s.value.length?(a(),O(`ul`,Ai,[(a(!0),O(C,null,E(s.value,e=>(a(),O(C,{key:JSON.stringify(e)},[`link`in e?(a(),V(ai,{key:0,item:e},null,8,[`item`])):`component`in e?(a(),V(x(e.component),N({key:1,ref_for:!0},e.props,{menu:``}),null,16)):(a(),V(si,{key:2,text:e.text,items:e.items},null,8,[`text`,`items`]))],64))),128))])):F(``,!0),c.value?(a(),V(Ci,{key:1,menu:``})):F(``,!0),l.value?(a(),O(`div`,ji,[A(Yr,{row:``})])):F(``,!0),u.value?(a(),O(`div`,Mi,[R(`div`,Ni,[A(ki,{class:`social-links-list`,links:M(t).socialLinks},null,8,[`links`])])])):F(``,!0)]),_:1},8,[`label`])):F(``,!0)}},[[`__scopeId`,`data-v-4a7801ba`]]),Fi=[`aria-label`,`aria-expanded`],Ii=z({__name:`VPNavBarHamburger`,props:{active:{type:Boolean,required:!0}},emits:[`click`],setup(e){let{theme:t}=G(),n=b(`el`),{screenTriggerEl:r}=Or();return u(()=>{r.value=n.value}),(r,i)=>(a(),O(`button`,{ref_key:`el`,ref:n,type:`button`,class:H([`VPNavBarHamburger`,{active:e.active}]),"aria-label":M(t).mobileMenuLabel||`Menu`,"aria-expanded":e.active,onClick:i[0]||=e=>r.$emit(`click`)},[...i[1]||=[R(`span`,{class:`container`,"aria-hidden":`true`},[R(`span`,{class:`top`}),R(`span`,{class:`middle`}),R(`span`,{class:`bottom`})],-1)]],10,Fi))}},[[`__scopeId`,`data-v-53edb318`]]);function Li(e){let t=e.mode??`auto`,n=Ri(e),r=e.askAi,i=!!(r&&typeof r==`object`&&r.sidePanel);switch(t){case`sidePanel`:return{mode:t,showKeywordSearch:!1,useSidePanel:!0};case`hybrid`:return n||console.error(`[vitepress] mode: "hybrid" requires keyword search credentials (appId, apiKey, indexName).`),{mode:t,showKeywordSearch:n,useSidePanel:!0};case`modal`:return{mode:t,showKeywordSearch:n,useSidePanel:!1};default:return{mode:`auto`,showKeywordSearch:n,useSidePanel:i}}}function Ri(e){return!!(e.appId&&e.apiKey&&e.indexName)}function zi(e,t){return[...(Array.isArray(e)?e:e?[e]:[]).map(e=>Array.isArray(e)?e.filter(e=>typeof e==`string`&&!e.startsWith(`lang:`)):e).filter(e=>typeof e==`string`?!e.startsWith(`lang:`):Array.isArray(e)&&e.length>0),`lang:${t}`]}function Bi(e,t,n){let r=typeof e==`string`,i=!r&&e.searchParameters?{...e.searchParameters}:void 0,a=!r&&e.agentStudio===!0,o=zi(i?.facetFilters??t.searchParameters?.facetFilters,n),s=a?i:{...i,facetFilters:o.length?o:void 0},c={...r?{}:e,indexName:r?t.indexName:e.indexName,apiKey:r?t.apiKey:e.apiKey,appId:r?t.appId:e.appId,assistantId:r?e:e.assistantId};return s&&Object.values(s).some(e=>e!=null)&&(c.searchParameters=s),c}function Vi(e,t,n){e=Hi(e,e.locales?.[t]||{});let r=zi(e.searchParameters?.facetFilters,n),i=e.askAi?Bi(e.askAi,e,n):void 0;return{...e,searchParameters:{...e.searchParameters,facetFilters:r},askAi:i}}function Hi(e,t){let n={...e};for(let e in t){let r=t[e];r!==void 0&&(n[e]=e===`searchParameters`?r:T(r)&&T(n[e])?Hi(n[e],r):r)}return delete n.locales,n}function Ui(e,t=(e,t)=>JSON.stringify(e)===JSON.stringify(t)){return U(n=>{let r=e();return n===void 0||!t(r,n)?r:n})}var Wi={},Gi={type:`button`,class:`VPNavBarAskAiButton`};function Ki(e,t){return a(),O(`button`,Gi,[...t[0]||=[R(`span`,{class:`vpi-sparkles`,"aria-hidden":`true`},null,-1)]])}var qi=z(Wi,[[`render`,Ki],[`__scopeId`,`data-v-6679af46`]]),Ji={type:`button`,class:`VPNavBarSearchButton`},Yi={class:`text`},Xi=z({__name:`VPNavBarSearchButton`,props:{text:{type:String,required:!0}},setup(e){return(t,n)=>(a(),O(`button`,Ji,[n[0]||=R(`span`,{class:`vpi-search`,"aria-hidden":`true`},null,-1),R(`span`,Yi,B(e.text),1),n[1]||=R(`span`,{class:`keys`,"aria-hidden":`true`},[R(`kbd`,{class:`key-mod`}),R(`kbd`,{class:`key-k`})],-1)]))}},[[`__scopeId`,`data-v-ad8163be`]]);xe();var Zi={class:`VPNavBarSearch`},Qi=z({__name:`VPNavBarSearch`,setup(e){let t=ye(()=>De(()=>import(`./VPLocalSearchBox.8Mw97QAa.js`),__vite__mapDeps([0,1,2,3]))),n=()=>null,{theme:r,localeIndex:i,lang:o}=G(),s=`local`,c=Ui(()=>Vi(r.value.search?.options||{},i.value,o.value)),l=U(()=>Li(c.value)),u=U(()=>{if(!l.value.useSidePanel)return null;let e=c.value.askAi;return!e||typeof e==`string`||!e.sidePanel?null:e.sidePanel===!0?{}:e.sidePanel}),d=U(()=>u.value?.keyboardShortcuts?.[`Ctrl/Cmd+I`]!==!1),f=_(null),p=0,m=_(!1),h=_(!1);k(()=>{});function g(e){m.value||=!0,f.value={target:e,nonce:++p}}let v=_(!1);Ae(`k`,e=>{(e.ctrlKey||e.metaKey)&&(e.preventDefault(),v.value=!0)}),Ae(`/`,e=>{y(e)||(e.preventDefault(),v.value=!0)});function y(e){let t=e.target,n=t.tagName;return t.isContentEditable||n===`INPUT`||n===`SELECT`||n===`TEXTAREA`}return(e,r)=>(a(),O(`div`,Zi,[M(s)===`algolia`?(a(),O(C,{key:0},[l.value.showKeywordSearch?(a(),V(Xi,{key:0,text:M(c).translations?.button?.buttonText||`Search`,"aria-label":M(c).translations?.button?.buttonAriaLabel||`Search`,"aria-keyshortcuts":`/ control+k meta+k`,onClick:r[0]||=e=>g(`search`)},null,8,[`text`,`aria-label`])):F(``,!0),u.value?(a(),V(qi,{key:1,"aria-label":u.value.button?.translations?.buttonAriaLabel||`Ask AI`,"aria-keyshortcuts":d.value?`control+i meta+i`:void 0,onClick:r[1]||=e=>h.value?g(`toggleAskAi`):g(`askAi`)},null,8,[`aria-label`,`aria-keyshortcuts`])):F(``,!0),m.value?(a(),V(M(n),{key:2,"algolia-options":M(c),"open-request":f.value,onVnodeBeforeMount:r[2]||=e=>h.value=!0},null,8,[`algolia-options`,`open-request`])):F(``,!0)],64)):M(s)===`local`?(a(),O(C,{key:1},[A(Xi,{text:M(c).translations?.button?.buttonText||`Search`,"aria-label":M(c).translations?.button?.buttonAriaLabel||`Search`,"aria-keyshortcuts":`/ control+k meta+k`,onClick:r[3]||=e=>v.value=!0},null,8,[`text`,`aria-label`]),v.value?(a(),V(M(t),{key:0,onClose:r[4]||=e=>v.value=!1})):F(``,!0)],64)):F(``,!0)]))}},[[`__scopeId`,`data-v-7ded96c1`]]),$i=[`href`,`rel`,`target`,`title`],ea=[`innerHTML`],ta={key:2},na=z({__name:`VPNavBarTitle`,setup(e){let{site:t,theme:n}=G(),{hasSidebar:r}=K(),{currentLang:i}=pt(),o=U(()=>typeof n.value.logoLink==`string`?n.value.logoLink:n.value.logoLink?.link),s=U(()=>typeof n.value.logoLink==`string`?void 0:n.value.logoLink?.rel),l=U(()=>typeof n.value.logoLink==`string`?void 0:n.value.logoLink?.target),u=U(()=>{if(n.value.siteTitle!==!1)return(n.value.siteTitle??t.value.title).replace(/<[^>]+>/g,``).trim()||void 0});return(e,d)=>(a(),O(`div`,{class:H([`VPNavBarTitle`,{"has-sidebar":M(r)}])},[R(`a`,{class:`title`,href:o.value??M(ze)(M(i).link),rel:s.value,target:l.value,title:u.value},[c(e.$slots,`nav-bar-title-before`,{},void 0,!0),M(n).logo?(a(),V(un,{key:0,class:`logo`,image:M(n).logo},null,8,[`image`])):F(``,!0),M(n).siteTitle?(a(),O(`span`,{key:1,dir:`auto`,innerHTML:M(n).siteTitle},null,8,ea)):M(n).siteTitle===void 0?(a(),O(`span`,ta,B(M(t).title),1)):F(``,!0),c(e.$slots,`nav-bar-title-after`,{},void 0,!0)],8,$i)],2))}},[[`__scopeId`,`data-v-0efe74db`]]),ra=[`aria-expanded`,`aria-controls`],ia=[`innerHTML`],aa=[`id`],oa={key:1},sa=z({__name:`VPNavMenuGroup`,props:{item:{type:Object,required:!0},screen:{type:Boolean,required:!1},menu:{type:Boolean,required:!1}},setup(e){let t=e,r=j(),i=U(()=>t.item.activeMatch?p(r.data.relativePath,r.hash,t.item.activeMatch,!0):o(t.item));function o(e){if(`component`in e)return!1;if(`link`in e){let t=typeof e.link==`function`?e.link(r.data):e.link;return p(r.data.relativePath,r.hash,e.activeMatch||t,!!e.activeMatch)}return e.items.some(o)}let s=_(!1),c=n();function l(){s.value=!s.value}return(t,n)=>e.menu?(a(),V(si,{key:0,class:`VPNavMenuGroup`,text:e.item.text,items:e.item.items},null,8,[`text`,`items`])):e.screen?(a(),O(`div`,{key:2,class:H([`VPNavMenuGroup VPNavScreenMenuGroup`,{open:s.value,active:i.value}])},[R(`button`,{type:`button`,class:`button`,"aria-expanded":s.value,"aria-controls":M(c),onClick:l},[R(`span`,{class:`button-text`,dir:`auto`,innerHTML:e.item.text},null,8,ia),n[0]||=R(`span`,{class:`vpi-plus button-icon`,"aria-hidden":`true`},null,-1)],8,ra),ie(R(`ul`,{id:M(c),class:`items`},[(a(!0),O(C,null,E(e.item.items,e=>(a(),O(C,{key:JSON.stringify(e)},[`link`in e?(a(),V(ai,{key:0,item:e},null,8,[`item`])):`component`in e?(a(),O(`li`,oa,[(a(),V(x(e.component),N({ref_for:!0},e.props,{"screen-menu":``}),null,16))])):(a(),V(si,{key:2,text:e.text,items:e.items},null,8,[`text`,`items`]))],64))),128))],8,aa),[[me,s.value]])],2)):(a(),V(gi,{key:1,class:H({VPNavMenuGroup:!0,VPNavBarMenuGroup:!0,active:i.value}),button:e.item.text,items:e.item.items},null,8,[`class`,`button`,`items`]))}},[[`__scopeId`,`data-v-e727a4d8`]]),ca=[`innerHTML`],la=z({__name:`VPNavMenuLink`,props:{item:{type:Object,required:!0},screen:{type:Boolean,required:!1}},setup(e){let t=e,{href:n,isActiveLink:r,isCurrentLink:i}=Ar(()=>t.item),o=L(jr,null);function s(){t.screen&&o?.closeScreen()}return(t,o)=>(a(),V(q,{class:H([`VPNavMenuLink`,{VPNavBarMenuLink:!e.screen,VPNavScreenMenuLink:e.screen,active:M(r)}]),"aria-current":M(i)?`page`:void 0,href:M(n),target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:s},{default:y(()=>[R(`span`,{dir:`auto`,innerHTML:e.item.text},null,8,ca)]),_:1},8,[`class`,`aria-current`,`href`,`target`,`rel`,`no-icon`]))}},[[`__scopeId`,`data-v-c931f168`]]),ua=[`aria-label`],da={class:`list`},fa=z({__name:`VPNavMenu`,props:{screen:{type:Boolean,required:!1}},setup(e){let t=e,{theme:n}=G(),r=t.screen?null:zr();function i(e){return!r||e<r.state.visibleItemCount}return(t,o)=>M(n).nav?(a(),O(`nav`,{key:0,"aria-label":M(n).navMenuLabel||`Main Navigation`,class:H([`VPNavMenu`,e.screen?`VPNavScreenMenu`:`VPNavBarMenu`]),ref:e=>M(r)?.setMenuEl(e)},[R(`ul`,da,[(a(!0),O(C,null,E(M(n).nav,(t,n)=>(a(),O(`li`,{key:JSON.stringify(t),class:H({collapsed:!i(n)}),ref_for:!0,ref:e=>M(r)?.setItemEl(n,e)},[`link`in t?(a(),V(la,{key:0,item:t,screen:e.screen},null,8,[`item`,`screen`])):`component`in t?(a(),V(x(t.component),N({key:1,ref_for:!0},t.props,{"screen-menu":e.screen||void 0}),null,16,[`screen-menu`])):(a(),V(sa,{key:2,item:t,screen:e.screen},null,8,[`item`,`screen`]))],2))),128))])],10,ua)):F(``,!0)}},[[`__scopeId`,`data-v-e6389c86`]]),pa=z({__name:`VPNavSocialLinks`,props:{screen:{type:Boolean,required:!1}},setup(e){let t=e,{theme:n}=G(),r=t.screen?null:zr(),i=U(()=>!!r&&!r.state.socialLinks);return(t,o)=>M(n).socialLinks?(a(),V(ki,{key:0,class:H([`VPNavSocialLinks`,[e.screen?`VPNavScreenSocialLinks`:`VPNavBarSocialLinks`,{collapsed:i.value}]]),links:M(n).socialLinks,ref:e=>M(r)?.setClusterEl(`socialLinks`,e?.$el??null)},null,8,[`class`,`links`])):F(``,!0)}},[[`__scopeId`,`data-v-b82bf4eb`]]),ma={class:`wrapper`},ha={class:`container`},ga={class:`title`},_a={class:`content`},va=z({__name:`VPNavBar`,props:{isScreenOpen:{type:Boolean,required:!0}},emits:[`toggle-screen`],setup(e){let{theme:n}=G(),{isHome:r,hasSidebar:i,hasLocalNav:o}=K(),{y:s}=t(),l=U(()=>s.value<=0),u=Br({itemsKey:()=>JSON.stringify(n.value.nav??null)});return(t,n)=>(a(),O(`div`,{class:H([`VPNavBar`,{"has-sidebar":M(i),"has-local-nav":!M(r)&&M(o),home:M(r),top:l.value,"screen-open":e.isScreenOpen}])},[R(`div`,ma,[R(`div`,ha,[R(`div`,ga,[A(na,null,{"nav-bar-title-before":y(()=>[c(t.$slots,`nav-bar-title-before`,{},void 0,!0)]),"nav-bar-title-after":y(()=>[c(t.$slots,`nav-bar-title-after`,{},void 0,!0)]),_:3})]),R(`div`,_a,[R(`div`,{class:`content-body`,ref:e=>M(u).setContainerEl(e)},[c(t.$slots,`nav-bar-content-before`,{},void 0,!0),A(Qi,{class:`search`}),A(fa,{class:`menu`}),A(Ci,{class:`translations`}),A(Yr,{class:`appearance`}),A(pa,{class:`social-links`}),A(Pi,{class:`extra`}),c(t.$slots,`nav-bar-content-after`,{},void 0,!0),A(Ii,{class:`hamburger`,active:e.isScreenOpen,onClick:n[0]||=e=>t.$emit(`toggle-screen`)},null,8,[`active`])],512)])])]),n[1]||=R(`div`,{class:`divider`},[R(`div`,{class:`divider-line`})],-1)],2))}},[[`__scopeId`,`data-v-1e854858`]]),ya={key:0,class:`VPNavScreen`,id:`VPNavScreen`},ba={class:`container`},xa=z({__name:`VPNavScreen`,props:{open:{type:Boolean,required:!0}},setup(e){let t=e,n=dr();je(Mr,!0);let{closeScreen:r,screenTriggerEl:i}=Or();return Ae(`Escape`,()=>{t.open&&(r(),i.value?.focus())}),(t,r)=>(a(),V(ue,{name:`fade`,onEnter:r[0]||=e=>n.value=!0,onAfterLeave:r[1]||=e=>n.value=!1},{default:y(()=>[e.open?(a(),O(`div`,ya,[R(`div`,ba,[c(t.$slots,`nav-screen-content-before`,{},void 0,!0),A(fa,{screen:``,class:`menu`}),A(Ci,{screen:``,class:`translations`}),A(Yr,{row:``,screen:``,class:`appearance`}),A(pa,{screen:``,class:`social-links`}),c(t.$slots,`nav-screen-content-after`,{},void 0,!0)])])):F(``,!0)]),_:3}))}},[[`__scopeId`,`data-v-ff17402f`]]),Sa={key:0,class:`VPNav`},Ca=z({__name:`VPNav`,setup(e){let{isScreenOpen:t,closeScreen:n,toggleScreen:r}=Or(),{frontmatter:i}=G(),o=U(()=>i.value.navbar!==!1);return je(jr,{closeScreen:n}),u(()=>{l&&document.documentElement.classList.toggle(`hide-nav`,!o.value)}),(e,n)=>o.value?(a(),O(`header`,Sa,[A(va,{"is-screen-open":M(t),onToggleScreen:M(r)},{"nav-bar-title-before":y(()=>[c(e.$slots,`nav-bar-title-before`,{},void 0,!0)]),"nav-bar-title-after":y(()=>[c(e.$slots,`nav-bar-title-after`,{},void 0,!0)]),"nav-bar-content-before":y(()=>[c(e.$slots,`nav-bar-content-before`,{},void 0,!0)]),"nav-bar-content-after":y(()=>[c(e.$slots,`nav-bar-content-after`,{},void 0,!0)]),_:3},8,[`is-screen-open`,`onToggleScreen`]),A(xa,{open:M(t)},{"nav-screen-content-before":y(()=>[c(e.$slots,`nav-screen-content-before`,{},void 0,!0)]),"nav-screen-content-after":y(()=>[c(e.$slots,`nav-screen-content-after`,{},void 0,!0)]),_:3},8,[`open`])])):F(``,!0)}},[[`__scopeId`,`data-v-ea03ebab`]]),wa=[`innerHTML`],Ta=[`innerHTML`],Ea=[`aria-expanded`],Da={key:1,class:`items`},Oa={key:0},ka=z({__name:`VPSidebarItem`,props:{item:{type:Object,required:!0},depth:{type:Number,required:!0}},setup(e){let t=e,{collapsed:n,collapsible:r,isLink:i,isActiveLink:o,isCurrentLink:c,hasActiveLink:l,hasChildren:u,toggle:d}=it(U(()=>t.item)),f=U(()=>i.value?`a`:`div`),p=U(()=>u.value&&t.depth<5?`h${t.depth+2}`:`p`),m=U(()=>t.item.text&&p.value!==`p`?`section`:`div`);function h(){!t.item.link&&d()}return(t,u)=>{let g=s(`VPSidebarItem`,!0);return a(),V(x(m.value),{class:H([`VPSidebarItem`,[`level-${e.depth}`,{collapsible:M(r),collapsed:M(n),"is-link":M(i),"is-active":M(o),"has-active":M(l)}]])},{default:y(()=>[e.item.text?(a(),O(`div`,{key:0,class:`item`,onClick:h},[u[2]||=R(`div`,{class:`indicator`},null,-1),e.item.link?(a(),V(q,{key:0,tag:f.value,class:`link`,"aria-current":M(c)?`page`:void 0,href:e.item.link,rel:e.item.rel,target:e.item.target},{default:y(()=>[(a(),V(x(p.value),{class:`text`},{default:y(()=>[R(`bdi`,{innerHTML:e.item.text},null,8,wa)]),_:1}))]),_:1},8,[`tag`,`aria-current`,`href`,`rel`,`target`])):(a(),V(x(p.value),{key:1,class:`text`},{default:y(()=>[R(`bdi`,{innerHTML:e.item.text},null,8,Ta)]),_:1})),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(a(),O(`button`,{key:2,type:`button`,class:`caret`,"aria-label":`toggle section`,"aria-expanded":!M(n),onClick:u[0]||=fe((...e)=>M(d)&&M(d)(...e),[`stop`])},[...u[1]||=[R(`span`,{class:`vpi-chevron-right caret-icon`},null,-1)]],8,Ea)):F(``,!0)])):F(``,!0),e.item.items&&e.item.items.length?(a(),O(`ul`,Da,[e.depth<5?(a(),O(`li`,Oa,[(a(!0),O(C,null,E(e.item.items,t=>(a(),V(g,{key:t.text,item:t,depth:e.depth+1},null,8,[`item`,`depth`]))),128))])):F(``,!0)])):F(``,!0)]),_:1},8,[`class`])}}},[[`__scopeId`,`data-v-065a0481`]]),Aa=z({__name:`VPSidebarGroup`,props:{items:{type:Array,required:!0}},setup(e){let t=_(!0),n=null;return k(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),Ne(()=>{n!=null&&(clearTimeout(n),n=null)}),(n,r)=>(a(!0),O(C,null,E(e.items,e=>(a(),O(`div`,{key:e.text,class:H([`group`,{"no-transition":t.value}])},[A(ka,{item:e,depth:0},null,8,[`item`])],2))),128))}},[[`__scopeId`,`data-v-70d1d59e`]]),ja={class:`nav`,id:`VPSidebarNav`,"aria-labelledby":`sidebar-aria-label`,tabindex:`-1`},Ma=z({__name:`VPSidebar`,props:{open:{type:Boolean,required:!0}},setup(e){let{sidebarGroups:t,hasSidebar:n}=K(),r=e,i=b(`navEl`),o=dr();S([()=>r.open,i],()=>{r.open?(o.value=!0,i.value?.focus()):o.value=!1},{immediate:!0,flush:`post`});let s=_(0);return S(t,()=>{s.value+=1},{deep:!0}),(r,o)=>M(n)?(a(),O(`aside`,{key:0,class:H([`VPSidebar`,{open:e.open}]),ref_key:`navEl`,ref:i,onClick:o[0]||=fe(()=>{},[`stop`])},[o[2]||=R(`div`,{class:`curtain`},null,-1),R(`nav`,ja,[o[1]||=R(`span`,{class:`visually-hidden`,id:`sidebar-aria-label`},` Sidebar Navigation `,-1),c(r.$slots,`sidebar-nav-before`,{},void 0,!0),(a(),V(Aa,{items:M(t),key:s.value},null,8,[`items`])),c(r.$slots,`sidebar-nav-after`,{},void 0,!0)])],2)):F(``,!0)}},[[`__scopeId`,`data-v-d03bbd8c`]]),Na=[`inert`],Pa=z({__name:`VPSkipLink`,props:{inert:{type:Boolean,required:!1}},setup(e){let{theme:t}=G(),n=j(),r=b(`backToTop`);return S(()=>n.path,()=>r.value?.focus()),(n,i)=>(a(),O(C,null,[R(`span`,{ref_key:`backToTop`,ref:r,tabindex:`-1`},null,512),R(`a`,{href:`#VPContent`,class:`VPSkipLink visually-hidden`,inert:e.inert},B(M(t).skipToContentLabel||`Skip to content`),9,Na)],64))}},[[`__scopeId`,`data-v-57af1136`]]),Fa={Layout:z({__name:`Layout`,setup(e){let{isOpen:t,open:n,close:r}=rt(),{isScreenOpen:i}=Or();ct({closeSidebar:r});let{frontmatter:o,theme:l}=G(),u=te(),d=U(()=>!!u[`home-hero-image`]);return je(lt,{heroImageSlotExists:d}),(e,u)=>{let d=s(`Content`);return M(o).layout===!1?(a(),V(d,{key:1})):(a(),O(`div`,{key:0,class:H([`Layout`,[M(o).pageClass,M(l).gradedContainers&&`vp-graded-containers`]])},[c(e.$slots,`layout-top`,{},void 0,!0),A(Pa,{inert:M(i)},null,8,[`inert`]),A(ft,{class:`backdrop`,show:M(t),onClick:M(r)},null,8,[`show`,`onClick`]),A(Ca,null,{"nav-bar-title-before":y(()=>[c(e.$slots,`nav-bar-title-before`,{},void 0,!0)]),"nav-bar-title-after":y(()=>[c(e.$slots,`nav-bar-title-after`,{},void 0,!0)]),"nav-bar-content-before":y(()=>[c(e.$slots,`nav-bar-content-before`,{},void 0,!0)]),"nav-bar-content-after":y(()=>[c(e.$slots,`nav-bar-content-after`,{},void 0,!0)]),"nav-screen-content-before":y(()=>[c(e.$slots,`nav-screen-content-before`,{},void 0,!0)]),"nav-screen-content-after":y(()=>[c(e.$slots,`nav-screen-content-after`,{},void 0,!0)]),_:3}),A(xr,{open:M(t),onOpenMenu:M(n),inert:M(i)},null,8,[`open`,`onOpenMenu`,`inert`]),A(Ma,{open:M(t),inert:M(i)},{"sidebar-nav-before":y(()=>[c(e.$slots,`sidebar-nav-before`,{},void 0,!0)]),"sidebar-nav-after":y(()=>[c(e.$slots,`sidebar-nav-after`,{},void 0,!0)]),_:3},8,[`open`,`inert`]),A(Kn,{inert:M(i)},{"page-top":y(()=>[c(e.$slots,`page-top`,{},void 0,!0)]),"page-bottom":y(()=>[c(e.$slots,`page-bottom`,{},void 0,!0)]),"not-found":y(()=>[c(e.$slots,`not-found`,{},void 0,!0)]),"home-hero-before":y(()=>[c(e.$slots,`home-hero-before`,{},void 0,!0)]),"home-hero-info-before":y(()=>[c(e.$slots,`home-hero-info-before`,{},void 0,!0)]),"home-hero-info":y(()=>[c(e.$slots,`home-hero-info`,{},void 0,!0)]),"home-hero-info-after":y(()=>[c(e.$slots,`home-hero-info-after`,{},void 0,!0)]),"home-hero-actions-after":y(()=>[c(e.$slots,`home-hero-actions-after`,{},void 0,!0)]),"home-hero-actions-before-actions":y(()=>[c(e.$slots,`home-hero-actions-before-actions`,{},void 0,!0)]),"home-hero-image":y(()=>[c(e.$slots,`home-hero-image`,{},void 0,!0)]),"home-hero-after":y(()=>[c(e.$slots,`home-hero-after`,{},void 0,!0)]),"home-features-before":y(()=>[c(e.$slots,`home-features-before`,{},void 0,!0)]),"home-features-after":y(()=>[c(e.$slots,`home-features-after`,{},void 0,!0)]),"doc-footer-before":y(()=>[c(e.$slots,`doc-footer-before`,{},void 0,!0)]),"doc-before":y(()=>[c(e.$slots,`doc-before`,{},void 0,!0)]),"doc-after":y(()=>[c(e.$slots,`doc-after`,{},void 0,!0)]),"doc-top":y(()=>[c(e.$slots,`doc-top`,{},void 0,!0)]),"doc-bottom":y(()=>[c(e.$slots,`doc-bottom`,{},void 0,!0)]),"aside-top":y(()=>[c(e.$slots,`aside-top`,{},void 0,!0)]),"aside-bottom":y(()=>[c(e.$slots,`aside-bottom`,{},void 0,!0)]),"aside-outline-before":y(()=>[c(e.$slots,`aside-outline-before`,{},void 0,!0)]),"aside-outline-after":y(()=>[c(e.$slots,`aside-outline-after`,{},void 0,!0)]),"aside-ads-before":y(()=>[c(e.$slots,`aside-ads-before`,{},void 0,!0)]),"aside-ads-after":y(()=>[c(e.$slots,`aside-ads-after`,{},void 0,!0)]),_:3},8,[`inert`]),A(Qn,{inert:M(i)},null,8,[`inert`]),c(e.$slots,`layout-bottom`,{},void 0,!0)],2))}}},[[`__scopeId`,`data-v-7aa807ef`]]),enhanceApp:({app:e})=>{e.component(`Badge`,ut)}};function Ia(e,t){return i()?(ce(e,t),!0):!1}var La=new WeakMap,Ra=(...e)=>{let t=e[0],n=ge()?.proxy??i();if(n==null&&!we())throw Error(`injectLocal must be called in setup`);return n&&La.has(n)&&t in La.get(n)?La.get(n)[t]:L(...e)},za=typeof window<`u`&&typeof document<`u`;typeof WorkerGlobalScope<`u`&&globalThis instanceof WorkerGlobalScope;var Ba=Object.prototype.toString,Va=e=>Ba.call(e)===`[object Object]`,X=()=>{},Ha=Ua();function Ua(){var e,t;return za&&!!((e=window)!=null&&(e=e.navigator)!=null&&e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window)==null||(t=t.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}function Wa(...e){if(e.length!==1)return pe(...e);let t=e[0];return typeof t==`function`?d(Fe(()=>({get:t,set:X}))):_(t)}function Ga(e,t){function n(...n){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(r).catch(i)})}return`cancel`in e&&Object.assign(n,{cancel:e.cancel,flush:e.flush,isPending:e.isPending}),n}var Ka=e=>e();function qa(e,t={}){let n,r,i=X,a=X,o=g(!1),s=e=>{clearTimeout(e),i(),i=X},c;return Object.assign(l=>{let u=w(e),d=w(t.maxWait);return n&&s(n),u<=0||d!==void 0&&d<=0?(r&&=(s(r),void 0),o.value=!1,Promise.resolve(l())):(o.value=!0,new Promise((e,f)=>{i=t.rejectOnCancel?f:e,a=e,c=l,d&&!r&&(r=setTimeout(()=>{n&&s(n),r=void 0,o.value=!1,e(c())},d)),n=setTimeout(()=>{r&&s(r),r=void 0,o.value=!1,e(l())},u)}))},{cancel:()=>{n&&=(s(n),void 0),r&&=(s(r),void 0),o.value=!1,a=X},flush:()=>{if(o.value){n&&=(clearTimeout(n),void 0),r&&=(clearTimeout(r),void 0),o.value=!1;let e=a;i=X,a=X,e(c())}},isPending:Te(o)})}function Ja(...e){let t=0,n,r=!0,i=X,a,o,s,c,l;!le(e[0])&&typeof e[0]==`object`?{delay:o,trailing:s=!0,leading:c=!0,rejectOnCancel:l=!1}=e[0]:[o,s=!0,c=!0,l=!1]=e;let u=()=>{n&&(clearTimeout(n),n=void 0,i(),i=X)};return e=>{let d=w(o),f=Date.now()-t,p=()=>a=e();return u(),d<=0?(t=Date.now(),p()):(f>d?(t=Date.now(),(c||!r)&&p()):s&&(a=new Promise((e,a)=>{i=l?a:e,n=setTimeout(()=>{t=Date.now(),r=!0,e(p()),u()},Math.max(0,d-f))})),!c&&!n&&(n=setTimeout(()=>r=!0,d)),r=!1,a)}}function Ya(e=Ka,t={}){let{initialState:n=`active`}=t,r=Wa(n===`active`);function i(){r.value=!1}function a(){r.value=!0}return{isActive:Te(r),pause:i,resume:a,eventFilter:(...t)=>{r.value&&e(...t)}}}function Xa(e){return e.endsWith(`rem`)?Number.parseFloat(e)*16:Number.parseFloat(e)}function Za(e){return Array.isArray(e)?e:[e]}function Qa(e){return e||ge()}function $a(e,t,n={}){let{eventFilter:r=Ka,...i}=n;return S(e,Ga(r,t),i)}function eo(e,t,n={}){let{eventFilter:r,initialState:i=`active`,...a}=n,{eventFilter:o,pause:s,resume:c,isActive:l}=Ya(r,{initialState:i});return{stop:$a(e,t,{...a,eventFilter:o}),pause:s,resume:c,isActive:l}}function to(e,t=!0,n){Qa(n)?k(e,n):t?e():D(e)}function no(e,t,n={}){let{debounce:r=0,maxWait:i=void 0,...a}=n;return $a(e,t,{...a,eventFilter:qa(r,{maxWait:i})})}function ro(e,t,n){return S(e,t,{...n,immediate:!0})}function io(e,t,n={}){let{throttle:r=0,trailing:i=!0,leading:a=!0,...o}=n;return $a(e,t,{...o,eventFilter:Ja(r,i,a)})}var Z=za?window:void 0,ao=za?window.document:void 0;za&&window.navigator,za&&window.location;function Q(e){let t=w(e);return t?.$el??t}function $(...e){let t=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),n=U(()=>{let t=Za(w(e[0])).filter(e=>e!=null);return t.every(e=>typeof e!=`string`)?t:void 0});return ro(()=>[n.value?.map(e=>Q(e))??[Z].filter(e=>e!=null),Za(w(n.value?e[1]:e[0])),Za(M(n.value?e[2]:e[1])),w(n.value?e[3]:e[2])],([e,n,r,i],a,o)=>{if(!e?.length||!n?.length||!r?.length)return;let s=Va(i)?{...i}:i,c=e.flatMap(e=>n.flatMap(n=>r.map(r=>t(e,n,r,s))));o(()=>{c.forEach(e=>e())})},{flush:`post`})}var oo=!1;function so(e,t,n={}){let{window:r=Z,ignore:i=[],capture:a=!0,detectIframe:o=!1,controls:s=!1}=n;if(!r)return s?{stop:X,cancel:X,trigger:X}:X;if(Ha&&!oo){oo=!0;let e={passive:!0};Array.from(r.document.body.children).forEach(t=>t.addEventListener(`click`,X,e)),r.document.documentElement.addEventListener(`click`,X,e)}let c=!0,l=e=>w(i).some(t=>{if(typeof t==`string`)return Array.from(r.document.querySelectorAll(t)).some(t=>t===e.target||e.composedPath().includes(t));{let n=Q(t);return n&&(e.target===n||e.composedPath().includes(n))}});function u(e){let t=w(e);return t&&t.$.subTree.shapeFlag===16}function d(e,t){let n=w(e),r=n.$.subTree&&n.$.subTree.children;return r==null||!Array.isArray(r)?!1:r.some(e=>e.el===t.target||t.composedPath().includes(e.el))}let f=n=>{let r=Q(e);n.target!=null&&(!(r instanceof Element)&&u(e)&&d(e,n)||r&&r!==n.target&&!n.composedPath().includes(r)&&(`detail`in n&&n.detail===0&&(c=!l(n)),c?t(n):c=!0))},p=!1,m=[$(r,`click`,e=>{p||(p=!0,setTimeout(()=>{p=!1},0),f(e))},{passive:!0,capture:a}),$(r,`pointerdown`,t=>{let n=Q(e);c=!l(t)&&!(!n||t.composedPath().includes(n))},{passive:!0}),o&&$(r,`blur`,n=>{setTimeout(()=>{let i=Q(e),a=r.document.activeElement;for(;a?.shadowRoot;)a=a.shadowRoot.activeElement;a?.tagName===`IFRAME`&&!i?.contains(r.document.activeElement)&&t(n)},0)},{passive:!0})].filter(Boolean),h=()=>m.forEach(e=>e());return s?{stop:h,cancel:()=>{c=!1},trigger:e=>{c=!0,f(e),c=!1}}:h}function co(){let e=g(!1),t=ge();return t&&k(()=>{e.value=!0},t),e}function lo(e){let t=co();return U(()=>(t.value,!!e()))}function uo(e){return typeof e==`function`?e:typeof e==`string`?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function fo(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]==`object`?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);let{target:i=Z,eventName:a=`keydown`,passive:o=!1,dedupe:s=!1}=r,c=uo(t);return $(i,a,e=>{e.repeat&&w(s)||c(e)&&n(e)},o)}function po(e,t,n={}){return fo(e,t,{...n,eventName:`keydown`})}var mo=Symbol(`vueuse-ssr-width`);function ho(){let e=we()?Ra(mo,null):null;return typeof e==`number`?e:void 0}function go(e,t={}){let{window:n=Z,ssrWidth:r=ho()}=t,i=lo(()=>n&&`matchMedia`in n&&typeof n.matchMedia==`function`),a=g(typeof r==`number`),o=g(),s=g(!1);return u(()=>{if(a.value){a.value=!i.value;let t=w(e).split(`,`);s.value=t.some(e=>{let t=e.includes(`not all`),n=e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),i=e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),a=!!(n||i);return n&&a&&(a=r>=Xa(n[1])),i&&a&&(a=r<=Xa(i[1])),t?!a:a})}else i.value&&(o.value=n.matchMedia(w(e)),s.value=o.value.matches)}),$(o,`change`,e=>{s.value=e.matches},{passive:!0}),U(()=>s.value)}var _o=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},vo=`__vueuse_ssr_handlers__`,yo=bo();function bo(){return vo in _o||(_o[vo]=_o[vo]||{}),_o[vo]}function xo(e,t){return yo[e]||t}function So(e){return e==null?`any`:e instanceof Set?`set`:e instanceof Map?`map`:e instanceof Date?`date`:typeof e==`boolean`?`boolean`:typeof e==`string`?`string`:typeof e==`object`?`object`:Number.isNaN(e)?`any`:`number`}var Co={boolean:{read:e=>e===`true`,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},wo=`vueuse-storage`;function To(e,t,n,r={}){let{flush:i=`pre`,deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:l,window:u=Z,eventFilter:d,onError:f=e=>{console.error(e)},initOnMounted:p}=r,m=(l?g:_)(typeof t==`function`?t():t),h=U(()=>w(e));if(!n)try{n=xo(`getDefaultStorage`,()=>Z?.localStorage)()}catch(e){f(e)}if(!n)return m;let v=w(t),y=So(v),ee=r.serializer??Co[y],{pause:te,resume:ne}=eo(m,e=>x(e),{flush:i,deep:a,eventFilter:d});S(h,()=>T(),{flush:i});let b=!1;u&&o&&(n instanceof Storage?$(u,`storage`,e=>{(!p||b)&&T(e)},{passive:!0}):$(u,wo,e=>{(!p||b)&&ie(e)})),p?to(()=>{b=!0,T()}):T();function re(e,t){if(u){let r={key:h.value,oldValue:e,newValue:t,storageArea:n};u.dispatchEvent(n instanceof Storage?new StorageEvent(`storage`,r):new CustomEvent(wo,{detail:r}))}}function x(e){try{let t=n.getItem(h.value);if(e==null)re(t,null),n.removeItem(h.value);else{let r=ee.write(e);t!==r&&(n.setItem(h.value,r),re(t,r))}}catch(e){f(e)}}function C(e){let t=e?e.newValue:n.getItem(h.value);if(t==null)return s&&v!=null&&n.setItem(h.value,ee.write(v)),v;if(!e&&c){let e=ee.read(t);return typeof c==`function`?c(e,v):y===`object`&&!Array.isArray(e)?{...v,...e}:e}return typeof t==`string`?ee.read(t):t}function T(e){if(!(e&&e.storageArea!==n)){if(e&&e.key==null)m.value=v;else if(!(e&&e.key!==h.value)){te();try{let t=ee.write(m.value);(e===void 0||e?.newValue!==t)&&(m.value=C(e))}catch(e){f(e)}finally{e?D(ne):ne()}}}}function ie(e){T(e.detail)}return m}function Eo(e,t,n={}){let{window:r=Z,...i}=n,a,o=lo(()=>r&&`ResizeObserver`in r),s=()=>{a&&=(a.disconnect(),void 0)},c=U(()=>{let t=w(e);return Array.isArray(t)?t.map(e=>Q(e)):[Q(t)]}),l=S(c,e=>{if(s(),o.value&&r){a=new ResizeObserver(t);for(let t of e)t instanceof Element&&a.observe(t,i)}},{immediate:!0,flush:`post`}),u=()=>{s(),l()};return Ia(u),{isSupported:o,stop:u}}function Do(e,t,n={}){let{window:r=Z}=n;return To(e,t,r?.localStorage,n)}function Oo(e=`history`,t={}){let{initialValue:n={},removeNullishValues:r=!0,removeFalsyValues:i=!1,write:a=!0,writeMode:o=`replace`,window:s=Z,stringify:c=e=>e.toString()}=t;if(!s)return de(n);let l=de({});function u(){if(e===`history`)return s.location.search||``;if(e===`hash`){let e=s.location.hash||``,t=e.indexOf(`?`);return t>0?e.slice(t):``}return(s.location.hash||``).replace(/^#/,``)}function d(t){let n=c(t);if(e===`history`)return`${n?`?${n}`:``}${s.location.hash||``}`;if(e===`hash-params`)return`${s.location.search||``}${n?`#${n}`:``}`;let r=s.location.hash||`#`,i=r.indexOf(`?`);return i>0?`${s.location.search||``}${r.slice(0,i)}${n?`?${n}`:``}`:`${s.location.search||``}${r}${n?`?${n}`:``}`}function f(){return new URLSearchParams(u())}function p(e){let t=new Set(Object.keys(l));for(let n of e.keys()){let r=e.getAll(n);l[n]=r.length>1?r:e.get(n)||``,t.delete(n)}Array.from(t).forEach(e=>delete l[e])}let{pause:m,resume:h}=eo(l,()=>{let e=new URLSearchParams(``);Object.keys(l).forEach(t=>{let n=l[t];Array.isArray(n)?n.forEach(n=>e.append(t,n)):r&&n==null||i&&!n?e.delete(t):e.set(t,n)}),g(e,!1)},{deep:!0});function g(e,t,n=!0){m(),t&&p(e),o===`replace`?s.history.replaceState(s.history.state,s.document.title,s.location.pathname+d(e)):n&&s.history.pushState(s.history.state,s.document.title,s.location.pathname+d(e)),D(()=>h())}function _(){a&&g(f(),!0,!1)}let v={passive:!0};$(s,`popstate`,_,v),e!==`history`&&$(s,`hashchange`,_,v);let y=f();return y.keys().next().value?p(y):Object.assign(l,n),l}function ko(e={}){let{window:t=Z,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:a=!0,type:o=`inner`}=e,s=g(n),c=g(r),l=()=>{if(t){if(o===`outer`)s.value=t.outerWidth,c.value=t.outerHeight;else if(o===`visual`&&t.visualViewport){let{width:e,height:n,scale:r}=t.visualViewport;s.value=Math.round(e*r),c.value=Math.round(n*r)}else a?(s.value=t.innerWidth,c.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight)}};l(),to(l);let u={passive:!0};if($(`resize`,l,u),t&&o===`visual`&&t.visualViewport&&$(t.visualViewport,`resize`,l,u),i){let e=go(`(orientation: portrait)`);S(e,()=>l())}return{width:s,height:c}}xe();var Ao={class:`hint-text`},jo=1500,Mo=z(W({__name:`EmbeddedHylimoEditor`,props:{code:{type:String,required:!0}},setup(e){let t=be(()=>De(()=>import(`./HylimoEditor.Cp-nKfDl.js`),__vite__mapDeps([4,2,1,5,6,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]))),n=b(`wrapper`),r=_(!1),i=_(!1),o=_(`Click to interact`),s;function c(){return r.value||(n.value?.contains(ao?.activeElement??null)??!1)}function l(e){c()||(e.stopPropagation(),u())}function u(){i.value=!0,clearTimeout(s),s=setTimeout(()=>{i.value=!1},jo)}return $(n,`wheel`,l,{capture:!0}),$(n,`touchmove`,l,{capture:!0}),$(ao,`pointerdown`,e=>{n.value?.contains(e.target)?e.pointerType===`touch`?o.value=`Tap to interact`:r.value=!0:r.value=!1},{capture:!0}),$(n,`click`,()=>{r.value=!0}),Ne(()=>{clearTimeout(s)}),(r,s)=>(a(),O(`div`,{ref_key:`wrapper`,ref:n,class:`wrapper`},[A(M(t),{class:`editor`,"model-value":decodeURIComponent(e.code),horizontal:``},null,8,[`model-value`]),R(`div`,{class:H([`hint`,{visible:i.value}]),"aria-hidden":`true`},[R(`span`,Ao,B(o.value),1)],2)],512))}}),[[`__scopeId`,`data-v-3535b0ed`]]),No=[{id:`class`,title:`Class diagram`,description:`The domain model of a small shop`,group:`Diagram types`,source:`classDiagram {
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
`,docs:{text:`Diagram DSL`,link:`/docs/diagram`}}];function Po(e){let t=No.find(t=>t.id===e);if(t==null)throw Error(`Unknown diagram example: ${e}`);return t}var Fo=W({__name:`DiagramExample`,props:{id:{type:String,required:!0}},setup(e){let t=e,n=U(()=>encodeURIComponent(Po(t.id).source));return(e,t)=>(a(),V(Mo,{code:n.value},null,8,[`code`]))}}),Io={class:`gallery`},Lo={class:`group-title`},Ro={class:`entries`},zo=[`aria-pressed`,`onClick`],Bo={class:`entry-title`},Vo={class:`entry-description`},Ho={class:`caption`},Uo=[`href`],Wo=z(W({__name:`DiagramGallery`,setup(e){let t=_(No[0].id),n=U(()=>No.find(e=>e.id===t.value)),r=U(()=>encodeURIComponent(n.value.source)),i=U(()=>[...new Set(No.map(e=>e.group))].map(e=>({name:e,examples:No.filter(t=>t.group===e)})));return(e,o)=>(a(),O(`div`,Io,[(a(!0),O(C,null,E(i.value,e=>(a(),O(`div`,{key:e.name,class:`group`},[R(`p`,Lo,B(e.name),1),R(`div`,Ro,[(a(!0),O(C,null,E(e.examples,e=>(a(),O(`button`,{key:e.id,class:H([`entry`,{active:e.id===t.value}]),"aria-pressed":e.id===t.value,onClick:n=>t.value=e.id},[R(`span`,Bo,B(e.title),1),R(`span`,Vo,B(e.description),1)],10,zo))),128))])]))),128)),A(Mo,{code:r.value},null,8,[`code`]),R(`p`,Ho,[R(`span`,null,B(n.value.title)+` - `+B(n.value.description),1),n.value.docs?(a(),O(`a`,{key:0,href:M(Oe)(n.value.docs.link)},B(n.value.docs.text),9,Uo)):F(``,!0)])]))}}),[[`__scopeId`,`data-v-d685f0b7`]]),Go=[`id`],Ko=z(W({__name:`NavTeleportTarget`,props:{targetId:{type:String,required:!0}},setup(e){return(t,n)=>(a(),O(`div`,{id:e.targetId,class:`nav-teleport-target`},null,8,Go))}}),[[`__scopeId`,`data-v-2745cdb1`]]),qo=[`title`],Jo={class:`screen-menu-label`},Yo=z(W({__name:`IconButton`,props:{label:{type:String,required:!0},icon:{type:String,required:!0},screenMenu:{type:Boolean,default:!1},iconColor:{type:String,default:void 0}},setup(e){return(t,n)=>(a(),O(`button`,{type:`button`,class:H([`icon-button`,{"screen-menu":e.screenMenu}]),title:e.screenMenu?void 0:e.label,style:Se({"--icon-color":e.iconColor})},[e.screenMenu?(a(),O(C,{key:0},[R(`span`,Jo,B(e.label),1),n[0]||=R(`span`,{class:`spacer`},null,-1)],64)):F(``,!0),R(`span`,{class:H([e.icon])},null,2)],14,qo))}}),[[`__scopeId`,`data-v-e10acba7`]]),Xo={class:`vp-code-group settings-tabs`},Zo={class:`tabs`},Qo=[`id`,`checked`,`onChange`],$o=[`for`,`onClick`],es=z(W({__name:`SettingsTabs`,props:P({tabs:{type:Array,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=I(e,`modelValue`);return(n,r)=>(a(),O(`div`,Xo,[R(`div`,Zo,[(a(!0),O(C,null,E(e.tabs,e=>(a(),O(C,null,[R(`input`,{type:`radio`,id:`tab-${e.id}`,checked:e.id==t.value,onChange:n=>t.value=e.id},null,40,Qo),R(`label`,{for:`tab-${e.id}`,onClick:n=>t.value=e.id},B(e.name),9,$o)],64))),256))]),c(n.$slots,`default`,{},void 0,!0)]))}}),[[`__scopeId`,`data-v-5c607a0c`]]),ts=Symbol(`languageClient`),ns=Symbol(`languageServerConfig`),rs=Symbol(`diagramIdProvider`),is=z(W({__name:`BaseInput`,props:P({isValid:{type:Boolean,default:!0},defaultValue:{type:String,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=e,n=I(e,`modelValue`);function r(){n.value=t.defaultValue}return(t,i)=>(a(),O(C,null,[ie(R(`input`,{"onUpdate:modelValue":i[0]||=e=>n.value=e,class:H([`text-field`,{invalid:!e.isValid}])},null,2),[[h,n.value]]),A(Yo,{icon:`vpi-rotate-cw`,label:`Reset`,class:`reset-button`,onClick:r})],64))}}),[[`__scopeId`,`data-v-0f9bceaf`]]),as=W({__name:`NumberInput`,props:P({defaultValue:{type:Number,required:!0}},{modelValue:{type:Number,required:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=I(e,`modelValue`),n=_(!0),r=_(``);return S(t,e=>{Number.parseFloat(r.value)!=e&&(r.value=e?.toString()??``)},{immediate:!0}),S(r,e=>{if(e.trim()===``)n.value=!0,t.value=void 0;else if(n.value=/^(0|[1-9][0-9]*)?(\.[0-9]*)?$/.test(e.trim()),n.value){let n=Number.parseFloat(e);t.value!==n&&(t.value=n)}},{immediate:!0}),(t,i)=>(a(),V(is,{modelValue:r.value,"onUpdate:modelValue":i[0]||=e=>r.value=e,"is-valid":n.value,"default-value":e.defaultValue.toString()},null,8,[`modelValue`,`is-valid`,`default-value`]))}}),os={class:`subtitle`},ss={class:`wrapper`},cs=z(W({__name:`SettingsItem`,props:{subtitle:{type:String,required:!0}},setup(e){return(t,n)=>(a(),O(`div`,null,[R(`p`,os,B(e.subtitle),1),R(`div`,ss,[c(t.$slots,`default`,{},void 0,!0)])]))}}),[[`__scopeId`,`data-v-d5d9aa9b`]]),ls=W({__name:`NumberInputItem`,props:P({subtitle:{type:String,required:!0},defaultValue:{type:Number,required:!0}},{modelValue:{type:Number,required:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=I(e,`modelValue`);return(n,r)=>(a(),V(cs,{subtitle:e.subtitle},{default:y(()=>[A(as,{modelValue:t.value,"onUpdate:modelValue":r[0]||=e=>t.value=e,"default-value":e.defaultValue},null,8,[`modelValue`,`default-value`])]),_:1},8,[`subtitle`]))}}),us={class:`color-input-wrapper`},ds=z(W({__name:`ColorInput`,props:P({defaultValue:{type:String,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=I(e,`modelValue`),n=_(!0),r=_(``);return S(t,e=>{r.value!==e&&(r.value=e)},{immediate:!0}),S(r,e=>{n.value=/^#[0-9a-fA-F]{6}$/.test(e.trim()),n.value&&(t.value=e.trim())},{immediate:!0}),(i,o)=>(a(),O(`div`,us,[R(`div`,{class:`color-picker-wrapper`,style:Se({backgroundColor:t.value})},[ie(R(`input`,{"onUpdate:modelValue":o[0]||=e=>r.value=e,type:`color`,class:`color-picker`},null,512),[[h,r.value]])],4),A(is,{modelValue:r.value,"onUpdate:modelValue":o[1]||=e=>r.value=e,"is-valid":n.value,"default-value":e.defaultValue},null,8,[`modelValue`,`is-valid`,`default-value`])]))}}),[[`__scopeId`,`data-v-92296929`]]),fs=W({__name:`ColorInputItem`,props:P({subtitle:{type:String,required:!0},defaultValue:{type:String,required:!0}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=I(e,`modelValue`);return(n,r)=>(a(),V(cs,{subtitle:e.subtitle},{default:y(()=>[A(ds,{modelValue:t.value,"onUpdate:modelValue":r[0]||=e=>t.value=e,"default-value":e.defaultValue},null,8,[`modelValue`,`default-value`])]),_:1},8,[`subtitle`]))}}),ps=z(W({__name:`BooleanInputItem`,props:P({subtitle:{type:String,required:!0}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=I(e,`modelValue`);return(n,r)=>(a(),V(cs,{subtitle:e.subtitle},{default:y(()=>[A(Kr,{class:H({checked:t.value}),onClick:r[0]||=e=>t.value=!t.value},null,8,[`class`])]),_:1},8,[`subtitle`]))}}),[[`__scopeId`,`data-v-6e25ab24`]]),ms={translationPrecision:1,resizePrecision:1,linePointPosPrecision:.001,linePointDistancePrecision:.1,axisAlignedPosPrecision:.001,rotationPrecision:1},hs={lightPrimaryColor:`#000000`,lightBackgroundColor:`#ffffff`,darkPrimaryColor:`#ffffff`,darkBackgroundColor:`#1e1e1e`,enableFontSubsetting:!0,enableExternalFonts:!1},gs={toolboxEnabled:!0,snappingEnabled:!0,gridEnabled:!0},_s={class:`content`},vs=z(W({__name:`SettingsContent`,setup(e){let t=L(ns),n=t.settings,r=t.diagramConfig,i=t.editorConfig,o=[{name:`Graphical editor`,id:`graphical-editor`},{name:`Theme`,id:`theme`},{name:`Diagram`,id:`diagram`}],s=_(`graphical-editor`);return(e,t)=>(a(),O(C,null,[t[15]||=R(`p`,{class:`title`},`Settings`,-1),A(es,{modelValue:s.value,"onUpdate:modelValue":t[14]||=e=>s.value=e,tabs:o,class:`settings-tabs`},{default:y(()=>[R(`div`,_s,[s.value==`graphical-editor`?(a(),O(C,{key:0},[A(ls,{subtitle:`Absolute/relative point translation precision`,modelValue:M(n).translationPrecision,"onUpdate:modelValue":t[0]||=e=>M(n).translationPrecision=e,"default-value":M(ms).translationPrecision},null,8,[`modelValue`,`default-value`]),A(ls,{subtitle:`Resize precision`,modelValue:M(n).resizePrecision,"onUpdate:modelValue":t[1]||=e=>M(n).resizePrecision=e,"default-value":M(ms).resizePrecision},null,8,[`modelValue`,`default-value`]),A(ls,{subtitle:`Line point pos precision`,modelValue:M(n).linePointPosPrecision,"onUpdate:modelValue":t[2]||=e=>M(n).linePointPosPrecision=e,"default-value":M(ms).linePointPosPrecision},null,8,[`modelValue`,`default-value`]),A(ls,{subtitle:`Line point distance precision`,modelValue:M(n).linePointDistancePrecision,"onUpdate:modelValue":t[3]||=e=>M(n).linePointDistancePrecision=e,"default-value":M(ms).linePointDistancePrecision},null,8,[`modelValue`,`default-value`]),A(ls,{subtitle:`Axis aligned pos precision`,modelValue:M(n).axisAlignedPosPrecision,"onUpdate:modelValue":t[4]||=e=>M(n).axisAlignedPosPrecision=e,"default-value":M(ms).axisAlignedPosPrecision},null,8,[`modelValue`,`default-value`]),A(ls,{subtitle:`Rotation precision`,modelValue:M(n).rotationPrecision,"onUpdate:modelValue":t[5]||=e=>M(n).rotationPrecision=e,"default-value":M(ms).rotationPrecision},null,8,[`modelValue`,`default-value`]),A(ps,{subtitle:`Grid`,modelValue:M(i).gridEnabled,"onUpdate:modelValue":t[6]||=e=>M(i).gridEnabled=e},null,8,[`modelValue`]),A(ps,{subtitle:`Snap to elements/points`,modelValue:M(i).snappingEnabled,"onUpdate:modelValue":t[7]||=e=>M(i).snappingEnabled=e},null,8,[`modelValue`])],64)):s.value==`theme`?(a(),O(C,{key:1},[A(fs,{subtitle:`Light mode primary color`,modelValue:M(r).lightPrimaryColor,"onUpdate:modelValue":t[8]||=e=>M(r).lightPrimaryColor=e,"default-value":M(hs).lightPrimaryColor},null,8,[`modelValue`,`default-value`]),A(fs,{subtitle:`Light mode background color`,modelValue:M(r).lightBackgroundColor,"onUpdate:modelValue":t[9]||=e=>M(r).lightBackgroundColor=e,"default-value":M(hs).lightBackgroundColor},null,8,[`modelValue`,`default-value`]),A(fs,{subtitle:`Dark mode primary color`,modelValue:M(r).darkPrimaryColor,"onUpdate:modelValue":t[10]||=e=>M(r).darkPrimaryColor=e,"default-value":M(hs).darkPrimaryColor},null,8,[`modelValue`,`default-value`]),A(fs,{subtitle:`Dark mode background color`,modelValue:M(r).darkBackgroundColor,"onUpdate:modelValue":t[11]||=e=>M(r).darkBackgroundColor=e,"default-value":M(hs).darkBackgroundColor},null,8,[`modelValue`,`default-value`])],64)):s.value==`diagram`?(a(),O(C,{key:2},[A(ps,{subtitle:`Font subsetting`,modelValue:M(r).enableFontSubsetting,"onUpdate:modelValue":t[12]||=e=>M(r).enableFontSubsetting=e},null,8,[`modelValue`]),A(ps,{subtitle:`External fonts`,modelValue:M(r).enableExternalFonts,"onUpdate:modelValue":t[13]||=e=>M(r).enableExternalFonts=e},null,8,[`modelValue`])],64)):F(``,!0)])]),_:1},8,[`modelValue`])],64))}}),[[`__scopeId`,`data-v-574c0955`]]),ys={class:`modal-mask`},bs=z(W({__name:`Settings`,props:{screenMenu:{type:Boolean,default:!1}},setup(t){let n=_(!1),r=_(null);return so(r,()=>{n.value=!1}),(i,o)=>{let c=s(`ClientOnly`);return a(),O(C,null,[A(Yo,{icon:`vpi-settings`,label:`Settings`,class:H([`settings-button`,{"screen-menu":t.screenMenu}]),"screen-menu":t.screenMenu,onClick:o[0]||=e=>n.value=!0},null,8,[`class`,`screen-menu`]),A(c,null,{default:y(()=>[(a(),V(e,{to:`body`},[A(ue,{name:`modal`,persisted:``},{default:y(()=>[ie(R(`div`,ys,[R(`div`,{ref_key:`dialog`,ref:r,class:`modal-container`},[A(vs)],512)],512),[[me,n.value]])]),_:1})]))]),_:1})],64)}}}),[[`__scopeId`,`data-v-31eb380a`]]);xe();var xs={key:0,class:`pwa-snackbar`,role:`alertdialog`,"aria-labelledby":`pwa-message`},Ss=z(W({__name:`RegisterSW`,setup(e){let t=_(!1),n=_(100);function r(){t.value=!0,i()}function i(){let e=null;function r(i){e||=i;let a=i-e,o=Math.max(0,100-a/2500*100);o<=0?t.value=!1:(n.value=o,requestAnimationFrame(r))}requestAnimationFrame(r)}return ke(async()=>{let{registerSW:e}=await De(async()=>{let{registerSW:e}=await import(`./virtual_pwa-register.C5KR8PaM.js`);return{registerSW:e}},[]);e({immediate:!0,onOfflineReady:r,onRegistered(){console.info(`Service Worker registered`)},onRegisterError(e){console.error(`Service Worker registration error!`,e)}})}),(e,r)=>t.value?(a(),O(`div`,xs,[r[0]||=R(`div`,{id:`pwa-message`,class:`snackbar-message`},`App ready to work offline`,-1),R(`div`,{class:`progress-bar`,style:Se({width:n.value+`%`})},null,4)])):F(``,!0)}}),[[`__scopeId`,`data-v-e1d935cb`]]),Cs={install(e){let t=e.runWithContext(()=>ae().isDark);S(t,e=>{ws(e)}),D(()=>{ws(t.value)})}};function ws(e){let t=e?`#1B1B1F`:`#ffffff`,n=document.querySelector(`meta[name=theme-color]`);if(n)n.setAttribute(`content`,t);else{let e=document.createElement(`meta`);e.name=`theme-color`,e.content=t,document.head.appendChild(e)}}var Ts=W({__name:`CustomNavBarMenuLink`,props:{item:{type:Object,required:!0},screenMenu:{type:Boolean,default:!1}},setup(e){let t=e,n=U(()=>({...t.item,target:t.item.target??(i.value?`_blank`:void 0)})),r=Oo(),i=U(()=>r.embedded!=null);return(t,r)=>(a(),V(la,{item:n.value,screen:e.screenMenu},null,8,[`item`,`screen`]))}});xe();var Es={extends:Fa,async enhanceApp({app:e}){e.component(`EmbeddedHylimoEditor`,Mo),e.component(`DiagramExample`,Fo),e.component(`DiagramGallery`,Wo),e.component(`NavTeleportTarget`,Ko),e.component(`CustomNavBarMenuLink`,Ts),e.component(`Settings`,bs);{e.use(Cs);let{lspPlugin:t}=await De(async()=>{let{lspPlugin:e}=await import(`./lspPlugin.DXAPgFza.js`);return{lspPlugin:e}},__vite__mapDeps([32,2,1,5,31,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,7,29,30]));e.use(t)}},Layout(){return _e(Fa.Layout,null,{"layout-bottom":()=>_e(Ss)})}};export{Ca as C,G as E,io as S,dr as T,ko as _,ms as a,no as b,ns as c,po as d,fo as f,Oo as g,Eo as h,gs as i,Yo as l,Do as m,Ss as n,rs as o,$ as p,hs as r,ts as s,Es as t,so as u,to as v,gi as w,ro as x,Ia as y};