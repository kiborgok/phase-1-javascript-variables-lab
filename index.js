const companyName = "Scuber";

let mostProfitableNeighborhood = "Chelsea";

let companyCeo = "Susan Smith";

const mochaTests = document.getElementById("mocha");

fetch("./results.json")
  .then((res) => res.json())
    .then((res) => {
      res.tests.forEach((test) => {
          const titleNode = document.createElement("h1");
          const fullTitleNode = document.createElement("h2");
          const titleTextNode = document.createTextNode(`${test.title}`);
          const fullTitleTextNode = document.createTextNode(`${test.fullTitle}`);
          titleNode.appendChild(titleTextNode);
          fullTitleNode.appendChild(fullTitleTextNode);
          mochaTests.appendChild(titleNode);
          mochaTests.appendChild(fullTitleNode);
    });
  });
