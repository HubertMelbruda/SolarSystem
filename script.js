const bodyElement = document.getElementById('Body');

const elements = [
  {
    name: "Sun",
    src: "./img/SUN.jpg",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
  {
    name: "Mercury",
    src: "./img/MERCURY.jpg",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
  {
    name: "Venus",
    src: "./img/VENUS.jpg",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
  {
    name: "Earth",
    src: "./img/EARTH.jpg",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
  {
    name: "Mars",
    src: "./img/MARS.jpg",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
  {
    name: "Jupiter",
    src: "./img/JUPITER.jpg",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
  {
    name: "Saturn",
    src: "./img/SATURN.png",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
  {
    name: "Uranus",
    src: "./img/URAN.png",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
  {
    name: "Neptune",
    src: "./img/NEPTUNE.png",
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
  },
]

const exampleFunction = function (elements) {
  elements.forEach(function (element) {
    const divRow = bodyElement.appendChild(document.createElement("div"));
    divRow.className = "DivRow";
    const divImg = divRow.appendChild(document.createElement("div"));
    divImg.className = "DivImg";
    const img = divImg.appendChild(document.createElement("img"))
    img.className = `Image BorderDiv ${element.name}`;
    img.src = element.src;
    const divTxt = divRow.appendChild(document.createElement("div"));
    divTxt.className = 'DivText';
    const text = divTxt.appendChild(document.createElement("p"));
    text.appendChild(document.createTextNode(element.text));
    bodyElement.appendChild(document.createElement("br"));
  });
}

exampleFunction(elements);