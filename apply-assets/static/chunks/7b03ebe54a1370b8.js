(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4216,e=>{"use strict";var t=e.i(833536),a=e.i(656254),r=e.i(213357);let i=[...t.sharedQuestions,...a.youthQuestions.filter(e=>!t.sharedQuestions.some(t=>t.id===e.id))];function n(e,t,o="v1"){let s=new Map(i.map(e=>[e.id,e]));if("youth"===e.segment){let e=a.youthQuestions.find(e=>"major"===e.id);e&&s.set("major",e)}return[...e.questions.filter(e=>e.enabled).map(e=>{let a=s.get(e.id);if(!a)return null;let r={...a,required:e.required,label:e.labelOverride??a.label,placeholder:e.placeholderOverride??a.placeholder,description:e.descriptionOverride??a.description,imageUrl:"v2"===o?e.v2ImageUrl:e.imageUrl??a.imageUrl,imageAlt:"v2"===o?e.v2ImageAlt:e.imageAlt??a.imageAlt,autoAdvance:e.autoAdvance??a.autoAdvance,showWhen:e.alwaysShow?void 0:a.showWhen};if(r.lockedValueCatalog){r.catalogOverrides=e.catalogOverrides;let a=t?.[e.id];a&&a.length>0&&(r.options=a.map(e=>({value:e.value,label:{en:e.labelEn,ar:e.labelAr}})),r.dynamicOptionsUrl=void 0)}else void 0!==e.options&&(e.options.length>0||!r.dynamicOptionsUrl)&&(r.options=e.options.map(e=>({value:e.value,label:{en:e.labelEn,ar:e.labelAr}})),r.dynamicOptionsUrl=void 0);return{item:r,order:e.order}}).filter(Boolean),...(e.customQuestions??[]).filter(e=>e.enabled).map(e=>({item:(0,r.customQuestionToFormQuestion)(e,o),order:e.order}))].sort((e,t)=>e.order-t.order).map(e=>e.item)}e.s(["buildFormQuestions",()=>n])},199145,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(88653),i=e.i(846932),n=e.i(17711),o=e.i(761351);let s={sm:"text-lg sm:text-xl",md:"text-xl sm:text-2xl",lg:"text-2xl sm:text-3xl",xl:"text-3xl sm:text-4xl"};function l({question:e,value:a,onChange:r,error:i,lang:n,questionIndex:l,config:c,onAutoAdvance:d}){let p=c.colors,u={bg:p.background,inputBg:p.inputBg,border:p.inputBorder,borderFocus:p.inputBorderFocus,text:p.text,textMuted:p.textMuted,accent:p.accent,error:p.error};return(0,t.jsx)(o.FormInput,{question:e,value:a,onChange:r,error:i,lang:n,questionIndex:l,colors:u,labelClassName:s[c.typography.questionSize]||s.lg,inputAnimation:c.effects.inputAnimation,onAutoAdvance:d,config:c})}function c({current:e,total:a,progress:r,lang:n,config:o}){let s=o.colors,l=o.effects.progressStyle;return"minimal"===l?(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsxs)("span",{className:"text-xs font-mono",style:{color:s.textMuted},children:[e,"/",a]})}):"dots"===l?(0,t.jsx)("div",{className:"flex justify-center gap-1.5",children:Array.from({length:a}).map((a,r)=>(0,t.jsx)(i.motion.div,{className:"rounded-full",style:{width:r===e-1?24:8,height:8,backgroundColor:r<e?s.accent:`${s.textMuted}33`,borderRadius:999},animate:{width:r===e-1?24:8},transition:{type:"spring",stiffness:300,damping:25}},r))}):"steps"===l?(0,t.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,t.jsx)("span",{className:"text-sm font-semibold",style:{color:s.accent},children:"ar"===n?`${e} من ${a}`:`Step ${e} of ${a}`}),(0,t.jsx)("div",{className:"w-32 h-1.5 rounded-full overflow-hidden",style:{backgroundColor:`${s.textMuted}22`},children:(0,t.jsx)(i.motion.div,{className:"h-full rounded-full",style:{backgroundColor:s.accent},animate:{width:`${r}%`},transition:{type:"spring",stiffness:100,damping:20}})})]}):(0,t.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,t.jsx)("div",{className:"w-full h-1 rounded-full overflow-hidden",style:{backgroundColor:`${s.textMuted}15`},children:(0,t.jsx)(i.motion.div,{className:"h-full rounded-full",style:{backgroundColor:s.accent,boxShadow:`0 0 12px ${s.accent}55`},animate:{width:`${r}%`},transition:{type:"spring",stiffness:80,damping:20}})})})}var d=e.i(87316);function p({onStart:e,lang:a,config:r,startDate:n,endDate:o}){let s=r.colors,l=r.intro,c="ar"===a,p=c&&r.branding.logoUrlAr||r.branding.logoUrl;return(0,t.jsx)("div",{className:"min-h-dvh flex items-center justify-center px-6",dir:c?"rtl":"ltr",children:(0,t.jsxs)(i.motion.div,{className:"text-center max-w-lg",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.22,1,.36,1]},children:[p&&(0,t.jsx)(i.motion.img,{src:p,alt:"",className:"h-12 mx-auto mb-8 object-contain",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.1,duration:.5}},p),(0,t.jsx)(i.motion.h1,{className:"text-4xl sm:text-5xl font-bold leading-tight mb-4",style:{color:s.text,fontFamily:r.typography.headingFont},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15,duration:.5},children:l.title[a]}),l.subtitle&&(0,t.jsx)(i.motion.p,{className:"text-xl mb-3",style:{color:s.accent,fontFamily:r.typography.bodyFont},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.25,duration:.5},children:l.subtitle[a]}),l.description&&(0,t.jsx)(i.motion.p,{className:"text-base mb-10 leading-relaxed",style:{color:s.textMuted,fontFamily:r.typography.bodyFont},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35,duration:.5},children:l.description[a]}),n&&(0,t.jsxs)(i.motion.div,{className:"flex flex-wrap justify-center gap-3 mb-10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:[(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border",style:{backgroundColor:`${s.accent}15`,borderColor:`${s.accent}30`,color:s.accent,fontFamily:r.typography.bodyFont},children:[(0,t.jsx)(d.Calendar,{className:"h-3 w-3"}),"ar"===a?"يبدأ":"Starts"," ",n]}),o&&(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border",style:{backgroundColor:`${s.accent}15`,borderColor:`${s.accent}30`,color:s.accent,fontFamily:r.typography.bodyFont},children:[(0,t.jsx)(d.Calendar,{className:"h-3 w-3"}),"ar"===a?"ينتهي":"Ends"," ",o]})]}),(0,t.jsx)(i.motion.button,{onClick:e,className:"px-8 py-4 text-base font-semibold rounded-2xl transition-all duration-200",style:{backgroundColor:s.accent,color:s.background,fontFamily:r.typography.bodyFont,boxShadow:`0 4px 24px ${s.accent}44`},whileHover:{scale:1.03,boxShadow:`0 8px 32px ${s.accent}66`},whileTap:{scale:.97},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45,duration:.5},children:l.ctaText[a]}),r.branding.tagline&&(0,t.jsxs)(i.motion.p,{className:"text-xs mt-8",style:{color:`${s.textMuted}88`},initial:{opacity:0},animate:{opacity:1},transition:{delay:.7,duration:.5},children:[r.branding.programName[a]," — ",r.branding.tagline[a]]})]})})}function u({color:e,delay:a}){let r=100*Math.random(),n=4+8*Math.random(),o=360*Math.random(),s=2+2*Math.random();return(0,t.jsx)(i.motion.div,{className:"fixed pointer-events-none",style:{left:`${r}%`,top:-20,width:n,height:n*(.4+.6*Math.random()),backgroundColor:e,borderRadius:Math.random()>.5?"50%":2,zIndex:60},initial:{y:-20,rotate:0,opacity:1},animate:{y:window.innerHeight+50,rotate:o+360*(Math.random()>.5?1:-1),opacity:[1,1,0],x:(Math.random()-.5)*200},transition:{duration:s,delay:a,ease:"easeIn"}})}function f({applicantName:e,lang:r,config:n}){let o=n.colors,s=n.closing,[l,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(s.showConfetti){c(!0);let e=setTimeout(()=>c(!1),5e3);return()=>clearTimeout(e)}},[s.showConfetti]);let d=[o.accent,o.primary,o.secondary,"#ffffff","#f0abfc","#fbbf24"];return(0,t.jsxs)("div",{className:"min-h-dvh flex items-center justify-center px-6",dir:"ar"===r?"rtl":"ltr",children:[l&&Array.from({length:60}).map((e,a)=>(0,t.jsx)(u,{color:d[a%d.length],delay:1.5*Math.random()},a)),(0,t.jsxs)(i.motion.div,{className:"text-center max-w-md",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,ease:[.22,1,.36,1]},children:[(0,t.jsx)(i.motion.div,{className:"w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8",style:{backgroundColor:`${o.success}15`,border:`2px solid ${o.success}`},initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200,damping:15},children:(0,t.jsx)(i.motion.svg,{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:o.success,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0},animate:{pathLength:1},transition:{delay:.5,duration:.5},children:(0,t.jsx)(i.motion.path,{d:"M20 6L9 17l-5-5",initial:{pathLength:0},animate:{pathLength:1},transition:{delay:.5,duration:.5}})})}),(0,t.jsx)(i.motion.h1,{className:"text-3xl sm:text-4xl font-bold mb-4",style:{color:o.text,fontFamily:n.typography.headingFont},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.5},children:s.title[r]}),e&&(0,t.jsx)(i.motion.p,{className:"text-lg mb-2",style:{color:o.accent,fontFamily:n.typography.bodyFont},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4,duration:.4},children:"ar"===r?`مرحباً ${e}`:`Welcome, ${e}`}),(0,t.jsx)(i.motion.p,{className:"text-base leading-relaxed",style:{color:o.textMuted,fontFamily:n.typography.bodyFont},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.5,duration:.4},children:s.message[r]}),s.ctaUrl&&s.ctaText&&(0,t.jsx)(i.motion.a,{href:s.ctaUrl,className:"inline-block mt-8 px-6 py-3 text-sm font-semibold rounded-xl transition-all",style:{backgroundColor:`${o.accent}15`,color:o.accent,border:`1px solid ${o.accent}33`},initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},children:s.ctaText[r]})]})]})}var m=e.i(115449),h=e.i(978059),x=e.i(163306),g=e.i(867960),v=e.i(4216),b=e.i(341255);function y({config:e,programId:o,cohortId:s,programSlug:d,startDate:u,endDate:y,embed:w,forcedLanguage:j,initialLanguage:k,studioPreview:N,catalogOptions:C}){let[S,$]=(0,a.useState)(j??k??"en");(0,a.useEffect)(()=>{j&&j!==S&&$(j)},[j]);let[F,O]=(0,a.useState)(e.intro.enabled?"intro":"form"),[A,z]=(0,a.useState)(""),M=(0,a.useRef)(e.intro.enabled);M.current!==e.intro.enabled&&(M.current=e.intro.enabled,e.intro.enabled||"intro"!==F||O("form")),(0,b.useResumePhase)(O,(0,b.applyDraftKey)(d??"custom",s));let T=e.colors,I="ar"===S,B=e.questions.filter(e=>e.enabled).length,q=+!!e.intro.enabled+B+1;(0,a.useRef)(null);let E=(0,a.useCallback)(()=>{window.parent!==window&&window.parent.postMessage({type:"studio:phase-update",phase:F},"*")},[F,q]);(0,a.useEffect)(()=>{E()},[E]),(0,a.useEffect)(()=>{let t=t=>{let a=t.data?.type;if("studio:navigate"===a){let e=t.data.direction;"intro"===F?"next"===e&&O("form"):"closing"===F?"prev"===e&&O("form"):window.postMessage({type:"studio:form-navigate",direction:e},"*")}"studio:goto-closing"===a&&O("closing"),"studio:goto-intro"===a&&e.intro.enabled&&O("intro")};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[F,e.intro.enabled]);let U=(0,a.useMemo)(()=>(0,v.buildFormQuestions)(e,C),[e,C]),P=(()=>{let t=e.background,a={minHeight:"100dvh"};switch(t.type){case"solid":return{...a,backgroundColor:t.value};case"gradient":return{...a,background:t.value};case"image":return{...a,backgroundColor:T.background,position:"relative"};case"pattern":return{...a,backgroundColor:T.background,backgroundImage:t.value,backgroundSize:"40px 40px"};default:return{...a,backgroundColor:T.background}}})(),L=()=>{let t=e.layout,a={borderRadius:t.cardRadius,padding:"2rem",maxWidth:t.maxWidth,width:"100%"};switch(t.cardStyle){case"glass":return{...a,backgroundColor:`${T.surface}${Math.round(2.55*T.surfaceAlpha).toString(16).padStart(2,"0")}`,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:`1px solid ${T.inputBorder}44`,boxShadow:`0 8px 32px ${T.background}88`};case"elevated":return{...a,backgroundColor:T.surface,boxShadow:`0 20px 60px ${T.background}66, 0 4px 16px rgba(0,0,0,0.1)`};case"bordered":return{...a,backgroundColor:"transparent",border:`1.5px solid ${T.inputBorder}`};default:return{...a,backgroundColor:T.surface}}},R=(0,a.useMemo)(()=>{let t=Array.from(new Set([e.typography.headingFont,e.typography.bodyFont])).map(e=>e.replace(/ /g,"+")+":wght@400;500;600;700").join("&family=");return`https://fonts.googleapis.com/css2?family=${t}&display=swap`},[e.typography.headingFont,e.typography.bodyFont]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{rel:"stylesheet",href:R}),e.typography.customFontFamily&&e.typography.customFontUrl&&(0,t.jsx)(g.FontLoader,{family:e.typography.customFontFamily,url:e.typography.customFontUrl}),(0,t.jsxs)("div",{style:P,dir:I?"rtl":"ltr",lang:"ar"===S?"ar":"en",children:[!w&&!j&&(0,t.jsx)("div",{className:"fixed top-4 z-50",dir:"ltr",style:{right:"max(env(safe-area-inset-right, 0px), 1rem)"},children:(0,t.jsxs)("div",{className:"flex rounded-lg overflow-hidden",style:{backgroundColor:`${T.surface}66`,backdropFilter:"blur(12px)",border:`1px solid ${T.inputBorder}44`},children:[(0,t.jsx)("button",{onClick:()=>$("en"),className:"px-3 py-1.5 text-xs font-medium transition-all duration-200",style:{backgroundColor:"en"===S?`${T.accent}22`:"transparent",color:"en"===S?T.accent:T.textMuted},children:"EN"}),(0,t.jsx)("button",{onClick:()=>$("ar"),className:"px-3 py-1.5 text-xs font-medium transition-all duration-200",style:{backgroundColor:"ar"===S?`${T.accent}22`:"transparent",color:"ar"===S?T.accent:T.textMuted},children:"عربي"})]})}),(0,t.jsxs)(r.AnimatePresence,{mode:"wait",children:["intro"===F&&(0,t.jsx)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:(0,x.shouldUseBlockComposer)(e)?(0,t.jsx)(h.BlockComposerIntro,{config:e,lang:S,onStart:()=>O("form")}):(0,t.jsx)(p,{onStart:()=>O("form"),lang:S,programName:e.branding.programName[S],config:e,startDate:u,endDate:y})},"intro"),"form"===F&&(0,t.jsx)(i.motion.div,{className:"min-h-dvh",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:(0,t.jsx)(n.FormEngine,{questions:U,programSlug:d||"custom",programId:o,programName:e.branding.programName.en,cohortId:s,lang:S,accentColor:T.accent,studioPreview:N,questionTransition:e.effects.questionTransition,renderQuestion:a=>{let r=N&&"function"==typeof a.question.showWhen?(0,t.jsxs)("div",{className:"mb-3 inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2 py-1 text-[11px] font-medium text-amber-700",children:[(0,t.jsx)("span",{children:"Conditional"}),(0,t.jsx)("span",{className:"font-normal opacity-80",children:"— applicants see this only when its trigger answer matches"})]}):null;if("fullName"===a.question.id&&a.enabledQuestionIds.includes("fullNameAr")){let i=e.colors,n={bg:i.background,inputBg:i.inputBg,border:i.inputBorder,borderFocus:i.inputBorderFocus,text:i.text,textMuted:i.textMuted,accent:i.accent,error:i.error};return(0,t.jsxs)("div",{style:"card"===e.layout.style?L():void 0,children:[r,(0,t.jsx)(m.BilingualNameField,{question:a.question,english:a.getAnswer("fullName"),arabic:a.getAnswer("fullNameAr"),setEnglish:e=>a.setAnswerById("fullName",e),setArabic:e=>a.setAnswerById("fullNameAr",e),error:a.error,lang:a.lang,colors:n,inputAnimation:e.effects.inputAnimation})]})}return(0,t.jsxs)("div",{style:"card"===e.layout.style?L():void 0,children:[r,(0,t.jsx)(l,{question:a.question,value:a.answer,onChange:a.setAnswer,error:a.error,lang:a.lang,questionIndex:a.questionIndex,config:e,onAutoAdvance:()=>void a.goNext()})]})},renderProgress:a=>(0,t.jsx)(c,{...a,config:e}),renderBackground:()=>(0,t.jsxs)(t.Fragment,{children:["image"===e.background.type&&e.background.value&&(0,t.jsx)("div",{className:"absolute inset-0",style:{backgroundImage:`url(${e.background.value})`,backgroundSize:"cover",backgroundPosition:"center",filter:e.background.blur?`blur(${e.background.blur}px)`:void 0,transform:e.background.blur?"scale(1.05)":void 0}}),e.background.overlay&&(0,t.jsx)("div",{className:"absolute inset-0",style:{backgroundColor:e.background.overlay}}),(e.decorations??[]).map(e=>{let a="ar"===S&&e.imageUrlAr||e.imageUrl;if(!a)return null;let r=e.animation??"float",n="float"===r?{animate:{y:[0,-12,0]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}:"pulse"===r?{animate:{scale:[1,1.05,1],opacity:[1,.7,1]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}:"spin-slow"===r?{animate:{rotate:[0,360]},transition:{duration:30,repeat:1/0,ease:"linear"}}:{};return(0,t.jsx)("div",{className:"absolute pointer-events-none select-none",style:{left:`${e.x}%`,top:`${e.y}%`,width:e.width,height:e.width,opacity:e.opacity/100,transform:`translate(-50%, -50%)${e.rotation?` rotate(${e.rotation}deg)`:""}`},children:(0,t.jsx)(i.motion.div,{className:"w-full h-full",...n,children:(0,t.jsx)("img",{src:a,alt:"",className:"w-full h-full object-contain",draggable:!1})})},e.id)})]}),themeColors:{bg:T.background,text:T.text,textMuted:T.textMuted,border:T.inputBorder,hoverBg:T.surface},onComplete:e=>{z(e),O("closing")}})},"form"),"closing"===F&&(0,t.jsx)(i.motion.div,{style:P,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:(0,t.jsx)(f,{applicantName:A,lang:S,config:e})},"closing")]})]})]})}var w=e.i(433813),j=e.i(79559),k=e.i(557323),N=e.i(646317);function C({config:e,programId:r,cohortId:i,programSlug:n,startDate:o,endDate:s,embed:l,forcedLanguage:c,initialLanguage:d,studioPreview:p,catalogOptions:u}){let f=(0,a.useMemo)(()=>(0,v.buildFormQuestions)(e,u),[e,u]),m={programId:r,programName:e.branding.programName.en,cohortId:i,startDate:o,endDate:s,embed:l,questions:f,overrideAccentColor:e.colors.accent,overrideProgramSlug:n||"custom",introOverrides:e.intro,designConfig:e,forcedLanguage:c,initialLanguage:d,studioPreview:p};switch(e.template){case"clean":case"custom":default:return(0,t.jsx)(y,{config:e,programId:r,cohortId:i,programSlug:n,startDate:o,endDate:s,embed:l,forcedLanguage:c,initialLanguage:d,studioPreview:p,catalogOptions:u});case"ide":return(0,t.jsx)(w.FullStackForm,{...m});case"terminal":return(0,t.jsx)(j.CyberForm,{...m});case"query":return(0,t.jsx)(k.DataForm,{...m});case"chat":return(0,t.jsx)(N.AIForm,{...m})}}e.s(["ConfigurableForm",()=>C],199145)},433656,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(4216),i=e.i(236108),n=e.i(867960),o=e.i(164935),s=e.i(264960),l=e.i(753698),c=e.i(428787);let d=`
.fv2 {
  position: relative;
  min-height: 100dvh;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--fontBody, "Inter", "Space Grotesk", system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}
.fv2.fv2-ar {
  font-family: var(--fontArabic, "IBM Plex Sans Arabic", "Inter", system-ui, sans-serif);
}

/* ── Fixed background layers ── */
.fv2-bg-base { position: fixed; inset: 0; background: var(--bg); z-index: 0; }
.fv2-bg-video { position: fixed; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.fv2-bg-image { position: fixed; inset: 0; background-size: cover; background-position: center; z-index: 0; }
.fv2-bg-overlay { position: fixed; inset: 0; z-index: 0; }

/* Floating decorations. Positioning + the author rotation sit on the STATIC
   wrapper; the animation runs on the inner element, so an animated transform
   can never clobber the translate(-50%,-50%) centring. They paint above the
   section cards (z-index auto): the cards are opaque, so anything drawn
   underneath vanished wherever it met the 780px form column — which on a
   phone or the studio preview is everywhere. pointer-events: none keeps the
   form usable through them. Rendered as a sibling of .fv2-topbar (z-index
   50) inside .fv2-content, NOT as a sibling of .fv2-content itself — a
   descendant's z-index is compared against its OWN stacking context only,
   so from outside .fv2-content nothing the topbar sets can ever outrank a
   sibling decoration, whatever number it carries. */
.fv2-dec { position: absolute; z-index: 2; pointer-events: none; user-select: none; }
.fv2-dec-fixed { position: fixed; }
.fv2-dec img { display: block; width: 100%; height: auto; }
.fv2-dec-anim { animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
.fv2-dec-float { animation-name: fv2-dec-float; animation-duration: 6s; }
.fv2-dec-pulse { animation-name: fv2-dec-pulse; animation-duration: 4s; }
.fv2-dec-spin-slow { animation-name: fv2-dec-spin; animation-duration: 30s; animation-timing-function: linear; }
.fv2-dec-none { animation: none; }
@keyframes fv2-dec-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes fv2-dec-pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: .7; } }
@keyframes fv2-dec-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .fv2-dec-anim { animation: none; } }
/* Scrolling background: the layers travel with the content instead of being
   pinned to the viewport. Absolute inside the .fv2 stacking context, tall
   enough to cover the whole document rather than one screenful. */
