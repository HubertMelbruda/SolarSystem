// Define const elements of the page

// Define function for adding elements to Body element

const bodyElement = document.getElementById('Body');

const exampleFunction = function (arr, content) {
  console.log('a');
  for (i = arr; i < arr.length; i++) {
    let newElement = bodyElement.appendChild(document.createElement("div"));
    newElement.appendChild(document.createTextNode(content));
  }
  console.log('aa');
}

exampleFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "blablablabla");