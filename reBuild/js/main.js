const toggler = document.querySelector('.home__first-menu--toggler');
const menu = document.querySelector('.home__first-menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 505 || document.documentElement.scrollTop > 500) {
//     //document.getElementById("topPane").className = "hide";
//     document.getElementById("bottomPane").className = "show";
//   } else {
//     //document.getElementById("topPane").className = "show";
//     document.getElementById("bottomPane").className = "hide";
//   }
// }
