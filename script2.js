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

let x1 = document.querySelector("#sortedContent");

const getData = () => {
    url = "https://kontests.net/api/v1/all";
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //   x[0].href = data[0].url;
            let size = Object.keys(data).length;
            size = Object.keys(data).length;
          console.log(size);
          let k = 0;
          data.sort((a, b) => a.start_time - b.start_time);
            for (let i = 0; i < size; i++) {

              let site_name = data[i].site;
              if (site_name === "CodeForces" || site_name === "TopCoder" || site_name === "AtCoder" || site_name ===
                "CodeChef" || site_name === "HackerRank" || site_name === "HackerEarth" || site_name === "LeetCode") {
                k++;
                const elem = document.createElement("p");
                const anchor = document.createElement("a");
                const elem2 = document.createElement("p");
                const elem3 = document.createElement("p");
                const elem4 = document.createElement("img");
                
                site_name = data[i].site;
                site_name = site_name.toLowerCase();

                let img_name = site_name + "_icon2.png";
                elem4.src = "/images/" + img_name;

                elem2.classList.add("timingInfo");
                elem3.classList.add("timingInfo");
                elem4.classList.add("web_icon2");

                let startingTime = getGoodFormat(data[i].start_time);
                let endingTime = getGoodFormat(data[i].end_time);

                console.log(data[i].name);

                elem2.innerHTML =
                  "<strong>starting time:</strong>" +
                  startingTime +
                  "   <strong>ending time:</strong>" +
                  endingTime +
                  "<hr>" + "<br>";
                // elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>";
                anchor.classList.add("hackerrankLink");
                anchor.textContent = i + 1 + ") " + data[i].name;
                anchor.href = data[i].url;
                elem.appendChild(elem4);
                elem.appendChild(anchor);
                elem.appendChild(elem2);
                // elem.appendChild(elem3);
                // x1.appendChild(elem4);
                x1.appendChild(elem);
                // x1.appendChild(elem2);
                // x1.appendChild(elem3);

                if (k % 2 === 0) {
                  elem.classList.add("darkColor");
                }
                else {
                  elem.classList.add("lightColor");
                }
              }
          }
          console.log("reached here");
          let flag = 0;
          x1 = document.querySelector("#reverseSortedContent");
          for (let i = size - 1; i >= 0; i--) {
            let site_name = data[i].site;
            if (
              site_name === "CodeForces" ||
              site_name === "TopCoder" ||
              site_name === "AtCoder" ||
              site_name === "CodeChef" ||
              site_name === "HackerRank" ||
              site_name === "HackerEarth" ||
              site_name === "LeetCode"
            ) {
              k++;
              const elem = document.createElement("p");
              const anchor = document.createElement("a");
              const elem2 = document.createElement("p");
              const elem3 = document.createElement("p");
              const elem4 = document.createElement("img");

              site_name = data[i].site;
              site_name = site_name.toLowerCase();

              let img_name = site_name + "_icon2.png";
              elem4.src = "/images/" + img_name;

              elem2.classList.add("timingInfo");
              elem3.classList.add("timingInfo");
              elem4.classList.add("web_icon2");

              let startingTime = getGoodFormat(data[i].start_time);
              let endingTime = getGoodFormat(data[i].end_time);

              console.log(data[i].name);

              elem2.innerHTML =
                "<strong>starting time:</strong>" +
                startingTime +
                "   <strong>ending time:</strong>" +
                endingTime + "<br>" + "<br>" +
                "<hr>";
              // elem3.innerHTML = "<strong>ending time:</strong>" + endingTime + "<hr>";
              anchor.classList.add("hackerrankLink");
              anchor.textContent = ++flag + 1 + ") " + data[i].name;
              anchor.href = data[i].url;
              elem.appendChild(elem4);
              elem.appendChild(anchor);
              elem.appendChild(elem2);
              // elem.appendChild(elem3);
              // x1.appendChild(elem4);
              x1.appendChild(elem);
              // x1.appendChild(elem2);
              // x1.appendChild(elem3);

              if (k % 2 === 0) {
                elem.classList.add("darkColor");
              } else {
                elem.classList.add("lightColor");
              }
            }
          }
        });
};

getData();