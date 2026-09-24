<script src="script.js"></script>
// Menampilkan pesan sambutan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  alert("Selamat datang di portofolio Esteria!");
});

// Mengubah warna tombol sosial media saat diklik
const socialButtons = document.querySelectorAll(".social-links a");
socialButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "#ff9f43";
  });
});

