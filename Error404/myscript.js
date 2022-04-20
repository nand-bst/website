
var acc = document.getElementsByClassName("products");
    var i;
    console.log(acc);
  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  	console.log('active changed');
    this.classList.toggle("active");
    });
}



document.getElementsByClassName("hamburger-menu")[0].addEventListener("click",function(){
  console.log(document.getElementsByClassName("hamburger-menu"));

	var menuhamburger = document.getElementsByClassName("hamburger-menu");
	menuhamburger[0].style.display="none";

	console.log(document.getElementsByClassName("hamburger-menu-close"));
	document.getElementsByClassName("hamburger-menu-close")[0].style.display="block";

	var leftsection = document.getElementsByClassName("header-leftsection");
	console.log(leftsection);

	leftsection[0].classList.toggle("open");

	document.getElementsByClassName("footer")[0].classList.add("footer-add");

})

document.getElementsByClassName("hamburger-menu-close")[0].addEventListener("click",function(){
	 document.getElementsByClassName("hamburger-menu-close")[0].style.display="none";
	 document.getElementsByClassName("hamburger-menu")[0].style.display="block";
	 document.getElementsByClassName("header-leftsection")[0].classList.remove("open");
	 document.getElementsByClassName("footer")[0].classList.remove("footer-add");
})


var acc = document.getElementsByClassName("header-leftsection-items");
    var i;
    console.log(acc);
  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  	console.log('active changed');

    this.classList.toggle("active");
    });

}