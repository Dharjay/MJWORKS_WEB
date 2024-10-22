// Listen for changes in the viewport width

const packageGrid = document.querySelector(".package_grid:nth-child(2)");

packageGrid.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent default vertical scroll behavior
  packageGrid.scrollLeft += e.deltaY; // Scroll horizontally instead
});
