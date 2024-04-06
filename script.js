// Jenis Berita Terkini / Terpopuler
function showContent(contentName) {
  var contents = document.querySelectorAll(".berita-terkini");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  document.getElementById(contentName + "-content").style.display = "flex";
}

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