.fv2-bg-scroll .fv2-bg-base,
.fv2-bg-scroll .fv2-bg-video,
.fv2-bg-scroll .fv2-bg-image,
.fv2-bg-scroll .fv2-bg-overlay { position: absolute; inset: 0; height: 100%; }
.fv2-bg-scroll .fv2-bg-image { background-attachment: scroll; }
.fv2-content { position: relative; z-index: 1; display: flex; flex-direction: column; min-height: 100dvh; }

/* ── Sticky top bar ── */
.fv2-topbar {
  position: sticky; top: 0; z-index: 50;
  background: var(--topbar);
  -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--cardBr);
}
.fv2-topbar-inner {
  max-width: 1080px; margin: 0 auto; padding: 10px 20px;
  display: flex; align-items: center; gap: 14px;
}
.fv2-logo { display: inline-flex; line-height: 1; }
.fv2-top-label {
  font-size: 13px; font-weight: 600; color: var(--soft);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;
}
.fv2-top-progress { font-size: 12.5px; color: var(--faint); white-space: nowrap; margin-inline-start: auto; }
.fv2-lang {
  display: inline-flex; background: var(--tgTrack); border-radius: 999px; padding: 3px; gap: 2px;
}
.fv2-lang button {
  border: 0; background: transparent; color: var(--soft); font-size: 12px; font-weight: 600;
  padding: 5px 12px; border-radius: 999px; cursor: pointer; font-family: inherit;
}
.fv2-lang button.fv2-lang-on { background: var(--tgOnBg); color: var(--tgOnFg); }
.fv2-topbar-track { height: 3px; position: relative; }
.fv2-topbar-fill { position: absolute; inset-inline-start: 0; top: 0; bottom: 0; background: var(--acc2); transition: width .35s ease; }

