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

document.addEventListener("DOMContentLoaded", function () {
  const confettiContainer = document.getElementById("confetti");

  // Function untuk men-generate confetti
  function createConfettiPiece() {
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti-piece");

    // Randomize warna, posisi horizontal, dan animasi delay
    const hue = Math.random();
    confettiPiece.style.setProperty("--hue", hue); // Warna HSL
    confettiPiece.style.left = `${Math.random() * 100}vw`; // Posisi X
    confettiPiece.style.animationDelay = `${Math.random() * 1.5}s`; // Delay animasi
    confettiPiece.style.animationDuration = `${2 + Math.random() * 1.5}s`; // Durasi animasi

    confettiContainer.appendChild(confettiPiece);

    // Remove after animation ends to prevent overflow
    setTimeout(() => {
      confettiPiece.remove();
    }, 3500);
  }

  // Generate banyak confetti
  for (let i = 0; i < 150; i++) {
    setTimeout(createConfettiPiece, i * 20); // Interval untuk membuat confetti satu per satu
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Get all images inside the swiper slides
  const images = document.querySelectorAll(".swiper-slide img");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      modalImage.src = this.src; // Set the clicked image as modal image
      modal.classList.remove("hidden"); // Show the modal
    });
  });

  // Close modal when 'x' is clicked
  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  // Close modal when clicked outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Get all images inside the horizontal scroll container
  const posterImages = document.querySelectorAll(".poster-img");

  posterImages.forEach((image) => {
    image.addEventListener("click", function () {
      modalImage.src = this.src; // Set the clicked image as modal image
      modal.classList.remove("hidden"); // Show the modal
    });
  });

  // Close modal when 'x' is clicked
  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });

  // Close modal when clicked outside the image
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll(".fade-in");

  function checkFadeIn() {
    const triggerBottom = window.innerHeight / 5 * 4; // Mengatur kapan fade-in terjadi

    fadeIns.forEach((fadeIn) => {
      const boxTop = fadeIn.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        fadeIn.classList.add("visible");
      } else {
        fadeIn.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn(); // Memanggil fungsi saat halaman pertama kali dimuat
});