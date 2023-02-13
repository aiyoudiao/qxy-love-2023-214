(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const d=t=>new Promise((r,i)=>{const c=document.createElement("script");c.innerHTML=t.innerHTML;const e=t.getAttribute("src");e&&c.setAttribute("src",e),c.onload=()=>r(),c.onerror=s=>i(),document.head.appendChild(c),document.head.removeChild(c),e||r()});document.querySelector("head").innerHTML=`
    ${document.querySelector("head").innerHTML}

`;document.querySelector("#app").innerHTML=`
<!-- \u97F3\u4E50 -->
<audio id="audio" autoplay="autoplay" loop>
      <source src="music/love is gone.mp3" type="audio/mp3" />
</audio>

<main>
	<div class="card">
		<div class="card-img"><img src="https://source.unsplash.com/900x900/?love&214" alt=""></div>
		<div class="card-img"><img src="https://source.unsplash.com/900x900/?love&2142" alt=""></div>
		<div class="card-img"><img src="https://source.unsplash.com/900x900/?love&21422" alt=""></div>
		<div class="card-img"><img src="https://source.unsplash.com/900x900/?love&214222" alt=""></div>
		<div class="card-text">Space</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://source.unsplash.com/320x800/?love&2142222" alt="">
		</div>
		<div class="card-img">
			<img src="https://source.unsplash.com/320x800/?love&21422222" alt="">
		</div>
		<div class="card-text">Sea</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://source.unsplash.com/900x900/?love&21422222222222" alt="">
		</div>
		<div class="card-text">Fish</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://source.unsplash.com/900x900/?love&2142222222" alt="">
		</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://source.unsplash.com/700x100/?love&21422222222" alt="">
		</div>
		<div class="card-img">
			<img src="https://source.unsplash.com/700x100/?love&214222222222" alt="">
		</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://source.unsplash.com/340x220/?love&2142222222222" alt="">
		</div>
		<div class="card-img">
			<img src="https://source.unsplash.com/340x220/?love&21422222222222" alt="">
		</div>
	</div>
</main>
`;window.addEventListener("load",function(){const t=document.querySelector("#audio");document.body.addEventListener("click",function(){t.paused&&t.play()});const r=document.querySelector("#app").querySelectorAll("script");Array.prototype.slice.apply(r).reduce((i,c)=>i.then(()=>d(c)),Promise.resolve())});