/* ── Hero ── */
.fv2-hero {
  max-width: 900px; margin: 0 auto; padding: 64px 22px 40px;
  animation: fv2-fadeUp .5s ease;
}
.fv2-kicker {
  font-family: var(--fontHeading, "Space Grotesk", sans-serif); font-weight: 700; font-size: 12.5px;
  letter-spacing: .16em; text-transform: uppercase; color: var(--kick); margin: 0 0 14px;
}
.fv2-h1 {
  font-family: var(--fontHeading, "Space Grotesk", "IBM Plex Sans Arabic", sans-serif); font-weight: 700;
  font-size: clamp(29px, 4.4vw, 46px); line-height: 1.16; margin: 0 0 16px; color: var(--ink);
}
.fv2-h1-chip {
  background: var(--acc); color: var(--accText);
  padding: 2px 12px; border-radius: 8px;
  -webkit-box-decoration-break: clone; box-decoration-break: clone;
}
.fv2-hero-sub { font-size: 16.5px; color: var(--muted); max-width: 52ch; margin: 0 0 26px; line-height: 1.6; }

/* KPI grid */
.fv2-kpis {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px; margin: 0 0 28px;
}
.fv2-kpi {
  background: var(--card); border: 1px solid var(--cardBr); border-radius: 14px;
  padding: 13px 15px; box-shadow: var(--cardShadow);
}
.fv2-kpi-icon { width: 16px; height: 16px; color: var(--kick); margin-bottom: 8px; }
.fv2-kpi-icon-img { width: 16px; height: 16px; object-fit: contain; margin-bottom: 8px; display: block; }
.fv2-kpi-label {
  font-size: 10.5px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--faint); margin: 0 0 3px;
}
.fv2-kpi-value { font-size: 14px; font-weight: 600; color: var(--ink); margin: 0; }

