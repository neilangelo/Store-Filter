const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    if (filter === "all") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(filter)) {
        item.style.display = "block";
        git;
      } else {
        item.style.display = "none";
      }
    }
  });
});
