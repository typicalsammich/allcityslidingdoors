
const menu=document.getElementById("menu"),nav=document.getElementById("navlinks");
if(menu&&nav)menu.addEventListener("click",()=>nav.classList.toggle("open"));
const bar=document.querySelector(".callbar");
const toggleBar=()=>{if(!bar)return;bar.classList.toggle("visible",window.scrollY>220)};
toggleBar();window.addEventListener("scroll",toggleBar,{passive:true});
