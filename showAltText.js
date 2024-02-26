document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".project").forEach((item) => {
    // let image = item.querySelector("img");
    // let altText = item.querySelector("p");
    
    item.addEventListener("mouseover", (e) => {
      let image = item.querySelector("img");
      let altText = item.querySelector("p");
    //   altText.textContent = imgAlt;
      //    image.replaceWith("hop");
      image.style.visibility = "hidden";
      altText.style.display="flex"
      console.log(item);
    });
    item.addEventListener("mouseleave", (e) => {
      let image = item.querySelector("img");
      let altText = item.querySelector("p");
        image.style.visibility = "visible";
        altText.style.display="none"
    });
  });

  console.log(document.querySelectorAll(".project"))

});
