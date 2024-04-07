// Jenis Berita Terkini / Terpopuler
function showContent(contentName) {
  var contents = document.querySelectorAll(".berita-terkini");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  document.getElementById(contentName + "-content").style.display = "flex";
}

// Live carousel
document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = document.querySelector("#carouselExampleIndicators");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, // Ganti angka ini dengan interval (dalam milidetik) antara pergeseran gambar
    wrap: true, // Aktifkan wrapping sehingga carousel akan kembali ke awal setelah mencapai gambar terakhir
  });
});

// Modal Ulasan
function kirimUlasan() {
  var rating = document.querySelector('input[name="rating"]:checked');
  var ulasan = document.getElementById("ulasan").value;

  if (!rating) {
    alert("Silakan pilih rating.");
    return;
  }

  var nilaiRating = rating.value;

  console.log("Rating: " + nilaiRating);
  console.log("Ulasan: " + ulasan);

  // Tutup modal
  $("#ulasanModal").modal("hide");
}

// Memastikan hanya satu bintang yang dipilih
const ratings = document.querySelectorAll(".rating input");
ratings.forEach((radio) => {
  radio.addEventListener("click", (event) => {
    ratings.forEach((r) => {
      r.checked = false;
    });
    event.target.checked = true;
  });
});
