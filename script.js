// let x = document.getElementsByClassName("hackerrankLink");
let leetCodeElements = [];
let codeForcesElements = [];
let codeChefElements = [];
let topCoderElements = [];
let atCoderElements = [];
let hackerrankElements = [];
let hackerEarthElements = [];

const getGoodFormat = (dates) => {
  // let d = new Date("2022-04-24T13:30:00.000Z");
  let d = new Date(dates);
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  let hours = d.getUTCHours();
  let minutes = d.getUTCMinutes();
  let seconds = d.getSeconds();
  let am_pm = "AM";
  if (hours > 12) {
    hours = hours - 12;
    am_pm = "PM";
  }

  let good_format =
    month +
    "/" +
    day +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    "00" +
    " " +
    am_pm +
    " " +
    "UTC";
  // console.log(good_format);

  // console.log("6/29/2011 4:52:48 PM UTC");

  // console.log(typeof "6/29/2011 4:52:48 PM UTC");
  // console.log(typeof good_format);

  let date = new Date(good_format);
  date.toString();
  // console.log(date);
  // console.log(d.getUTCHours() + ":" + d.getUTCMinutes()); // Hours
  // console.log();
  // console.log(d.getUTCSeconds());
  // console.log(d.getDate() + "/" + month + "/" + d.getFullYear());
  // console.log(d.getMonth() + 1);
  // console.log(d.getFullYear());
  return date;
};

