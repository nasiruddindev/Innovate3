const menuOpenButon=document.getElementById("menu-open-button");
const menuCloseButon=document.getElementById("menu-close-button");

menuOpenButon.addEventListener("click",() =>{
  document.body.classList.toggle("show-mobile-menu")
})
menuCloseButon.addEventListener("click",() => menuOpenButon.click())
