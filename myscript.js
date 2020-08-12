function on() {
    document.getElementsByClassName("overlay")[0].style.display="block";
    document.getElementsByClassName("headertext")[0].style.color="white";
    document.getElementsByClassName("headerline")[0].style.backgroundColor="white";
    document.getElementsByClassName("headernav")[0].src="images/close.png";
//    document.getElementsByClassName("headertext")[0].style.color="white";
}

function off() {
    document.getElementsByClassName("overlay")[0].style.display="none";
    document.getElementsByClassName("headertext")[0].style.color="black";
    document.getElementsByClassName("headerline")[0].style.backgroundColor="black";
    document.getElementsByClassName("headernav")[0].src="images/Nav.svg";
}

function headerchange() {
    document.getElementsByClassName("headertext")[0].style.color="white";
    document.getElementsByClassName("headerline")[0].style.stroke="white";
    document.getElementsByClassName("headernav")[0].src="images/close.png";
}


//full page scroll

let lastScroll = 0;

window.addEventListener('scroll', function() {
	// scroll down
  if (lastScroll < window.pageYOffset) {
    window.scrollBy(0, innerHeight - 100);
    
  }
  // scroll up
  else if (lastScroll > window.pageYOffset) {
    window.scrollBy(0, window.innerHeight * -1);
  }
  lastScroll = window.pageYOffset;
});