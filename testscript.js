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

thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem.style.color = "red";
}

theotherbutton = document.getElementById("theotherbutton");
otheritem2 = document.getElementById("buttontest2");
theotherbutton.addEventListener("click", onButton2Click);
function onButton2Click() {
    otheritem2.style.color = "blue";
}

textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);
function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}

document.getElementById("mouseover").addEventListener("mouseover", mouseOver);
document.getElementById("mouseover").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mouseover").style.color = "red";
}
function mouseOut() {
  document.getElementById("mouseover").style.color = "black";
}
