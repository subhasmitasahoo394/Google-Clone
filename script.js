const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const luckyBtn = document.getElementById("luckyBtn");

// Trigger search on Enter key
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchGoogle();
  }
});

// "Google Search" button
searchBtn.addEventListener("click", searchGoogle);

// "I'm Feeling Lucky" button
luckyBtn.addEventListener("click", function () {
  window.location.href = "https://www.google.com/doodles";
});

function searchGoogle() {
  const query = searchInput.value.trim();
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
}