const getData = () => {
  url = "https://kontests.net/api/v1/all";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   x[0].href = data[0].url;
      let size = Object.keys(data).length;
      //   console.log(size);
      for (let i = 0; i < size; i++) {
        if (data[i].site == "LeetCode") leetCodeElements.push(data[i]);
        else if (data[i].site == "CodeForces") codeForcesElements.push(data[i]);
        else if (data[i].site == "CodeChef") codeChefElements.push(data[i]);
        else if (data[i].site == "TopCoder") topCoderElements.push(data[i]);
        else if (data[i].site == "AtCoder") atCoderElements.push(data[i]);
        else if (data[i].site == "HackerRank") hackerrankElements.push(data[i]);
        else if (data[i].site === "HackerEarth")
          hackerEarthElements.push(data[i]);
        // console.log(data[i].name + "\n");
      }
      size = Object.keys(hackerrankElements).length;
      // console.log(size);
      let x1 = document.querySelector("#hackerRankBox");
      for (let i = 0; i < size; i++) {
        const elem = document.createElement("p");
        const anchor = document.createElement("a");
        const elem2 = document.createElement("p");
        const elem3 = document.createElement("p");
        elem2.classList.add("timingInfo");
        elem3.classList.add("timingInfo");

        let startingTime = getGoodFormat(hackerrankElements[i].start_time);
        let endingTime = getGoodFormat(hackerrankElements[i].end_time);

        elem2.innerHTML = "<br>" + "<strong>starting time:</strong>" + startingTime + "<br>";
        elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>" + "<br>";
        anchor.classList.add("hackerrankLink");
        anchor.textContent = i + 1 + ") " + hackerrankElements[i].name;
        anchor.href = hackerrankElements[i].url;
        elem.appendChild(anchor);
        x1.appendChild(elem);
        x1.appendChild(elem2);
        x1.appendChild(elem3);
      }

      size = Object.keys(hackerEarthElements).length;
      console.log(size);
      x1 = document.querySelector("#hackerEarthBox");
      for (let i = 0; i < size; i++) {
        const elem = document.createElement("p");
        const anchor = document.createElement("a");

        const elem2 = document.createElement("p");
        const elem3 = document.createElement("p");
        elem2.classList.add("timingInfo");
        elem3.classList.add("timingInfo");

        let startingTime = getGoodFormat(hackerEarthElements[i].start_time);
        let endingTime = getGoodFormat(hackerEarthElements[i].end_time);

        elem2.innerHTML = "<br>" + "<strong>starting time:</strong>" + startingTime + "<br>";
        elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>" + "<br>";

        anchor.classList.add("hackerEarthLink");
        anchor.textContent = i + 1 + ") " + hackerEarthElements[i].name;
        anchor.href = hackerEarthElements[i].url;
        elem.appendChild(anchor);
        x1.appendChild(elem);
        x1.appendChild(elem2);
        x1.appendChild(elem3);
      }
      size = Object.keys(leetCodeElements).length;
      x1 = document.querySelector("#leetCodeBox");
      for (let i = 0; i < size; i++) {
        const elem = document.createElement("p");
        const anchor = document.createElement("a");

        const elem2 = document.createElement("p");
        const elem3 = document.createElement("p");
        elem2.classList.add("timingInfo");
        elem3.classList.add("timingInfo");

        let startingTime = getGoodFormat(leetCodeElements[i].start_time);
        let endingTime = getGoodFormat(leetCodeElements[i].end_time);

        elem2.innerHTML = "<br>" + "<strong>starting time:</strong>" + startingTime + "<br>";
        elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>" + "<br>";

        anchor.classList.add("leetCodeLink");
        anchor.textContent = i + 1 + ") " + leetCodeElements[i].name;
        anchor.href = leetCodeElements[i].url;
        elem.appendChild(anchor);
        x1.appendChild(elem);
        x1.appendChild(elem2);
        x1.appendChild(elem3);
      }
      size = Object.keys(codeForcesElements).length;
      x1 = document.querySelector("#codeForcesBox");
      for (let i = 0; i < size; i++) {
        const elem = document.createElement("p");
        const anchor = document.createElement("a");

        const elem2 = document.createElement("p");
        const elem3 = document.createElement("p");
        elem2.classList.add("timingInfo");
        elem3.classList.add("timingInfo");

        let startingTime = getGoodFormat(codeForcesElements[i].start_time);
        let endingTime = getGoodFormat(codeForcesElements[i].end_time);

        elem2.innerHTML = "<br>" + "<strong>starting time:</strong>" + startingTime + "<br>";
        elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>" + "<br>";

        anchor.classList.add("codeForcesLink");
        anchor.textContent = i + 1 + ") " + codeForcesElements[i].name;
        anchor.href = codeForcesElements[i].url;
        elem.appendChild(anchor);
        x1.appendChild(elem);
        x1.appendChild(elem2);
        x1.appendChild(elem3);
      }
      size = Object.keys(codeChefElements).length;
      x1 = document.querySelector("#codeChefBox");
      for (let i = 0; i < size; i++) {
        const elem = document.createElement("p");
        const anchor = document.createElement("a");

        const elem2 = document.createElement("p");
        const elem3 = document.createElement("p");
        elem2.classList.add("timingInfo");
        elem3.classList.add("timingInfo");

        let startingTime = getGoodFormat(codeChefElements[i].start_time);
        let endingTime = getGoodFormat(codeChefElements[i].end_time);

        elem2.innerHTML = "<br>" + "<strong>starting time:</strong>" + startingTime + "<br>";
        elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>" + "<br>";

        anchor.classList.add("codeChefLink");
        anchor.textContent = i + 1 + ") " + codeChefElements[i].name;
        anchor.href = codeChefElements[i].url;
        elem.appendChild(anchor);
        x1.appendChild(elem);
        x1.appendChild(elem2);
        x1.appendChild(elem3);
      }
      size = Object.keys(topCoderElements).length;
      x1 = document.querySelector("#topCoderBox");
      for (let i = 0; i < size; i++) {
        const elem = document.createElement("p");
        const anchor = document.createElement("a");

        const elem2 = document.createElement("p");
        const elem3 = document.createElement("p");
        elem2.classList.add("timingInfo");
        elem3.classList.add("timingInfo");

        let startingTime = getGoodFormat(topCoderElements[i].start_time);
        let endingTime = getGoodFormat(topCoderElements[i].end_time);

        elem2.innerHTML = "<br>" + "<strong>starting time:</strong>" + startingTime + "<br>";
        elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>" + "<br>";

        anchor.classList.add("topCoderLink");
        anchor.textContent = i + 1 + ") " + topCoderElements[i].name;
        anchor.href = topCoderElements[i].url;
        elem.appendChild(anchor);
        x1.appendChild(elem);
        x1.appendChild(elem2);
        x1.appendChild(elem3);
      }
      size = Object.keys(atCoderElements).length;
      x1 = document.querySelector("#atCoderBox");
      for (let i = 0; i < size; i++) {
        const elem = document.createElement("p");
        const anchor = document.createElement("a");

        const elem2 = document.createElement("p");
        const elem3 = document.createElement("p");
        elem2.classList.add("timingInfo");
        elem3.classList.add("timingInfo");

        let startingTime = getGoodFormat(atCoderElements[i].start_time);
        let endingTime = getGoodFormat(atCoderElements[i].end_time);

        elem2.innerHTML = "<br>" + "<strong>starting time:</strong>" + startingTime + "<br>";
        elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>" + "<br>";

        anchor.classList.add("atCoderLink");
        anchor.textContent = i + 1 + ") " + atCoderElements[i].name;
        anchor.href = atCoderElements[i].url;
        elem.appendChild(anchor);
        x1.appendChild(elem);
        x1.appendChild(elem2);
        x1.appendChild(elem3);
      }
      // console.log(Object.keys(hackerrankElements) + "\n");

      // for (let i = 0; i < Object.keys(hackerrankElements).length; i++) {
      //   console.log(hackerrankElements[i].name + "\n");
      //  }
      // console.log(hackerrankElements);
      // console.log(hackerrankElements[0].name + "\n");
      // console.log(hackerrankElements[1].name + "\n");
    });
};

getData();
