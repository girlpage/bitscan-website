document.getElementById("download-btn").addEventListener("click", downloadApp);

function downloadApp() {
  const platform = document.getElementById("platform").value;

  if (!platform) {
    alert("Bitte Plattform auswählen");
    return;
  }

  let file = "";

  switch (platform) {
    case "linux":
      file = "assets/downloads/linux-amd64.zip";
      break;
    case "mac_arm":
      file = "assets/downloads/macos-aarch64_(Apple Silicon).zip";
      break;
    case "mac_intel":
      file = "assets/downloads/macos-x86_64_(Intel).zip";
      break;
    case "windows":
      file = "assets/downloads/windows-amd64.zip";
      break;
  }

  const link = document.createElement("a");
  link.href = file;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const img3 = document.querySelector(".img-3");

const images = [img1, img2, img3];
let currentIndex = 0;


images.forEach(img => img.style.display = "none");


images[currentIndex].style.display = "block";

setInterval(() => {

  images[currentIndex].style.display = "none";

  currentIndex = (currentIndex + 1) % images.length;

  images[currentIndex].style.display = "block";
}, 1000);

document.getElementById("github-btn").addEventListener("click", () => {
  window.open("https://github.com/tamtamtlb/bit-scan.git", "_blank");
});