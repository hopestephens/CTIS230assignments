myitem = document.getElementById("firsttest");

//establishes the input (click)
myitem.addEventListener("click", onClick);

//output of changing the color to green when the starting event occurs
function onClick() {
    myitem.style.color = "green";
    myitem.style.fontWeight = "bold";
}
myitem.addEventListener("mouseout", mouseout);

function mouseout() {
  myitem.style.color = "";
  myitem.style.fontWeight = "";

}
