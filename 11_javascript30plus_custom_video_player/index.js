/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('#viewer');
const progress = player.querySelector('.player__timeline');
const progressBar = player.querySelector('.player__progress');
const toggle = player.querySelector('#toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const volumeSlider = player.querySelector(".player__slider[name='volume']");
const rateSlider = player.querySelector(".player__slider[name='playbackRate']");

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip(num) {
 video.currentTime += num;
}

function skipHandler() {
  skip(parseFloat(this.dataset.skip));
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function deltaVolume(val) {
  const prev = parseFloat(video['volume']);
  console.log(val);
  video['volume'] = prev + val;
  volumeSlider.value = prev + val;
}

function deltaPlaybackRate(val) {
  const prev = parseFloat(video['playbackRate']);
  video['playbackRate'] = prev + val;
  rateSlider.value = prev + val;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

window.addEventListener('keydown', (e) => {
  if(e.key === ' ') {
    togglePlay();
  } else if(e.key === 'ArrowRight' && !e.shiftKey) {
    skip(5);
  } else if(e.key === 'ArrowLeft' && !e.shiftKey) {
    skip(-5);
  } else if(e.key === 'ArrowRight' && e.shiftKey) {
    deltaPlaybackRate(0.1);
  } else if(e.key === 'ArrowLeft' && e.shiftKey) {
    deltaPlaybackRate(-0.1);
  } else if(e.key === 'ArrowUp') {
    deltaVolume(0.05);
  } else if(e.key === 'ArrowDown') {
    deltaVolume(-0.05);
  }
});

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skipHandler));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
window.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
window.addEventListener('mouseup', () => mousedown = false);
