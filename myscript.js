
var acc = document.getElementsByClassName("products");
    var i;
    console.log(acc);
  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  	console.log('active changed');
    this.classList.toggle("active");
    });
}


