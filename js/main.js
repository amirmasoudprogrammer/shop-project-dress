const search=document.querySelector(".icon-search");
const searchbox =document.querySelector(".search-box");
search.addEventListener("click",search_box);
function search_box() {
    search.classList.toggle("active");


}

const menu=document.querySelector(".menu-dropdown");
const menulist=document.querySelector(".navigation");
menu.addEventListener("click",menustart);
function menustart() {
    menulist.classList.toggle("active");
}
/*popup*/
const black_background=document.querySelector(".black-background");
const close=document.querySelector(".close");
const content_popup=document.querySelector(".content-popup");

setTimeout(start_popup_background,2000);
function start_popup_background() {
    black_background.classList.add("active");
    close.classList.add("active");
    content_popup.classList.add("active");
}
close.addEventListener("click",remove_popup);
function remove_popup() {
    black_background.classList.remove("active");
    close.classList.remove("active");
    content_popup.classList.remove("active");
}
/*popup*/