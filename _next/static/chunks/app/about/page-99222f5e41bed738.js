(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{8710:function(e,t,s){Promise.resolve().then(s.bind(s,141))},7907:function(e,t,s){"use strict";var n=s(5313);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}})},141:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var n=s(3827),i=s(4090),a=s(703),r=s(5518),l=s(1189);s(4930);let o=e=>{let{value:t,label:s,prefix:a="",suffix:r="",animationDelay:l}=e,[o,c]=(0,i.useState)(0),[d,u]=(0,i.useState)(!1),x=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new IntersectionObserver(t=>{let[s]=t;s.isIntersecting&&(u(!0),e.disconnect())},{threshold:.1});return x.current&&e.observe(x.current),()=>{e.disconnect()}},[]),(0,i.useEffect)(()=>{if(!d)return;let e=Math.round(2e3/(1e3/60)),s=t/e,n=0,i=setInterval(()=>{c(Math.min(Math.ceil(s*++n),t)),n===e&&clearInterval(i)},1e3/60);return()=>clearInterval(i)},[d,t]),(0,n.jsxs)("div",{ref:x,className:"metric-item ".concat(d?"fade-in-animation ".concat(l):""),children:[(0,n.jsxs)("div",{className:"metric-value",children:[a,o.toLocaleString(),r]}),(0,n.jsx)("div",{className:"metric-label",children:s})]})};function c(){let[e,t]=(0,i.useState)(!1),s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new IntersectionObserver(s=>{let[n]=s;n.isIntersecting&&(t(!0),e.disconnect())},{threshold:.1});return s.current&&e.observe(s.current),()=>{e.disconnect()}},[]),(0,n.jsxs)("div",{ref:s,className:"metrics-container ".concat(e?"fade-in-animation":""),children:[(0,n.jsx)(o,{value:4,label:"Years Experience",animationDelay:"delay-100"}),(0,n.jsx)(o,{value:100,label:"Successful Investments",suffix:"+",animationDelay:"delay-200"}),(0,n.jsx)(o,{value:150,prefix:"$",label:"Funds Given",suffix:"K+",animationDelay:"delay-300"}),(0,n.jsx)(o,{value:10,label:"Founders Served",suffix:"+",animationDelay:"delay-400"})]})}var d=s(8792),u=s(74);function x(){let[e,t]=(0,i.useState)(!1),[s,a]=(0,i.useState)(!1),r=(0,i.useRef)(null),l=(0,i.useMemo)(()=>[0,120,240],[]),o=s?1.5:8;return(0,i.useEffect)(()=>{let e=r.current;if(!e)return;let s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(setTimeout(()=>{t(!0)},300),s.disconnect())})},{threshold:.5});return s.observe(e),()=>{e&&s.unobserve(e),s.disconnect()}},[]),(0,n.jsxs)("div",{ref:r,className:"relative flex items-center justify-center h-[120px] w-[120px]",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,n.jsx)(d.default,{href:"/flow",className:"z-10",children:(0,n.jsx)("div",{className:"relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110",children:(0,n.jsx)("span",{className:"text-base font-medium",children:"Flow"})})}),(0,n.jsx)(u.E.div,{className:"absolute inset-0 rounded-full border border-gray-200 border-dashed opacity-0",animate:{opacity:e?.5:0,scale:e?1:.8,borderColor:s?"#000":"#e5e5e5"},transition:{duration:.6,ease:"easeOut"}}),l.map((t,i)=>(0,n.jsx)(u.E.div,{className:"absolute",initial:{rotate:t,opacity:0,scale:.5},animate:{rotate:e?t-360:t,opacity:e?1:0,scale:e?1:.5},transition:{rotate:{duration:o,repeat:1/0,ease:"linear",delay:.05*i},opacity:{duration:.6,delay:.1*i},scale:{duration:.6,delay:.1*i}},style:{width:"100%",height:"100%"},children:(0,n.jsx)("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",children:(0,n.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s?"animate-pulse":"",children:(0,n.jsx)("path",{d:"M12 4L4 12L12 20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},i))]})}var m=s(7907);function h(){let[e,t]=(0,i.useState)(!1),[s,a]=(0,i.useState)(!1),r=(0,m.useRouter)(),[l,o]=(0,i.useState)(0);(0,i.useEffect)(()=>{o(window.innerWidth);let e=()=>{o(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.useEffect)(()=>{let t;return e?t=setTimeout(()=>{a(!0)},300):a(!1),()=>clearTimeout(t)},[e]);let c=Math.min(.25*l,300);return(0,n.jsxs)("div",{className:"inline-block relative",children:[(0,n.jsxs)("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full",children:[(0,n.jsx)(u.E.div,{initial:{width:0,opacity:0},animate:{width:e?c:0,opacity:e?s?0:1:0,x:e?-8:0},transition:{duration:.5,ease:"easeOut"},children:(0,n.jsx)("div",{className:"h-[2px] bg-current w-full"})}),(0,n.jsx)(u.E.div,{className:"absolute top-1/2 left-[30px] -translate-y-1/2 whitespace-nowrap",initial:{opacity:0,scale:0},animate:{opacity:s?1:0,scale:s?1:0,x:s?-40:0},transition:{duration:.3,ease:"easeOut",delay:.1},children:(0,n.jsx)("span",{className:"text-base font-medium",children:"crypto"})})]}),(0,n.jsxs)("div",{className:"absolute right-0 top-1/2 -translate-y-1/2 translate-x-full",children:[(0,n.jsx)(u.E.div,{initial:{width:0,opacity:0},animate:{width:e?c:0,opacity:e?s?0:1:0,x:e?8:0},transition:{duration:.5,ease:"easeOut"},children:(0,n.jsx)("div",{className:"h-[2px] bg-current w-full"})}),(0,n.jsx)(u.E.div,{className:"absolute top-1/2 right-[30px] -translate-y-1/2 whitespace-nowrap",initial:{opacity:0,scale:0},animate:{opacity:s?1:0,scale:s?1:0,x:s?40:0},transition:{duration:.3,ease:"easeOut",delay:.2},children:(0,n.jsx)("span",{className:"text-base font-medium",children:"non-crypto"})})]}),(0,n.jsx)("div",{onClick:()=>{r.push("/about/portfolio")},onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"cursor-pointer",children:(0,n.jsx)(u.E.div,{className:"relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black text-white transition-all duration-300",animate:{scale:e?1.1:1,boxShadow:e?"0 0 30px rgba(0, 0, 0, 0.2)":"0 0 0 rgba(0, 0, 0, 0)"},transition:{duration:.3},children:(0,n.jsx)("span",{className:"text-lg font-medium",children:"Portfolio"})})})]})}s(1027),s(4057);let f=["ignite","spark","fuel","surge","light","rouse"];function p(){let[e,t]=(0,i.useState)(!1),[s,o]=(0,i.useState)(null),[u,m]=(0,i.useState)(!1),[p,b]=(0,i.useState)(!1),j=(0,i.useRef)(null),[v,y]=(0,i.useState)(!1),[g,w]=(0,i.useState)(0),[N,k]=(0,i.useState)(f[0]),[S,E]=(0,i.useState)(!0);(0,i.useEffect)(()=>{if(S){if(N.length<f[g].length){let e=setTimeout(()=>{k(f[g].substring(0,N.length+1))},200);return()=>clearTimeout(e)}{let e=setTimeout(()=>{E(!1)},2e3);return()=>clearTimeout(e)}}if(N.length>0){let e=setTimeout(()=>{k(N.substring(0,N.length-1))},100);return()=>clearTimeout(e)}w((g+1)%f.length),E(!0)},[N,g,S]);let C=e=>{if(!e)return!1;let t=e.getBoundingClientRect();return t.top>=0&&t.top<=.7*(window.innerHeight||document.documentElement.clientHeight)};(0,i.useEffect)(()=>{let e=()=>{C(j.current)&&!v&&y(!0)};return window.addEventListener("scroll",e),e(),()=>window.removeEventListener("scroll",e)},[v]);let L=()=>t(!1),z=e=>{o(e),"funding"===e?(window.open("https://q97htoe4h2i.typeform.com/to/G4LYtSlt","_blank"),L()):"partnership"===e&&b(!0)};return(0,n.jsxs)("main",{className:"w-full bg-white font-suisse text-primary antialiased",children:[(0,n.jsx)("link",{rel:"preload",href:"/x-logo.png",as:"image",type:"image/png"}),(0,n.jsx)("link",{rel:"preload",href:"/fire-icon.png",as:"image",type:"image/png"}),(0,n.jsx)(r.default,{}),(0,n.jsxs)("main",{className:"container size-full w-full px-4 md:px-0 md:w-[50%]",children:[(0,n.jsxs)("section",{className:"pb-[140px] pt-[144px] text-center",children:[(0,n.jsx)("div",{style:{opacity:1,transform:"none"},children:(0,n.jsx)(l.Z,{href:"/",size:"md",children:"About"})}),(0,n.jsx)("div",{style:{opacity:1,transform:"none"},children:(0,n.jsx)("div",{className:"mt-12",children:(0,n.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,n.jsx)("a",{href:"https://x.com/monocapital__",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity",children:(0,n.jsx)("div",{className:"border-border flex size-16 items-center justify-center rounded-full border bg-black",style:{opacity:1,transform:"none"},children:(0,n.jsx)(a.default,{src:"/x-logo.png",alt:"X",className:"size-8 object-contain",width:32,height:32,priority:!0,loading:"eager",fetchPriority:"high",sizes:"32px",quality:100})})})})})}),(0,n.jsx)("div",{style:{opacity:1,transform:"none"},children:(0,n.jsxs)("p",{className:"tagline-enhanced mt-28 text-center px-4 md:px-0 ignite-container",children:[(0,n.jsx)("span",{className:"mobile-wrap-text",children:"We"}),(0,n.jsx)("span",{className:"relative mx-1 mobile-nowrap",children:(0,n.jsxs)("span",{className:"relative z-10",children:[(0,n.jsx)("span",{className:"typewriter-text",children:N}),(0,n.jsx)("span",{className:"typewriter-cursor",children:"|"})]})}),(0,n.jsx)("span",{className:"mobile-wrap-text last",children:"visionary leaders to forge legendary business legacies"})]})}),(0,n.jsx)("div",{ref:j,className:"scroll-reveal mt-16 px-4 mx-auto max-w-md ".concat(v?"visible":""),children:(0,n.jsxs)("p",{className:"mt-10 px-4 mx-auto max-w-md",children:[(0,n.jsxs)("span",{className:"md:hidden",children:["Team of Any Size • Any Startup • Global Coverage • Fast Approval • Up to $100K",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsxs)("span",{className:"hidden md:block",children:["Team of Any Size",(0,n.jsx)("br",{}),"Any Startup",(0,n.jsx)("br",{}),"Global Coverage",(0,n.jsx)("br",{}),"Fast Approval",(0,n.jsx)("br",{}),"Up to $100K",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),"Beyond Capital - Consultation, Mentorship, Network, Technical Assistance, Tools, Audits"]})}),(0,n.jsx)("div",{style:{opacity:1,transform:"none"},children:(0,n.jsx)("div",{className:"mt-20",children:(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("button",{onClick:()=>{t(!0),o(null),m(!1),b(!1)},className:"z-10 py-2 px-6 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 focus:outline-none text-base font-medium",children:"Apply Now"}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:"Contact us - we'll reply fast"})]})})}),(0,n.jsx)("div",{style:{opacity:1,transform:"none"},className:"mt-24 mb-16 flex justify-center",children:(0,n.jsx)(x,{})}),(0,n.jsx)("div",{style:{opacity:1,transform:"none"},className:"my-20 flex justify-center",children:(0,n.jsx)(h,{})}),(0,n.jsx)("div",{style:{opacity:1,transform:"none"},children:(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"animated-underline",children:"Funding from $1 - Start Something."})})}),(0,n.jsxs)("div",{style:{opacity:1,transform:"none"},className:"mt-16 mb-16",children:[(0,n.jsx)("h3",{className:"text-center text-lg font-medium mb-8",children:"Our Success in Numbers"}),(0,n.jsx)(c,{})]}),(0,n.jsx)("div",{style:{opacity:1,transform:"none"},className:"mt-20 mb-16 flex justify-center",children:(0,n.jsx)(d.default,{href:"/why-us",className:"inline-flex items-center justify-center rounded-full border border-primary bg-transparent py-3 px-6 text-sm font-medium transition-colors duration-300 hover:bg-black hover:text-white",children:"Why Us"})})]}),(0,n.jsx)("div",{className:"fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center bg-transparent hidden md:flex",children:(0,n.jsx)("div",{style:{opacity:1},children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)(l.Z,{href:"/",size:"sm",children:(0,n.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.31066 8.7502L8.60176 13.0413L7.5411 14.102L1.96967 8.53053C1.67678 8.23763 1.67678 7.76276 1.96967 7.46987L7.5411 1.89844L8.60176 2.9591L4.31066 7.2502H14.5V8.7502H4.31066Z",fill:"currentColor"})})})})})})]}),e&&(0,n.jsx)("div",{className:"fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 touch-none",onClick:L,children:(0,n.jsxs)("div",{className:"bg-white rounded-lg w-full max-w-md relative overflow-hidden shadow-xl animate-fadeIn",onClick:e=>e.stopPropagation(),children:[(0,n.jsx)("button",{className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",onClick:L,children:(0,n.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,n.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),(0,n.jsx)("div",{className:"p-6 md:p-8",children:p?(0,n.jsxs)("div",{className:"text-center py-8",children:[(0,n.jsx)("div",{className:"text-amber-500 text-4xl mb-4",children:"!"}),(0,n.jsx)("h2",{className:"text-xl font-medium mb-2",children:"Partnership Unavailable"}),(0,n.jsxs)("p",{className:"text-gray-600 mb-6",children:["Partnership is currently unavailable.",(0,n.jsx)("br",{}),"Please consider applying for funding instead."]}),(0,n.jsxs)("div",{className:"flex gap-3 justify-center",children:[(0,n.jsx)("button",{onClick:()=>z("funding"),className:"px-6 py-2.5 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors",children:"Apply for Funding"}),(0,n.jsx)("button",{onClick:L,className:"px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors",children:"Close"})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{className:"text-xl font-medium mb-6 text-center",children:"What are you applying for?"}),(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsx)("button",{onClick:()=>z("funding"),className:"py-4 px-6 bg-white border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-200 font-medium text-center",children:"For Funding"}),(0,n.jsx)("button",{onClick:()=>z("partnership"),className:"py-4 px-6 bg-white border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-200 font-medium text-center",children:"For Partnership"})]})]})})]})}),(0,n.jsx)("h2",{id:"radix-:rg:",style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",whiteSpace:"nowrap",overflowWrap:"normal"},children:"Help dialog"})]})}},5518:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var n=s(3827),i=s(8792),a=s(4090);function r(){let[e,t]=(0,a.useState)(!0),[s,r]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=()=>{window.scrollY>s&&window.scrollY>100?t(!1):t(!0),r(window.scrollY)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[s]),(0,n.jsx)("header",{className:"fixed left-0 right-0 top-6 z-20 flex justify-center text-white mix-blend-difference transition-all duration-500 md:top-10 ".concat(e?"":"-translate-y-20 opacity-0"),children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsxs)("h2",{className:"flex h-6 items-start justify-start",children:[(0,n.jsx)("span",{className:"text-[24px] leading-none",children:"Mono Capital"}),(0,n.jsx)("span",{className:"text-[10px] font-light leading-none",children:"\xae"})]})})})}},1189:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(3827),i=s(8792);function a(e){let{href:t,children:s,size:a="md",className:r=""}=e;return(0,n.jsx)(i.default,{href:t,className:"inline-flex text-wrap relative items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:bg-primary focus-visible:text-white disabled:pointer-events-none disabled:opacity-50 bg-white rounded-full text-primary hover:bg-primary hover:text-white border-primary border data-[state=on]:bg-primary data-[state=on]:text-white active:bg-primary active:text-white ".concat("sm"===a?"size-14":"lg"===a?"size-56":"size-28"," group ").concat(r),children:s})}},1027:function(){},4930:function(){},4057:function(){}},function(e){e.O(0,[792,74,703,971,69,744],function(){return e(e.s=8710)}),_N_E=e.O()}]);