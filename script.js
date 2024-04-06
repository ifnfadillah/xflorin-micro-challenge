// Jenis Berita Terkini / Terpopuler
function showContent(contentName) {
  var contents = document.querySelectorAll(".berita-terkini");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  document.getElementById(contentName + "-content").style.display = "flex";
}
