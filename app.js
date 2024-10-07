// Open and close message popup
document.getElementById("message-icon").addEventListener("click", function () {
  document.getElementById("message-popup").classList.remove("hidden");
});

function closePopup() {
  document.getElementById("message-popup").classList.add("hidden");
}

// Initialize Swiper for image slider

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true, // Agar slider bisa loop kembali ke slide pertama

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Agar pagination bisa di-klik
  },

  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Autoplay (opsional)
  // autoplay: {
  //   delay: 3000, // Delay dalam milidetik
  //   disableOnInteraction: false, // Agar autoplay tidak berhenti saat berinteraksi
  // },
});

const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const progress = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");

let isPlaying = false;

// Toggle Play/Pause
playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audioPlayer.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  } else {
    audioPlayer.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  }
  isPlaying = !isPlaying;
});

// Update progress bar and time display
audioPlayer.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audioPlayer;
  progress.value = (currentTime / duration) * 100;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
});

// Update audio current time based on progress bar
progress.addEventListener("input", (e) => {
  const { duration } = audioPlayer;
  const value = e.target.value;
  audioPlayer.currentTime = (value / 100) * duration;
});

// Format time to MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
