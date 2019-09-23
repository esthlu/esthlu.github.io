function toggleMenu() {
  var element = document.getElementById("menu-links")
  if (element.classList) {
    element.classList.toggle("hide");
  }
  else {
    // IE solution
    var classes = element.className.split(" ");
    var i = classes.indexOf("hide");

    if (i >= 0) {
      classes.splice(i, 1);
    }
    else {
      classes.push("hide");
      element.className = classes.join(" ");
    }
  }
}
