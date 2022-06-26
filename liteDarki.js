const func = () => {

  let a = document.getElementById("checkbox")
  // console.log("reached here 0");
  // console.log(a.checked);
  let size;
  if (a.checked) {
    // console.log("reached here");
    document
      .getElementById("mainContent")
      .querySelectorAll("div")[0].style.backgroundColor = "#282424";
    let bodyContent = document
      .getElementById("mainContent")
      .querySelectorAll("div");
    size = Object.keys(bodyContent).length;
    for (let i = 0; i < size; i++) {
      document
        .getElementById("mainContent")
        .querySelectorAll("div")[i].style.backgroundColor = "#282424";
    }
    // console.log(typeof bodyContent);
    document.querySelector("body").style.backgroundColor = "#201c1c";
    document.querySelectorAll("strong")[0].style.color = "#e8e6e3";
    document.getElementsByClassName("timingInfo")[0].style.color = "#e8e6e3";
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "#201c1c";
    document.getElementsByClassName("brand")[0].style.backgroundColor =
      "#201c1c";
    document.getElementsByClassName("brand")[0].style.color = "#ece4e4";
    document.getElementsByClassName("inHeading")[0].style.backgroundColor =
      "#1c245c";
    document.getElementsByClassName("homeNav")[0].style.backgroundColor =
      "#201c1c";
    document.getElementsByClassName("homeNav")[1].style.backgroundColor =
      "#201c1c";
    document.getElementsByClassName("naughty-link2")[0].style.backgroundColor =
      "#201c1c";
  }
  if(!(a.checked)) {
    document
      .getElementById("mainContent")
      .querySelectorAll("div")[0].style.backgroundColor = "#EEEEEE";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelectorAll("strong")[0].style.color = "black";
    document.getElementsByClassName("timingInfo")[0].style.color = "black";
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "white";
    document.getElementsByClassName("brand")[0].style.backgroundColor = "white";
    document.getElementsByClassName("brand")[0].style.color = "black";
    document.getElementsByClassName("inHeading")[0].style.backgroundColor =
      "white";
    document.getElementsByClassName("homeNav")[0].style.backgroundColor =
      "white";
    document.getElementsByClassName("homeNav")[1].style.backgroundColor =
      "white";
    document.getElementsByClassName("naughty-link2")[0].style.backgroundColor =
      "white";
  }
}
// console.log("litedark working");
// func();