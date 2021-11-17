// define ARRAY of OBJECTS with name, src, and text attributes as STRINGS
// which will be added to our dynamically created html tags
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
const ELEMENTS = [
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

// define body element
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const bodyElement = document.getElementById('Body');

// define function to create and add dynamic elements
// function takes 'elements' as parameter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
const exampleFunction = function (elements) {
  // use forEach function to iterate on elements of an ARRAY 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  elements.forEach(function (element) {
    // append first div to body element and assign it to const 
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    const divRow = bodyElement.appendChild(document.createElement("div"));
    // add className for divRow element
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/className
    divRow.className = "DivRow";
    // append divImg to the divRow
    const divImg = divRow.appendChild(document.createElement("div"));
    // add className for divImg element
    divImg.className = "DivImg";
    // append img element to divImg
    const img = divImg.appendChild(document.createElement("img"))
    // add className for img element with help of template literal 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    img.className = `Image BorderDiv ${element.name}`;
    // add src attribute for image
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src
    img.src = element.src;
    // append divTxt element to divRow
    const divTxt = divRow.appendChild(document.createElement("div"));
    // add className for divTxt
    divTxt.className = 'DivText';
    // append text element to divTxt
    const text = divTxt.appendChild(document.createElement("p"));
    // append text node to text element
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
    text.appendChild(document.createTextNode(element.text));
    // append br element to body after all other elements have been added
    bodyElement.appendChild(document.createElement("br"));
  });
}

// run function with elements as paramater
exampleFunction(ELEMENTS);