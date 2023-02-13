import { runScript } from "./share/tool";
import "./style.css";

document.querySelector("head").innerHTML = `
    ${document.querySelector("head").innerHTML}

`;
document.querySelector("#app").innerHTML = `
<!-- 音乐 -->
<audio id="audio" autoplay="autoplay" loop>
      <source src="music/love is gone.mp3" type="audio/mp3" />
</audio>

<main>
	<div class="card">
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3736802.jpg" alt=""></div>
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3737083.jpg" alt=""></div>
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/1909080.jpg" alt=""></div>
		<div class="card-img"><img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/1837606.jpg" alt=""></div>
		<div class="card-text">仪式感</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3605061.jpg" alt="">
		</div>
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/img/pages/home/gallery/valentines/3728195.jpg" alt="">
		</div>
		<div class="card-text">嬉皮</div>
	</div>
	<div class="card">
		<div class="card-img">
			<img src="https://cdn.vectorstock.com/i/preview-2x/85/17/tunnel-of-concentric-hearts-background-vector-44898517.webp" alt="">
		</div>
		<div class="card-text">浪漫</div>
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
`;

window.addEventListener("load", function () {
  const music = document.querySelector("#audio");
  document.body.addEventListener("click", function () {
    if (music.paused) {
      music.play();
    }
  });

  const scripts = document.querySelector("#app").querySelectorAll("script");
  Array.prototype.slice.apply(scripts).reduce((chain, script) => {
    return chain.then(() => runScript(script));
  }, Promise.resolve());
});
