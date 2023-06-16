function toggleBurger() {
    var menu = document.querySelector(".menu");
    var navBar=document.querySelector(".burgerMenu");
    var x=document.querySelector(".burger");

    if (menu.style.display === "flex") {
      menu.style.display = "none";
      navBar.style.background="transparent"
      x.innerHTML='<img src="icons/menu.svg">';
      console.log('innerHtml',x.innerHTML)

    } else {
      menu.style.display = "flex";
      navBar.style.background="#121212"
      x.innerHTML='<img src="icons/close.svg">';


    }
  } 