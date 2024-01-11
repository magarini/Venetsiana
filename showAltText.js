document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".project").forEach((item) => {
    let image = item.querySelector("img");
    let altText = item.querySelector("p");
    
    item.addEventListener("mouseover", (e) => {
    //   let image = item.querySelector("img");
    //   let altText = item.querySelector("p");
    //   altText.textContent = imgAlt;
      //    image.replaceWith("hop");
      image.style.display = "none";
      altText.style.display="flex"
    //   console.log(hoveredProject);
    });
    item.addEventListener("mouseleave", (e) => {
        image.style.display = "flex";
        altText.style.display="none"
    });
  });
});
