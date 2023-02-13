(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=r=>new Promise((i,s)=>{const c=document.createElement("script");c.innerHTML=r.innerHTML;const e=r.getAttribute("src");e&&c.setAttribute("src",e),c.onload=()=>i(),c.onerror=t=>s(),document.head.appendChild(c),document.head.removeChild(c),e||i()});document.querySelector("head").innerHTML=`
    ${document.querySelector("head").innerHTML}

`;document.querySelector("#app").innerHTML=`
<!-- \u97F3\u4E50 -->
<audio id="audio" autoplay="autoplay" loop>
      <source src="music/love is gone.mp3" type="audio/mp3" />
</audio>

<main>
	<div class="card">
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3736802.jpg" alt=""></div>
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3737083.jpg" alt=""></div>
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/1909080.jpg" alt=""></div>
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/1837606.jpg" alt=""></div>
		<div class="card-text">\u4EEA\u5F0F\u611F</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3605061.jpg" alt="">
		</div>
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3728195.jpg" alt="">
		</div>
		<div class="card-text">\u5B09\u76AE</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/i/preview-2x/85/17/tunnel-of-concentric-hearts-background-vector-44898517.webp" alt="">
		</div>
		<div class="card-text">\u6D6A\u6F2B</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://cdn5.vectorstock.com/i/1000x1000/75/29/happy-valentines-day-vector-34227529.jpg" alt="">
		</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/i/preview-2x/20/84/valentines-day-banner-template-vector-45702084.webp" alt="">
		</div>
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/i/preview-2x/02/34/beautiful-red-3d-hearts-valentines-day-banner-vector-45900234.webp" alt="">
		</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/i/preview-2x/32/76/valentines-day-greeting-card-vector-40893276.webp" alt="">
		</div>
		<div class="card-img">
			<img src="https://cdn3.vectorstock.com/i/1000x1000/66/52/valentines-day-smoothie-vector-45466652.jpg" alt="">
		</div>
	</div>
</main>
`;window.addEventListener("load",function(){const r=document.querySelector("#audio");document.body.addEventListener("click",function(){r.paused&&r.play()});const i=document.querySelector("#app").querySelectorAll("script");Array.prototype.slice.apply(i).reduce((s,c)=>s.then(()=>d(c)),Promise.resolve())});
