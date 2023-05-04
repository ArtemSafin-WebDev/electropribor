document.addEventListener("DOMContentLoaded", () => {
  const accordions = Array.from(
    document.querySelectorAll(".page-sidebar__nav-accordion")
  );
  accordions.forEach((accordion) => {
    const btn = accordion.querySelector("button");
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      accordion.classList.toggle("active");
    });
  });
});
