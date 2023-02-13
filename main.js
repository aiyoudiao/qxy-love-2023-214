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
