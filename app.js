const x = document.getElementsByClassName("target");
console.log(x);


x.addEventListener('mouseover', function (event) {
console.log(event.target); 
});