/* CTA row */
.fv2-cta-row { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; margin: 0 0 14px; }
.fv2-cta {
  border: 0; cursor: pointer; font-family: inherit;
  background: var(--cta); color: var(--ctaText); font-size: 15.5px; font-weight: 700;
  padding: 14px 28px; border-radius: 999px;
  box-shadow: 0 10px 30px var(--ctaGlow);
  transition: transform .15s ease, box-shadow .15s ease;
}
.fv2-cta:hover { transform: translateY(-2px); }
.fv2-hero-reassure { font-size: 13px; color: var(--faint); margin: 0; }

/* ── Questions ── */
.fv2-form { max-width: 780px; margin: 0 auto; padding: 8px 22px 40px; width: 100%; display: grid; gap: 26px; }
.fv2-section {
  background: var(--card); border: 1px solid var(--cardBr); border-radius: 20px;
  box-shadow: var(--cardShadow); padding: 26px 28px 30px;
  animation: fv2-fadeUp .5s ease;
}
.fv2-section-head { display: flex; align-items: baseline; gap: 14px; padding-bottom: 16px; border-bottom: 1px solid var(--hair); margin-bottom: 22px; }
.fv2-section-num {
  font-family: var(--fontHeading, "Space Grotesk", sans-serif); font-weight: 700; font-size: 30px;
  color: var(--ghost); line-height: 1;
}
.fv2-section-title { font-size: 18.5px; font-weight: 700; margin: 0; color: var(--ink); }
.fv2-section-sub { font-size: 12.5px; color: var(--faint); margin: 2px 0 0; }
.fv2-fields { display: grid; gap: 22px; }

/* Fields */
.fv2-field-label { display: block; font-size: 15px; font-weight: 600; color: var(--ink); margin: 0 0 9px; }
.fv2-req { color: var(--err); }
/* Per-question illustration (question.imageUrl). Bounded so it cannot push
   the input below the fold on a phone, and it inherits the card radius. */
