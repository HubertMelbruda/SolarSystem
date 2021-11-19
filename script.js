/** 
 * This is a description of actions taken to create this code with links to the MDN docs.
 * 1.  Define ARRAY of OBJECTS with name, src, and text attributes as STRINGS
 *     which will be added to our dynamically created html tags.
 *     https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *     https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 *     https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * 2.  Define body element.
 *     https:developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 * 3.  Define function to create and add dynamic elements.
 *     Function takes "elements" as parameter. This param should be a list of objects.
 *     https:developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * 4.  Use forEach function to iterate on elements of an ARRAY.
 *     https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * 5.  Append first div to body element and assign it to const.
 *     https:developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 *     https:developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 * 6.  Add className for divRow element.
 *     https:developer.mozilla.org/en-US/docs/Web/API/Element/className
 * 7.  Append divImg to the divRow.
 * 8.  Add className for divImg element.
 * 9.  Append img element to divImg.
 * 10. Add className for img element with help of template literal .
 *     https: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * 11. Add src attribute for image.
 *     https: developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src
 * 12. Append divTxt element to divRow.
 * 13. Add className for divTxt.
 * 14. Append text element to divTxt.
 * 15. Append text node to text element.
 *     https: developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
 * 16. Append br element to body after all other elements have been added.
 * 17  Run renderComponents function with ELEMENTS as a paramater.
*/

const ELEMENTS = [
    {
      name: "Sun",
      src: "./img/SUN.jpg",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    },
    {
      name: "Mercury",
      src: "./img/MERCURY.jpg",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      name: "Venus",
      src: "./img/VENUS.jpg",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      name: "Earth",
      src: "./img/EARTH.jpg",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      name: "Mars",
      src: "./img/MARS.jpg",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      name: "Jupiter",
      src: "./img/JUPITER.jpg",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      name: "Saturn",
      src: "./img/SATURN.png",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      name: "Uranus",
      src: "./img/URAN.png",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      name: "Neptune",
      src: "./img/NEPTUNE.png",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
  ]


  const bodyElement = document.getElementById("Body");

  // TODO: write a simillar function to render navigation elements.

  const MENUARRAY = [
    {
      name: "Home",
      adres: "home.html"
    },
    {
      name: "About",
      adres: "about.html",
    },
    {
      name: "Products",
      adres: "products.html",
    },
    {
      name: "Contact",
      adres: "contact.html",
    }
  ]

  const createMenu = function (elements) {
    const ul = bodyElement.appendChild(document.createElement("ul"));
      ul.className = "navigation";
    elements.forEach(function (item) {
        const li = ul.appendChild(document.createElement("li"));
      li.className = "liClassName"
     const text = li.appendChild(document.createElement("a"));
      text.setAttribute('href', document.createTextNode(item.adres));
      text.appendChild(document.createTextNode(item.name));
    });
  }

  createMenu(MENUARRAY);

  const renderMainContent = function (elements) {
    elements.forEach(function (element) {
      const divRow = bodyElement.appendChild(document.createElement("div"));
      divRow.className ="DivRow";
      const divImg = divRow.appendChild(document.createElement("div"));
      divImg.className = "DivImg";
      const img = divImg.appendChild(document.createElement("img"))
      img.className = `Image BorderDiv ${element.name}`;
      img.src = element.src;
      const divTxt = divRow.appendChild(document.createElement("div"));
      divTxt.className = "DivText";
      const text = divTxt.appendChild(document.createElement("p"));
      text.appendChild(document.createTextNode(element.text));
      bodyElement.appendChild(document.createElement("br"));
    });
  }

  renderMainContent(ELEMENTS);
