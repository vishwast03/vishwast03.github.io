var f=Object.defineProperty,p=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var h=(s,t,a)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,x=(s,t)=>{for(var a in t||(t={}))y.call(t,a)&&h(s,a,t[a]);if(d)for(var a of d(t))b.call(t,a)&&h(s,a,t[a]);return s},g=(s,t)=>p(s,v(t));import{r as o,j as i,a as e,L as m,S as w,F as N,R as k,b as S}from"./vendor.d3aeeae8.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=a(l);fetch(l.href,n)}};j();const C=s=>{const t=o.exports.useRef(null),[a,r]=o.exports.useState(!1);return o.exports.useEffect(()=>{t.current.addEventListener("mouseenter",()=>{r(!0)}),t.current.addEventListener("mouseleave",()=>{r(!1)})},[]),i("div",{ref:t,className:`w-32 h-28 m-2 shadow-md ${a?"bg-emerald-500":"bg-gray-100"} rounded-md flex flex-col justify-center items-center transition-colors duration-300 md:m-3 lg:m-4 xl:m-5`,children:[e("i",{className:`${s.icon} text-3xl ${a?"text-gray-50":"text-emerald-500"} md:text-4xl`}),e("span",{className:`text-lg ${a?"text-gray-50":"text-gray-800"} py-2 lg:text-xl`,children:s.name})]})},L=s=>{const t=s.techStack;return i("section",{className:"w-full",id:"about",children:[i("div",{className:"w-[90%] pt-20 mx-auto lg:w-3/4 md:pt-24",children:[e("h2",{className:"text-gray-800 text-3xl font-semibold text-center md:text-4xl lg:text-5xl",children:"About Me"}),e("p",{className:"text-gray-600 text-lg text-center my-6 md:text-xl lg:my-10",children:"I am a full-stack web developer with experience building websites and web applications. I specialize in MERN Stack (MongoDB, Express.js, React.js, and Node.js) and have experience working with Tailwind CSS and Bootstrap."})]}),i("div",{children:[e("h2",{className:"text-gray-800 text-2xl font-semibold text-center my-6 md:text-3xl lg:my-8",children:"Technology Stack"}),e("div",{className:"w-[90%] mx-auto mb-16 flex flex-wrap justify-center lg:w-4/5",children:t.map(a=>e(C,{name:a.name,icon:a.icon},a.name))})]})]})},T=s=>{const t=s.profileLinks;return i("section",{className:"w-full pt-16 sm:pt-20 md:py-16 lg:py-24",id:"contact",children:[e("p",{className:"text-gray-800 text-3xl font-semibold text-center md:text-4xl lg:text-5xl",children:"Contact Me"}),i("div",{className:"w-[90%] mx-auto my-12 bg-emerald-500 rounded rounded-xl sm:w-4/5",children:[e("h2",{className:"text-xl text-gray-50 text-center font-semibold my-2 pt-7 sm:text-2xl md:pt-10 md:my-4 lg:text-4xl",children:"Have something in mind?"}),e("p",{className:"text-gray-100 text-center sm:mx-3 lg:text-xl",children:"If you have any questions or some opportunity, feel free to contact me."}),i("div",{className:"w-fit mx-auto py-4 text-2xl text-gray-50 sm:py-5 md:text-3xl md:py-7",children:[e("a",{className:"m-3 hover:text-gray-300 hover:text-[#EA4335]- transition-colors sm:m-5",href:`mailto:${t.email}`,children:e("i",{className:"fas fa-envelope"})}),e("a",{className:"m-3 hover:text-gray-300 hover:text-[#1DA1F2]- transition-colors sm:m-5",href:t.twitter,children:e("i",{className:"fab fa-twitter"})}),e("a",{className:"m-3 hover:text-gray-300 hover:text-[#0A66C2]- transition-colors sm:m-5",href:t.linkedin,children:e("i",{className:"fab fa-linkedin-in"})})]})]})]})};var E="/assets/image2.1b02ef59.png";const M=s=>{const t=s.profileLinks;return i("footer",{className:"bg-gray-800 py-10",children:[i("div",{className:"flex flex-col justify-center items-center",children:[e("img",{src:E,className:"h-10 rounded-full md:h-12"}),e("h3",{className:"text-gray-50 text-lg font-semibold my-2 md:text-2xl md:my-3",children:"Vishwas Tyagi"})]}),i("div",{className:"mt-3 mb-12 text-lg text-gray-400 flex justify-center md:text-2xl md:mt-5 md:mb-16",children:[e("a",{className:"mx-3 hover:text-gray-50 transition-colors sm:mx-5",href:t.github,target:"_blank",children:e("i",{className:"fab fa-github"})}),e("a",{className:"mx-3 hover:text-gray-50 transition-colors sm:mx-5",href:t.codepen,target:"_blank",children:e("i",{className:"fab fa-codepen"})}),e("a",{className:"mx-3 hover:text-gray-50 transition-colors sm:mx-5",href:t.twitter,target:"_blank",children:e("i",{className:"fab fa-twitter"})}),e("a",{className:"mx-3 hover:text-gray-50 transition-colors sm:mx-5",href:t.linkedin,target:"_blank",children:e("i",{className:"fab fa-linkedin-in"})})]}),i("a",{href:t.repo,target:"_blank",className:"text-gray-50 text-center",children:[e("h3",{className:"my-1 md:my-2",children:"Built by Vishwas Tyagi"}),i("h3",{children:["Made with ",e("i",{className:"fas fa-heart text-[#fe251b] mx-1"}),e("i",{className:"devicon-react-original text-[#61DAFB] mx-1"}),e("i",{className:"devicon-tailwindcss-plain text-[#06B6D4] mx-1"})]})]})]})};var R="/assets/image.42500dd3.png";const P=s=>{const t=s.viewWidth;return i("main",{className:"w-full bg-gray-100 max-h-[60rem] lg:h-screen lg:relative lg:z-0",style:{background:`${t>639?"linear-gradient(70deg, #f3f4f6 46%, #10b981 46%)":""}`},id:"home",children:[i("div",{className:"pt-52 px-7 lg:absolute lg:z-20 lg:bottom-20 lg:left-16 xl:left-24",children:[e("p",{className:"text-emerald-500 text-2xl font-semibold sm:mt-5 md:text-3xl",children:"Hello, I'm"}),e("h1",{className:"text-gray-800 text-3xl font-semibold my-2 sm:text-4xl sm:my-3 md:text-5xl md:my-6",children:"Vishwas Tyagi"}),e("p",{className:"text-gray-600 text-lg mb-10 sm:mb-14",children:"MERN Stack Web Developer"}),e("a",{href:`mailto:${s.email}`,className:"bg-emerald-500 text-gray-50 text-lg font-semibold rounded-md shadow-md px-6 py-2 hover:bg-emerald-600 transition-colors sm:px-10 sm:py-3",children:"Hire Me!"})]}),e("div",{className:"h-72 my-8 flex justify-center sm:h-96 sm:my-0 sm:-mt-40 sm:justify-end md:-mt-56 xl:h-3/4 lg:absolute lg:z-20 lg:bottom-0 lg:right-16 xl:right-32",children:e("img",{className:"h-full sm:mr-5",src:R,alt:"image"})})]})};var $="/assets/icon.e5677958.png";const u=s=>i("ul",{className:`w-fit text-emerald-500 text-center my-5 mx-auto flex flex-col underline-offset-8 lg:flex-row lg:my-0 lg:mx-10 ${s.navFixed?"lg:text-emerald-500":"lg:text-gray-50"}`,children:[e("li",{className:"my-3 lg:my-0 lg:mx-7 xl:mx-12",children:e(m,{activeClass:"underline",to:"home",spy:!0,smooth:!0,duration:500,className:"hover:underline cursor-pointer",children:"Home"})}),e("li",{className:"my-3 lg:my-0 lg:mx-7 xl:mx-12",children:e(m,{activeClass:"underline",to:"about",spy:!0,smooth:!0,offset:-0,duration:500,className:"hover:underline cursor-pointer",children:"About"})}),e("li",{className:"my-3 lg:my-0 lg:mx-7 xl:mx-12",children:e(m,{activeClass:"underline",to:"portfolio",spy:!0,smooth:!0,offset:-20,duration:500,className:"hover:underline cursor-pointer",children:"Portfolio"})}),e("li",{className:"my-3 lg:my-0 lg:mx-7 xl:mx-12",children:e(m,{activeClass:"underline",to:"contact",spy:!0,smooth:!0,offset:-20,duration:500,className:"hover:underline cursor-pointer",children:"Contact"})})]}),B=()=>{const[s,t]=o.exports.useState(!1),a=o.exports.useRef(null);return o.exports.useEffect(()=>{window.addEventListener("scroll",()=>{const r=window.scrollY,l=document.getElementById("navbar").getBoundingClientRect().height;r>l?t(!0):t(!1)}),document.addEventListener("click",r=>{r.target.id==="show-nav"?a.current.classList.toggle("hidden"):a.current.classList.add("hidden")})},[]),i("nav",{className:`w-full h-fit flex justify-between items-center fixed z-10 transition-all ${s?"bg-gray-50 py-2 shadow":"pt-8"}`,id:"navbar",children:[e("div",{className:"mx-6 sm:mx-10 xl:mx-14",id:"logo",children:e(m,{to:"home",smooth:!0,duration:500,className:"cursor-pointer",children:e("img",{className:"h-10 hover:opacity-90 sm:h-14",src:$,alt:"icon"})})}),i("div",{className:"w-fit text-lg font-semibold font-sans relative",id:"nav-links",children:[e("button",{className:`text-2xl text-emerald-500 mx-6 sm:text-3xl lg:hidden ${s?"sm:text-emerald-500":" sm:text-gray-50"}`,children:e("i",{id:"show-nav",className:"fas fa-bars"})}),e("div",{ref:a,className:"w-[50vw] bg-gray-100 absolute right-5 rounded-md shadow-lg hidden sm:w-[35vw] lg:hidden",children:e(u,{})}),e("div",{className:"hidden lg:block",children:e(u,{navFixed:s})})]})]})},H=s=>{const t=s.project,a=t.tags;return i("div",{className:"w-72 my-6 mx-auto rounded-md bg-gray-50 shadow-lg sm:w-80 sm:my-8 lg:my-10",children:[e("img",{className:"rounded-t-md border-b",src:t.image,alt:"project screenshot"}),i("div",{className:"px-3 py-3 md:px-5",children:[e("div",{className:"flex",children:a&&a.map(r=>e("img",{className:"mx-1",src:`https://img.shields.io/badge/${r.name}-informational?style=flat&logo=${r.logo}&logoColor=white&color=10b981`,alt:r.name},r.name))}),e("h3",{className:"text-xl text-gray-800 font-semibold py-2 md:text-2xl",children:t.title}),e("p",{className:"text-lg text-gray-600 lg:text-xl",children:t.subtitle}),i("div",{className:"w-1/2 text-2xl text-gray-600 mx-auto my-2 flex justify-evenly md:text-3xl md:my-4",children:[t.preview&&e("a",{href:t.preview,target:"_blank",children:e("i",{className:"fas fa-external-link-alt hover:text-emerald-500 transition-colors"})}),t.github&&e("a",{href:t.github,target:"_blank",children:e("i",{className:"devicon-github-original hover:text-emerald-500 transition-colors"})})]})]})]})};const A=s=>{const t=o.exports.useRef(null),a=s.projects,r=s.sliderSettings,l=()=>{t.current.slickPrev()},n=()=>{t.current.slickNext()};return i("section",{className:"w-full bg-gray-100 pb-10 md:pb-14",id:"portfolio",children:[i("div",{className:"w-[90%] mx-auto pt-16 flex justify-between items-center sm:pt-20 lg:pt-24 2xl:w-[80rem]",children:[i("div",{children:[e("p",{className:"text-emerald-500 text-xl md:text-2xl lg:text-3xl",children:"Portfolio"}),e("h2",{className:"text-gray-800 text-3xl font-semibold my-2 md:text-4xl lg:text-5xl lg:my-4",children:"Latest Projects"})]}),e("a",{href:s.github,target:"_blank",className:"bg-gray-100 text-emerald-500 text-lg font-medium rounded-md px-2 py-1 border border-emerald-500 hover:bg-emerald-500 hover:text-gray-50 transition-colors sm:font-semibold sm:px-5 sm:py-2 sm:border-2 md:px-10 md:py-3",children:"All Work"})]}),e("div",{className:"w-[90%] mx-auto 2xl:w-[70rem]",id:"projects",children:e(w,g(x({},r),{ref:t,children:a.map(c=>e(H,{project:c},c.title))}))}),i("div",{className:"w-24 mx-auto text-2xl text-gray-600 flex justify-between md:text-3xl lg:text-4xl",children:[e("button",{onClick:l,children:e("i",{className:"fas fa-chevron-left hover:text-emerald-500 transition-colors"})}),e("button",{onClick:n,children:e("i",{className:"fas fa-chevron-right hover:text-emerald-500 transition-colors"})})]})]})};function F(){const[s,t]=o.exports.useState(window.innerWidth),a={email:"vishwast8126@gmail.com",twitter:"https://twitter.com/VishwasT03",linkedin:"https://www.linkedin.com/in/vishwas-tyagi/",github:"https://github.com/vishwast03",codepen:"https://codepen.io/vishwast03",repo:"https://github.com/vishwast03/vishwast03.github.io"},r=[{name:"React",icon:"devicon-react-original"},{name:"Express",icon:"devicon-express-original"},{name:"Node.js",icon:"devicon-nodejs-plain"},{name:"MongoDB",icon:"devicon-mongodb-plain"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"Tailwind CSS",icon:"devicon-tailwindcss-plain"},{name:"Bootstrap",icon:"devicon-bootstrap-plain"},{name:"C++",icon:"devicon-cplusplus-plain"},{name:"Git",icon:"devicon-git-plain"},{name:"GitHub",icon:"devicon-github-original"},{name:"VS Code",icon:"devicon-vscode-plain"},{name:"CSS",icon:"devicon-css3-plain"},{name:"HTML",icon:"devicon-html5-plain"},{name:"Java",icon:"devicon-java-plain"},{name:"Python",icon:"devicon-python-plain"}],l=[{image:"https://i.imgur.com/JmXE90V.png",title:"Chat Soft",subtitle:"Real-time multi-client chat application",tags:[{name:"Socket.io",logo:"socket.io"},{name:"Express",logo:"express"},{name:"Node.js",logo:"node.js"}],preview:"",github:"https://github.com/vishwast03/Chat-Soft"},{image:"https://i.imgur.com/6knYfcD.png",title:"CodeSet",subtitle:"Online Code Editor for HTML, CSS and JavaScript",tags:[{name:"React",logo:"react"},{name:"Tailwind CSS",logo:"tailwindcss"}],preview:"https://vishwast03.github.io/CodeSet-v2/",github:"https://github.com/vishwast03/CodeSet-v2"},{image:"https://i.imgur.com/Bidx0aN.png",title:"Markdown Previewer",subtitle:"Simple Github flavored markdown previewer",tags:[{name:"React",logo:"react"},{name:"Tailwind CSS",logo:"tailwindcss"}],preview:"https://vishwast03.github.io/Markdown-Previewer/",github:"https://github.com/vishwast03/Markdown-Previewer"},{image:"https://i.imgur.com/52YYC3f.png",title:"Notes Keeper",subtitle:"Chrome extension for keeping notes",tags:[{name:"HTML",logo:"html5"},{name:"CSS",logo:"css3"},{name:"JavaScript",logo:"javascript"}],preview:"",github:"https://github.com/vishwast03/Notes-Keeper"}],n={dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,swipeToSlide:!0,arrows:!1,responsive:[{breakpoint:1140,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:760,settings:{slidesToShow:1,slidesToScroll:1}}]};return o.exports.useEffect(()=>{window.addEventListener("resize",()=>{t(window.innerWidth)})},[]),i(N,{children:[e(B,{}),e(P,{viewWidth:s,email:a.email}),e(L,{techStack:r}),e(A,{projects:l,sliderSettings:n,github:a.github}),e(T,{profileLinks:a}),e(M,{profileLinks:a})]})}k.render(e(S.StrictMode,{children:e(F,{})}),document.getElementById("root"));