.fv2-field-image { display: flex; justify-content: center; margin: 0 0 10px; }
.fv2-field-image img { max-height: 200px; max-width: 100%; object-fit: contain; border-radius: 12px; }
.fv2-field-sub { font-size: 12.5px; color: var(--faint); margin: -5px 0 9px; white-space: pre-line; }
.fv2-input {
  width: 100%; background: var(--inputBg); color: var(--ink);
  border: 1.5px solid var(--inputBr); border-radius: 13px;
  padding: 13px 16px; font-size: 16px; font-family: inherit; outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.fv2-input::placeholder { color: var(--ph); }
.fv2-input:focus { border-color: var(--acc2); box-shadow: 0 0 0 4px var(--focusRing); }
.fv2-input.fv2-input-err { border-color: var(--err); }
textarea.fv2-input { min-height: 96px; resize: vertical; }
/* Phone: fixed-width country select + the number filling the rest. */
.fv2-phone { display: flex; gap: 8px; }
.fv2-phone .fv2-input { flex: 1; }
.fv2-phone .fv2-phone-code { flex: 0 0 auto; width: 116px; }

/* Choice pills */
.fv2-pills { display: flex; flex-wrap: wrap; gap: 10px; }
.fv2-pill {
  border-radius: 999px; min-height: 44px; padding: 9px 18px;
  background: var(--unselBg); border: 1.5px solid var(--unselBr); color: var(--ink);
  font-size: 14.5px; font-family: inherit; cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
}
.fv2-pill:hover { border-color: var(--acc2); }
.fv2-pill.fv2-pill-on {
  background: var(--acc); border-color: var(--acc); color: var(--accText); font-weight: 700;
}
.fv2-error { font-size: 12.5px; color: var(--err); margin: 6px 0 0; }

/* Searchable select (long / dynamic choice lists) */
.fv2-ss { position: relative; }
.fv2-ss-trigger {
  width: 100%; display: flex; align-items: center; gap: 10px;
  background: var(--inputBg); color: var(--ink);
  border: 1.5px solid var(--inputBr); border-radius: 13px;
  min-height: 50px; padding: 8px 16px; font-size: 16px; font-family: inherit;
  cursor: pointer; outline: none; text-align: start;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.fv2-ss-trigger:focus-visible,
.fv2-ss-trigger.fv2-ss-open { border-color: var(--acc2); box-shadow: 0 0 0 4px var(--focusRing); }
.fv2-ss-trigger.fv2-ss-err { border-color: var(--err); }
.fv2-ss-value { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fv2-ss-placeholder { color: var(--ph); }
.fv2-ss-caret { flex-shrink: 0; color: var(--soft); transition: transform .15s ease; }
.fv2-ss-caret.fv2-ss-caret-open { transform: rotate(180deg); }
.fv2-ss-chips { flex: 1; min-width: 0; display: flex; flex-wrap: wrap; gap: 6px; }
.fv2-ss-chip {
  display: inline-flex; align-items: center; gap: 6px; max-width: 100%;
  background: var(--acc); color: var(--accText);
  font-size: 13.5px; font-weight: 600; border-radius: 999px; padding: 4px 11px;
}
.fv2-ss-chip-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fv2-ss-chip-x {
  border: 0; background: transparent; color: inherit; cursor: pointer;
  padding: 0; display: inline-flex; align-items: center; flex-shrink: 0;
}
.fv2-ss-panel {
  position: absolute; inset-inline: 0; top: calc(100% + 6px); z-index: 30;
  background: var(--inputBg); border: 1.5px solid var(--inputBr); border-radius: 13px;
  box-shadow: 0 16px 40px rgba(0,0,0,.22); overflow: hidden;
}
.fv2-ss-searchwrap { position: relative; padding: 8px; border-bottom: 1px solid var(--hair); }
.fv2-ss-searchicon {
  position: absolute; top: 50%; transform: translateY(-50%);
  inset-inline-start: 20px; color: var(--ph); pointer-events: none;
}
.fv2-ss-search {
  width: 100%; background: var(--bg); color: var(--ink);
  border: 1.5px solid var(--inputBr); border-radius: 9px;
  padding: 8px 34px; font-size: 14.5px; font-family: inherit; outline: none;
  transition: border-color .15s ease;
}
.fv2-ss-search::placeholder { color: var(--ph); }
.fv2-ss-search:focus { border-color: var(--acc2); }
.fv2-ss-clear {
  position: absolute; top: 50%; transform: translateY(-50%);
  inset-inline-end: 16px; border: 0; background: transparent;
  color: var(--soft); cursor: pointer; padding: 2px; display: inline-flex;
}
.fv2-ss-list { max-height: 264px; overflow-y: auto; padding: 4px 0; }
.fv2-ss-option {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  padding: 10px 16px; font-size: 15px; color: var(--ink); cursor: pointer;
}
.fv2-ss-option-hl { background: var(--focusRing); }
.fv2-ss-option.fv2-ss-option-on { background: var(--acc); color: var(--accText); font-weight: 700; }
.fv2-ss-option-label { min-width: 0; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fv2-ss-empty { padding: 16px; text-align: center; font-size: 13.5px; color: var(--faint); margin: 0; }

/* File input */
.fv2-file { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.fv2-file-name { font-size: 13px; color: var(--soft); overflow-wrap: anywhere; }

/* ── Submit card ── */
.fv2-submit-card {
  background: var(--submitBg); border-radius: 20px; padding: 36px 28px;
  text-align: center; animation: fv2-fadeUp .5s ease;
}
.fv2-submit-title { font-size: 22px; font-weight: 700; color: #FFFFFF; margin: 0 0 8px; }
.fv2-submit-note { font-size: 14px; color: var(--submitMuted); max-width: 46ch; margin: 0 auto 20px; line-height: 1.55; }
.fv2-submit-btn {
  border: 0; cursor: pointer; font-family: inherit;
  background: var(--acc); color: var(--accText); font-size: 16px; font-weight: 700;
  padding: 15px 36px; border-radius: 999px;
  box-shadow: 0 10px 30px var(--accGlow);
  transition: transform .15s ease;
}
.fv2-submit-btn:hover { transform: translateY(-2px); }
.fv2-submit-btn:disabled { opacity: .6; cursor: default; transform: none; }
.fv2-submit-error { font-size: 13.5px; color: #FF8A8E; margin: 16px 0 0; }

/* ── Success ── */
.fv2-success {
  max-width: 640px; margin: 40px auto; padding: 48px 28px; text-align: center;
  background: var(--card); border: 1px solid var(--cardBr); border-radius: 20px;
  box-shadow: var(--cardShadow); animation: fv2-fadeUp .5s ease;
}
.fv2-success-badge {
  width: 76px; height: 76px; border-radius: 50%; background: var(--acc); color: var(--accText);
  display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;
  animation: fv2-popIn .5s ease;
}
.fv2-success-eyebrow {
  font-family: var(--fontHeading, "Space Grotesk", sans-serif); font-weight: 700;
  font-size: 11.5px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--kick); margin: 0 0 8px;
}
.fv2-success-title {
  font-family: var(--fontHeading, "Space Grotesk", sans-serif);
  font-size: clamp(24px, 3.4vw, 32px); font-weight: 700; margin: 0 0 10px; color: var(--ink);
}
.fv2-success-msg { font-size: 15.5px; color: var(--muted); margin: 0 0 22px; line-height: 1.6; }
.fv2-success-tick {
  stroke-dasharray: 48; stroke-dashoffset: 48;
  animation: fv2-draw .45s .25s ease forwards;
}
@keyframes fv2-draw { to { stroke-dashoffset: 0; } }
/* What happens next — left-aligned inside a centred card, because numbered
   steps read as a list, not as centred prose. */
.fv2-success-steps {
  list-style: none; margin: 0 auto 24px; padding: 0; max-width: 420px;
  text-align: start; display: grid; gap: 12px;
}
.fv2-success-steps li {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 14.5px; line-height: 1.55; color: var(--muted);
}
.fv2-success-step-num {
  flex: 0 0 auto; width: 24px; height: 24px; border-radius: 50%;
  background: var(--acc); color: var(--accText);
  font-size: 12.5px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.fv2-success-cta {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 48px; padding: 0 26px; border-radius: 999px;
  background: var(--cta); color: var(--ctaText);
  font-size: 15px; font-weight: 700; text-decoration: none;
  box-shadow: 0 10px 26px var(--ctaGlow); margin: 0 0 18px;
  transition: transform .15s ease;
}
.fv2-success-cta:hover { transform: translateY(-1px); }
.fv2-success-cta:focus-visible { outline: none; box-shadow: 0 0 0 4px var(--focusRing); }
.fv2-success-sub { font-size: 13.5px; color: var(--faint); margin: 0; }

/* ── Footer ── */
.fv2-footer {
  margin-top: auto; border-top: 1px solid var(--hair);
  text-align: center; font-size: 12.5px; color: var(--faint); padding: 24px 20px;
}

/* ── Animations ── */
@keyframes fv2-popIn {
  0% { transform: scale(.55); opacity: 0; }
  70% { transform: scale(1.07); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes fv2-fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: none; }
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .fv2-top-label { display: none; }
  .fv2-top-progress { display: none; }
  .fv2-cta { width: 100%; }
  .fv2-hero { padding-top: 44px; }
  .fv2-section { padding: 22px 18px 24px; }
  /* Decoration width is an author-set px value with no viewport awareness
     (V2Decorations sets it as an inline style) — on a narrow screen that same
     px size takes up proportionally far more room and can grow into the
     sticky topbar/logo. Cap it relative to the viewport; max-width still wins
     over the inline width. */
  .fv2-dec { max-width: 45vw; }
}
`;var p=e.i(645805),u=e.i(213357),f=e.i(88746);function m(e){try{let t=JSON.parse(e||"[]");return Array.isArray(t)?t.filter(e=>"string"==typeof e):[]}catch{return[]}}function h(e,t){let a=m(e);return JSON.stringify(a.includes(t)?a.filter(e=>e!==t):[...a,t])}function x(e,t){if("info-block"===e.type)return null;if(e.lockedValueCatalog&&e.options&&e.options.length>0&&t.trim()){let a=new Set(e.options.map(e=>e.value));if(("multiselect"===e.type?m(t):[t]).some(e=>e&&!a.has(e)))return"That option is no longer available — please pick from the list / لم يعد هذا الخيار متاحًا، يُرجى الاختيار من القائمة"}let a=`${p.V2_COPY.required.en} / ${p.V2_COPY.required.ar}`;if("boolean"===e.type)return e.required&&"yes"!==t&&"no"!==t?a:null;if("multiselect"===e.type)return e.required&&0===m(t).length?a:null;if("file"===e.type)return e.required&&!t.trim()?"Please upload a file / الرجاء رفع ملف":null;if(e.required&&!t.trim())return a;if(e.allowOtherText&&"Other"===t)return`${p.V2_COPY.otherPlaceholder.en} / ${p.V2_COPY.otherPlaceholder.ar}`;let r=e.validation??(0,f.getQuestionValidation)(e.id);if(r&&t.trim()){let e=r.safeParse(t);if(!e.success)return e.error.issues[0]?.message??"Invalid input"}return null}var g=e.i(645363);function v({copy:e,programName:a,lang:r,onLangChange:i,answered:n,total:o,mode:s}){let l=o>0?Math.round(n/o*100):0;return(0,t.jsxs)("header",{className:"fv2-topbar",children:[(0,t.jsxs)("div",{className:"fv2-topbar-inner",children:[(0,t.jsx)("a",{className:"fv2-logo",href:"https://coded.kw",target:"_blank",rel:"noopener noreferrer","aria-label":"CODED",dir:"ltr",children:(0,t.jsx)(g.CodedLogo,{height:20,variant:"dark"===s?"light":"dark"})}),(0,t.jsxs)("span",{className:"fv2-top-label",children:[a,e.topLabelSuffix[r]]}),(0,t.jsx)("span",{className:"fv2-top-progress",children:e.answered(n,o,r)}),(0,t.jsxs)("div",{className:"fv2-lang",role:"group","aria-label":"Language",children:[(0,t.jsx)("button",{type:"button",className:"en"===r?"fv2-lang-on":void 0,onClick:()=>i("en"),children:"EN"}),(0,t.jsx)("button",{type:"button",className:"ar"===r?"fv2-lang-on":void 0,onClick:()=>i("ar"),children:"عربي"})]})]}),(0,t.jsx)("div",{className:"fv2-topbar-track",children:(0,t.jsx)("div",{className:"fv2-topbar-fill",style:{width:`${l}%`}})})]})}var b=e.i(87316),y=e.i(503116),w=e.i(346897),j=e.i(417835),k=e.i(217923),N=e.i(751975),C=e.i(557487),S=e.i(761911),$=e.i(870273);let F={calendar:b.Calendar,clock:y.Clock,pin:w.MapPin,timer:j.Timer,level:k.BarChart3,tag:N.Tag,laptop:C.Laptop,users:S.Users,star:$.Star};function O({kpis:e,lang:a,kpiValues:r}){return 0===e.length?null:(0,t.jsx)("div",{className:"fv2-kpis",children:e.map((e,i)=>{var n;let o=F[e.icon],s=((e.valueSource?r?.[e.valueSource]:void 0)??e.value)[a];return(0,t.jsxs)("div",{className:"fv2-kpi",children:[(n=e.icon,/^(https?:)?\/\//.test(n)||n.startsWith("/"))?(0,t.jsx)("img",{className:"fv2-kpi-icon-img",src:e.icon,alt:""}):o?(0,t.jsx)(o,{className:"fv2-kpi-icon",strokeWidth:2,"aria-hidden":!0}):null,(0,t.jsx)("p",{className:"fv2-kpi-label",children:e.label[a]}),(0,t.jsx)("p",{className:"fv2-kpi-value",children:s})]},`${e.icon}-${i}`)})})}function A({copy:e,programName:a,tagline:r,kpis:i,lang:n,kpiValues:o,onStart:s}){return(0,t.jsxs)("section",{className:"fv2-hero",children:[(0,t.jsx)("p",{className:"fv2-kicker",dir:"ltr",children:e.kicker[n]}),(0,t.jsx)("h1",{className:"fv2-h1",children:(0,t.jsx)("span",{className:"fv2-h1-chip",children:a[n]})}),r?.[n]?(0,t.jsx)("p",{className:"fv2-hero-sub",children:r[n]}):null,(0,t.jsx)(O,{kpis:i,lang:n,kpiValues:o}),(0,t.jsx)("div",{className:"fv2-cta-row",children:(0,t.jsx)("button",{type:"button",className:"fv2-cta",onClick:s,children:e.startCta[n]})}),(0,t.jsx)("p",{className:"fv2-hero-reassure",children:e.reassure[n]})]})}var z=e.i(531278),M=e.i(569074);function T(e){return e.normalize("NFKD").replace(/\p{M}/gu,"").replace(/ى/g,"ي").replace(/ة/g,"ه").toLowerCase().trim()}function I(e){return"Other"===e||e.startsWith("Other: ")}var B=e.i(643531),q=e.i(664659),E=e.i(555436),U=e.i(37727);function P({id:e,options:r,value:i,multiple:n,lang:o,hasError:s,ariaLabel:l,onChange:c}){let[d,p]=(0,a.useState)(!1),[u,f]=(0,a.useState)(""),[x,g]=(0,a.useState)(0),v=(0,a.useRef)(null),b=(0,a.useRef)(null),y=(0,a.useRef)(null),w=(0,a.useRef)(null),j=`${e}-listbox`,k=t=>`${e}-opt-${t}`,N=(0,a.useMemo)(()=>n?m(i):[],[n,i]),C=e=>n?N.includes(e):"Other"===e?I(i):i===e,S=(0,a.useMemo)(()=>{let e;return(e=T(u))?r.filter(t=>T(t.label.en??"").includes(e)||T(t.label.ar??"").includes(e)):r},[r,u]),$=(0,a.useMemo)(()=>{if(n||!i)return"";let e=I(i)?"Other":i;return r.find(t=>t.value===e)?.label[o]??i},[n,r,i,o]);(0,a.useEffect)(()=>{if(!d)return;let e=e=>{v.current&&!v.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[d]),(0,a.useEffect)(()=>{if(d){let e=requestAnimationFrame(()=>y.current?.focus());return()=>cancelAnimationFrame(e)}f("")},[d]),(0,a.useEffect)(()=>{if(!d)return;let e=S.findIndex(e=>C(e.value));g(e>=0?e:0)},[d,S]),(0,a.useEffect)(()=>{if(!d||!w.current)return;let e=w.current.querySelector(`[data-idx="${x}"]`);e?.scrollIntoView({block:"nearest"})},[x,d]);let F=e=>{p(!1),e&&b.current?.focus()},O=e=>{if(n){c(h(i,e)),y.current?.focus();return}c(e),F(!0)},A="ar"===o,z=A?"ابحث...":"Search...",M=A?"إزالة":"Remove",P=n?N.map(e=>({value:e,label:r.find(t=>t.value===e)?.label[o]??e})):[];return(0,t.jsxs)("div",{className:"fv2-ss",ref:v,onKeyDown:e=>{if(d){if("Escape"===e.key){e.preventDefault(),F(!0);return}if("ArrowDown"===e.key){e.preventDefault(),g(e=>Math.min(e+1,Math.max(0,S.length-1)));return}if("ArrowUp"===e.key){e.preventDefault(),g(e=>Math.max(e-1,0));return}if("Enter"===e.key){e.preventDefault();let t=S[x];t&&O(t.value)}}},children:[(0,t.jsxs)("div",{ref:b,id:e,role:"combobox",tabIndex:0,"aria-expanded":d,"aria-haspopup":"listbox","aria-controls":d?j:void 0,"aria-label":l,className:`fv2-ss-trigger${d?" fv2-ss-open":""}${s?" fv2-ss-err":""}`,onClick:()=>p(e=>!e),onKeyDown:e=>{if(!d){if("Enter"===e.key||" "===e.key||"ArrowDown"===e.key||"ArrowUp"===e.key){e.preventDefault(),p(!0);return}1!==e.key.length||e.ctrlKey||e.metaKey||e.altKey||(e.preventDefault(),f(e.key),p(!0))}},children:[n&&P.length>0?(0,t.jsx)("span",{className:"fv2-ss-chips",children:P.map(e=>(0,t.jsxs)("span",{className:"fv2-ss-chip",children:[(0,t.jsx)("span",{className:"fv2-ss-chip-label",children:e.label}),(0,t.jsx)("button",{type:"button",className:"fv2-ss-chip-x","aria-label":`${M}: ${e.label}`,onClick:t=>{t.stopPropagation(),c(h(i,e.value))},children:(0,t.jsx)(U.X,{size:13,"aria-hidden":!0})})]},e.value))}):(0,t.jsx)("span",{className:`fv2-ss-value${$?"":" fv2-ss-placeholder"}`,children:$||(A?"اختر...":"Select...")}),(0,t.jsx)(q.ChevronDown,{size:17,"aria-hidden":!0,className:`fv2-ss-caret${d?" fv2-ss-caret-open":""}`})]}),d?(0,t.jsxs)("div",{className:"fv2-ss-panel",children:[(0,t.jsxs)("div",{className:"fv2-ss-searchwrap",children:[(0,t.jsx)(E.Search,{size:15,"aria-hidden":!0,className:"fv2-ss-searchicon"}),(0,t.jsx)("input",{ref:y,type:"text",className:"fv2-ss-search",value:u,placeholder:z,"aria-label":z,"aria-controls":j,"aria-activedescendant":S.length>0?k(x):void 0,autoComplete:"off",onChange:e=>f(e.target.value)}),u?(0,t.jsx)("button",{type:"button",className:"fv2-ss-clear","aria-label":A?"مسح البحث":"Clear search",onClick:()=>{f(""),y.current?.focus()},children:(0,t.jsx)(U.X,{size:14,"aria-hidden":!0})}):null]}),(0,t.jsx)("div",{ref:w,id:j,role:"listbox","aria-label":l,"aria-multiselectable":n||void 0,className:"fv2-ss-list",children:0===S.length?(0,t.jsx)("p",{className:"fv2-ss-empty",children:A?"لا توجد نتائج":"No matches"}):S.map((e,a)=>{let r=C(e.value);return(0,t.jsxs)("div",{id:k(a),role:"option","aria-selected":r,"data-idx":a,className:`fv2-ss-option${r?" fv2-ss-option-on":""}${a===x?" fv2-ss-option-hl":""}`,onMouseEnter:()=>g(a),onMouseDown:t=>{t.preventDefault(),O(e.value)},children:[(0,t.jsx)("span",{className:"fv2-ss-option-label",children:e.label[o]}),r?(0,t.jsx)(B.Check,{size:15,strokeWidth:3,"aria-hidden":!0}):null]},e.value)})})]}):null]})}var L=e.i(435509);let R=[{value:"yes",label:{en:"Yes",ar:"نعم"}},{value:"no",label:{en:"No",ar:"لا"}}];function D(e){return"Other"===e||e.startsWith("Other: ")}function V({question:e,value:a,error:r,lang:i,onChange:n}){var o;let s,l=e.label[i],c=e.sublabel?.[i],d=e.description?.[i],p=r?2!==(s=r.split(" / ")).length?r:"ar"===i?s[1]:s[0]:null,u=`fv2-in-${e.id}`,f=e.imageUrl?(0,t.jsx)("div",{className:"fv2-field-image",children:(0,t.jsx)("img",{src:e.imageUrl,alt:e.imageAlt?.[i]?.trim()||e.label[i]||"",loading:"lazy"})}):null;if("info-block"===e.type)return(0,t.jsxs)("div",{id:`fv2-q-${e.id}`,children:[f,(0,t.jsx)("p",{className:"fv2-field-label",children:l}),c?(0,t.jsx)("p",{className:"fv2-field-sub",children:c}):null,d?(0,t.jsx)("p",{className:"fv2-field-sub",children:d}):null]});let x=(0,t.jsxs)(t.Fragment,{children:[f,(0,t.jsxs)("label",{className:"fv2-field-label",htmlFor:u,children:[l,e.required?(0,t.jsx)("span",{className:"fv2-req",children:" *"}):null]})]}),g=(0,t.jsxs)(t.Fragment,{children:[c?(0,t.jsx)("p",{className:"fv2-field-sub",children:c}):null,d?(0,t.jsx)("p",{className:"fv2-field-sub",children:d}):null]}),v=p?(0,t.jsx)("p",{className:"fv2-error",children:p}):null;if("boolean"===e.type||("select"===e.type||"multiselect"===e.type)&&(e.options?.length??0)>0){let r="boolean"===e.type?R:e.options??[],s="multiselect"===e.type,c=s?m(a):[],d=e=>s?c.includes(e):"Other"===e?D(a):a===e,f=!s&&e.allowOtherText&&D(a),x=a.startsWith("Other: ")?a.slice(7):"",b="search"==(o=r.length,"select"!==e.type&&"multiselect"!==e.type?"pills":e.dynamicOptionsUrl||o>5?"search":"pills");return(0,t.jsxs)("div",{id:`fv2-q-${e.id}`,children:[(0,t.jsxs)("p",{className:"fv2-field-label",children:[l,e.required?(0,t.jsx)("span",{className:"fv2-req",children:"*"}):null]}),g,b?(0,t.jsx)(P,{id:`fv2-ss-${e.id}`,options:r,value:a,multiple:s,lang:i,hasError:!!p,ariaLabel:l,onChange:n}):(0,t.jsx)("div",{className:"fv2-pills",role:"group","aria-label":l,children:r.map(e=>(0,t.jsx)("button",{type:"button",className:`fv2-pill${d(e.value)?" fv2-pill-on":""}`,"aria-pressed":d(e.value),onClick:()=>n(s?h(a,e.value):d(e.value)&&"Other"!==e.value?"":e.value),children:e.label[i]},e.value))}),f?(0,t.jsx)("input",{id:u,className:`fv2-input${p?" fv2-input-err":""}`,style:{marginTop:10},type:"text",value:x,placeholder:e.otherPlaceholder?.[i]??("ar"===i?"يرجى التحديد":"Please specify"),onChange:e=>n(e.target.value?`Other: ${e.target.value}`:"Other")}):null,v]})}if("file"===e.type)return(0,t.jsx)(_,{question:e,value:a,errText:p,lang:i,onChange:n,labelEl:x,subEls:g});if("textarea"===e.type)return(0,t.jsxs)("div",{id:`fv2-q-${e.id}`,children:[x,g,(0,t.jsx)("textarea",{id:u,className:`fv2-input${p?" fv2-input-err":""}`,value:a,placeholder:e.placeholder?.[i],onChange:e=>n(e.target.value)}),v]});if("phone"===e.type){let{code:r,number:o}=(0,L.parsePhone)(a);return(0,t.jsxs)("div",{id:`fv2-q-${e.id}`,children:[x,g,(0,t.jsxs)("div",{className:"fv2-phone",dir:"ltr",children:[(0,t.jsx)("select",{className:`fv2-input fv2-phone-code${p?" fv2-input-err":""}`,value:r,"aria-label":"Country code",onChange:e=>n((0,L.formatPhone)(e.target.value,o)),children:L.COUNTRY_CODES.map(e=>(0,t.jsxs)("option",{value:e.code,children:[e.flag," ",e.code]},e.country))}),(0,t.jsx)("input",{id:u,className:`fv2-input${p?" fv2-input-err":""}`,type:"tel",inputMode:"tel",value:o,placeholder:e.placeholder?.[i],onChange:e=>n((0,L.formatPhone)(r,(0,L.cleanPhoneNumber)(e.target.value)))})]}),v]})}let b="email"===e.type?"email":"date"===e.type?"date":"text";return(0,t.jsxs)("div",{id:`fv2-q-${e.id}`,children:[x,g,(0,t.jsx)("input",{id:u,className:`fv2-input${p?" fv2-input-err":""}`,type:b,value:a,placeholder:e.placeholder?.[i],onChange:e=>n(e.target.value)}),v]})}function _({question:e,value:r,errText:i,lang:n,onChange:o,labelEl:s,subEls:l}){let c=(0,a.useRef)(null),[d,p]=(0,a.useState)(!1),[u,f]=(0,a.useState)(null),m=e.maxSizeMB??5,h=async e=>{if(e){if(e.size>1024*m*1024)return void f("ar"===n?`الملف كبير جداً. الحد الأقصى ${m} ميغابايت.`:`File is too large. Maximum size is ${m}MB.`);f(null),o(""),p(!0);try{let t=new FormData;t.append("file",e),t.append("folder","applications");let a=await fetch("/api/upload",{method:"POST",body:t}),r=await a.json().catch(()=>({}));if(!a.ok||!r?.url)throw Error("string"==typeof r?.error?r.error:"Upload failed");o(String(r.url))}catch(e){f(e instanceof Error?e.message:"Upload failed"),o("")}finally{p(!1)}}};return(0,t.jsxs)("div",{id:`fv2-q-${e.id}`,children:[s,l,(0,t.jsxs)("div",{className:"fv2-file",children:[(0,t.jsxs)("button",{type:"button",className:"fv2-pill",disabled:d,onClick:()=>c.current?.click(),children:[d?(0,t.jsx)(z.Loader2,{className:"size-4 animate-spin","aria-hidden":!0}):(0,t.jsx)(M.Upload,{className:"size-4","aria-hidden":!0})," ","ar"===n?"رفع ملف":"Upload file"]}),r?(0,t.jsx)("span",{className:"fv2-file-name",children:function(e){if(!e)return"";let t=e.split("/").pop()||e;try{return decodeURIComponent(t)}catch{return t}}(r)}):null]}),(0,t.jsx)("input",{ref:c,type:"file",accept:e.accept??"image/*,.pdf",style:{display:"none"},onChange:e=>h(e.target.files?.[0]??null)}),u?(0,t.jsx)("p",{className:"fv2-error",children:u}):null,i?(0,t.jsx)("p",{className:"fv2-error",children:i}):null]})}function W({number:e,category:a,questions:r,answers:i,errors:n,lang:o,onChange:s}){let l=p.V2_SECTION_COPY[a];return(0,t.jsxs)("section",{className:"fv2-section",children:[(0,t.jsxs)("div",{className:"fv2-section-head",children:[(0,t.jsx)("span",{className:"fv2-section-num",children:String(e).padStart(2,"0")}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"fv2-section-title",children:l.title[o]}),(0,t.jsx)("p",{className:"fv2-section-sub",children:l.sub[o]})]})]}),(0,t.jsx)("div",{className:"fv2-fields",children:r.map(e=>(0,t.jsx)(V,{question:e,value:i[e.id]??"",error:n[e.id]??null,lang:o,onChange:t=>s(e.id,t)},e.id))})]})}function Q({copy:e,lang:a,submitting:r,missingCount:i,submitError:n,onSubmit:o}){return(0,t.jsxs)("section",{className:"fv2-submit-card",children:[(0,t.jsx)("h2",{className:"fv2-submit-title",children:e.submitTitle[a]}),(0,t.jsx)("p",{className:"fv2-submit-note",children:e.submitNote[a]}),(0,t.jsx)("button",{type:"button",className:"fv2-submit-btn",disabled:r,onClick:o,children:r?e.submitting[a]:e.submitBtn[a]}),i>0?(0,t.jsx)("p",{className:"fv2-submit-error",children:e.missing(i,a)}):n?(0,t.jsx)("p",{className:"fv2-submit-error",children:n}):null]})}function Y({copy:e,lang:a,programName:r,title:i,message:n,ctaUrl:o,ctaText:s}){let l=o?.trim(),c=s?.[a]?.trim();return(0,t.jsxs)("section",{className:"fv2-success",role:"status","aria-live":"polite",children:[(0,t.jsx)("div",{className:"fv2-success-badge","aria-hidden":!0,children:(0,t.jsx)("svg",{viewBox:"0 0 52 52",width:"40",height:"40",children:(0,t.jsx)("path",{className:"fv2-success-tick",fill:"none",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",d:"M14 27.5 L22.5 36 L38 18"})})}),r?(0,t.jsx)("p",{className:"fv2-success-eyebrow",children:r}):null,(0,t.jsx)("h2",{className:"fv2-success-title",children:i?.[a]||e.doneTitle[a]}),(0,t.jsx)("p",{className:"fv2-success-msg",children:n?.[a]||e.doneMsg[a]}),(0,t.jsxs)("ul",{className:"fv2-success-steps",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"fv2-success-step-num","aria-hidden":!0,children:"1"}),(0,t.jsx)("span",{children:e.doneStep1[a]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"fv2-success-step-num","aria-hidden":!0,children:"2"}),(0,t.jsx)("span",{children:e.doneStep2[a]})]})]}),l?(0,t.jsx)("a",{className:"fv2-success-cta",href:l,target:"_blank",rel:"noopener noreferrer",children:c||e.doneCta[a]}):null,(0,t.jsx)("p",{className:"fv2-success-sub",children:e.doneSub[a]})]})}function H({decorations:e,lang:a}){let r=(e??[]).filter(e=>e.imageUrl||e.imageUrlAr);return 0===r.length?null:(0,t.jsx)(t.Fragment,{children:r.map(e=>{let r="ar"===a&&e.imageUrlAr||e.imageUrl;if(!r)return null;let i=e.animation??"float",n="fixed"===e.attachment;return(0,t.jsx)("div",{className:`fv2-dec${n?" fv2-dec-fixed":""}`,style:{left:`${e.x}%`,top:`${e.y}%`,width:e.width,opacity:(e.opacity??100)/100,transform:`translate(-50%, -50%) rotate(${e.rotation??0}deg)`},"aria-hidden":!0,children:(0,t.jsx)("div",{className:`fv2-dec-anim fv2-dec-${i}`,children:(0,t.jsx)("img",{src:r,alt:"",draggable:!1})})},e.id)})})}function G({config:e,formVariant:f,programId:h,programSlug:g,cohortId:b,segment:y,initialLanguage:w,kpiValues:j}){let k,N=e.v2,C=N?.mode??"light",S=(0,c.resolveV2Base)(N,e.brandPalette?.[0]?.hex),$=N?.background??{type:"none"},F=N?.heroKpis??[],[O,z]=(0,a.useState)(w??e.defaultLanguage??"en"),M="ar"===O,T=(0,a.useMemo)(()=>(0,r.buildFormQuestions)(e,void 0,"v2"),[e]),[I,B]=(0,a.useState)(()=>{let e={};for(let t of T)t.defaultValue&&(e[t.id]=t.defaultValue);return e}),[q,E]=(0,a.useState)(!1),[U,P]=(0,a.useState)({}),[L,R]=(0,a.useState)(!1),[D,V]=(0,a.useState)(!1),[_,G]=(0,a.useState)(null),[K,J]=(0,a.useState)({});(0,a.useEffect)(()=>{let e=T.filter(e=>e.dynamicOptionsUrl);if(0===e.length)return;let t=e=>e.replace("{programSlug}",g??"").replace("{programId}",h??"").replace("{cohortId}",b??"");for(let a of e){let e=new Map((a.options??[]).map(e=>[e.value,e]));fetch(t(a.dynamicOptionsUrl)).then(e=>e.json()).then(t=>{let r=t.data||[],n=a.dynamicOptionsMap||{value:"name",labelEn:"name"},o=r.map(t=>{let a=t[n.value]||t.name,r=t[n.labelEn]||a,i=n.labelAr&&t[n.labelAr]||"",o=i&&i!==r?i:e.get(a)?.label.ar||r;return{value:a,label:{en:r,ar:o}}});if(a.allowOtherText&&!o.some(e=>e.value===i.OTHER_OPTION.value)){let e=(a.options??[]).find(e=>e.value===i.OTHER_OPTION.value);o.push(e??i.OTHER_OPTION)}o.length>0&&J(e=>({...e,[a.id]:o}))}).catch(()=>{})}},[T,g,h,b]);let X=(0,a.useMemo)(()=>T.map(e=>(function(e,t){let a=e.dynamicOptionsUrl&&t?{...e,options:t}:e;if(a.catalogOverrides&&a.options&&a.options.length>0){let{hidden:e,labels:t}=a.catalogOverrides,r=new Set(e??[]),i=a.options.filter(e=>!r.has(e.value)).map(e=>{let a=t?.[e.value];return a?{value:e.value,label:{en:a.en||e.label.en,ar:a.ar||e.label.ar}}:e});a={...a,options:i}}return a.allowOtherText&&a.options&&0!==a.options.length?{...a,options:(0,i.withCanonicalOther)(a.options)}:a})(e,K[e.id])),[T,K]),Z=(0,a.useMemo)(()=>(function(e){let t=new Map;for(let a of e){let e=(0,u.getQuestionCategory)(a.id),r=t.get(e)??[];t.set(e,[...r,a])}return u.QUESTION_CATEGORY_ORDER.filter(e=>t.has(e)).map(e=>({category:e,questions:t.get(e)??[]}))})(X),[X]).map(e=>{var t;return{...e,questions:(t=e.questions,t.filter(e=>!e.showWhen||e.showWhen(I)))}}).filter(e=>e.questions.length>0),ee=Z.flatMap(e=>e.questions),{answered:et,total:ea}={answered:(k=ee.filter(e=>e.required&&"info-block"!==e.type)).filter(e=>{var t;return t=I[e.id]??"","info-block"===e.type||("multiselect"===e.type?m(t).length>0:"boolean"===e.type?"yes"===t||"no"===t:(!e.allowOtherText||"Other"!==t)&&t.trim().length>0)}).length,total:k.length},er={};for(let e of ee){let t=q?x(e,I[e.id]??""):null;er[e.id]=t??U[e.id]??null}let ei=q?ee.filter(e=>x(e,I[e.id]??"")).length:0,en=(e,t)=>{B(a=>({...a,[e]:t})),P(t=>{if(!(e in t))return t;let a={...t};return delete a[e],a})},eo=(0,a.useRef)(null);(0,a.useEffect)(()=>{eo.current?.play().catch(()=>void 0)},[$.url]);let es=(0,a.useRef)(null),el=e=>document.getElementById(`fv2-q-${e}`)?.scrollIntoView({behavior:"smooth",block:"center"}),ec=async()=>{E(!0),G(null);let e=ee.filter(e=>x(e,I[e.id]??""));if(e.length>0)return void el(e[0].id);if(!h)return void G("ar"===O?"لا يوجد برنامج نشط":"No active program found");R(!0);let{body:t,formVariant:a}=(0,s.buildApplyRequestBody)({answers:I,sharedFieldIds:s.APPLY_SHARED_FIELD_IDS,questionLabel:e=>X.find(t=>t.id===e)?.label?.en||e,programId:h,programSlug:g,segment:y,cohortId:b,formVariant:f??"v2",urlSearch:window.location.search});try{let e=await fetch("/api/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){let t=await e.json().catch(()=>null),a=`Submission failed (${e.status})`;if("object"==typeof t&&null!==t&&("error"in t&&"string"==typeof t.error&&(a=t.error),"fieldErrors"in t&&"object"==typeof t.fieldErrors&&null!==t.fieldErrors)){let e={},a=null;for(let[r,i]of Object.entries(t.fieldErrors)){if("string"!=typeof i)continue;let t=(0,l.erpnextFieldToQuestionId)(r);e[t]=i,a||(a=t)}a&&(P(t=>({...t,...e})),el(a))}throw Error(a)}let r=await e.json().catch(()=>null);V(!0),(0,o.reportApplySubmission)({applyResponse:r,programSlug:g,formVariant:a,programId:h,cohortId:b,segment:y,answers:I}),window.scrollTo({top:0,behavior:"smooth"})}catch(e){G(e instanceof Error?e.message:"Something went wrong")}finally{R(!1)}},ed=(0,c.backdropFromConfig)(N,C),ep=(0,p.resolveV2Copy)(N?.copy),eu=N?.fonts,ef={};eu?.heading?.family&&(ef["--fontHeading"]=eu.heading.family),eu?.body?.family&&(ef["--fontBody"]=eu.body.family),eu?.arabic?.family&&(ef["--fontArabic"]=eu.arabic.family);let em=[eu?.heading,eu?.body,eu?.arabic].filter(e=>!!e?.family&&!!e?.url),eh=(0,c.v2CssVars)(S,C,N?.colors?.[C],ed),ex="none"!==$.type&&$.url?(0,c.hexAlpha)((0,c.resolveOverlayTint)($.tint,C),($.dim??c.DEFAULT_BACKGROUND_DIM)/100):null;return(0,t.jsxs)("div",{className:`fv2${M?" fv2-ar":""}${"scroll"===$.attachment?" fv2-bg-scroll":""}`,dir:M?"rtl":"ltr",style:{...eh,...ef},children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:d}}),(0,t.jsx)(n.FontLoader,{family:"Space Grotesk",url:"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"}),(0,t.jsx)(n.FontLoader,{family:"Inter",url:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"}),(0,t.jsx)(n.FontLoader,{family:"IBM Plex Sans Arabic",url:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"}),em.map(e=>(0,t.jsx)(n.FontLoader,{family:e.family,url:e.url},e.family+e.url)),(0,t.jsx)("div",{className:"fv2-bg-base","aria-hidden":!0}),"video"===$.type&&$.url?(0,t.jsx)("video",{ref:eo,className:"fv2-bg-video",src:$.url,muted:!0,loop:!0,playsInline:!0,autoPlay:!0,"aria-hidden":!0}):"image"===$.type&&$.url?(0,t.jsx)("div",{className:"fv2-bg-image",style:{backgroundImage:`url(${$.url})`},"aria-hidden":!0}):null,ex?(0,t.jsx)("div",{className:"fv2-bg-overlay",style:{background:ex},"aria-hidden":!0}):null,(0,t.jsxs)("div",{className:"fv2-content",children:[(0,t.jsx)(H,{decorations:e.v2?.decorations,lang:O}),(0,t.jsx)(v,{copy:ep,programName:e.branding.programName[O],lang:O,onLangChange:z,answered:et,total:ea,mode:C}),D?(0,t.jsx)(Y,{copy:ep,lang:O,programName:e.branding.programName[O],title:e.closing.title,message:e.closing.message,ctaUrl:e.closing.ctaUrl,ctaText:e.closing.ctaText}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A,{copy:ep,programName:e.branding.programName,tagline:e.branding.tagline,kpis:F,lang:O,kpiValues:j,onStart:()=>es.current?.scrollIntoView({behavior:"smooth",block:"start"})}),(0,t.jsxs)("div",{className:"fv2-form",ref:es,children:[Z.map((e,a)=>(0,t.jsx)(W,{number:a+1,category:e.category,questions:e.questions,answers:I,errors:er,lang:O,onChange:en},e.category)),(0,t.jsx)(Q,{copy:ep,lang:O,submitting:L,missingCount:ei,submitError:_,onSubmit:ec})]})]}),(0,t.jsx)("footer",{className:"fv2-footer",dir:"ltr",children:ep.footer[O]})]})]})}e.s(["FormV2Renderer",()=>G],433656)}]);