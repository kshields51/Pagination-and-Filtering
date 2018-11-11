const listProfiles = document.getElementsByClassName('student-item'); //holds the ul which contains all profiles
const mainDiv = document.querySelector('.page') //selects the div that the page button div is appended to
//this function takes a parameter of an array of profiles and creates the page buttons dynamically
function appendLinks (list) {
  const allProfiles = list; //holds the list parameter so that it can be used
  const numberOfButtons = Math.floor(allProfiles.length/10) + 1; //calculates the number of buttons depending on the total number of people in the list
  const div = document.createElement('div'); //creates the div that gets appended to mainDiv
  div.className = 'pagination'; //gives the above div a class name of pagination
  mainDiv.appendChild(div); //appends the pagination div to the main div
  const ul = document.createElement('ul'); //creates the ul that the buttons are appended to
  ul.id = "pagination-buttons"; //gives the ul an id of pagination-buttons
  div.appendChild(ul) //appends the ul containing the buttons to the pagination div
  for (var i = 0; i<numberOfButtons; i+=1) { //for loop to create the buttons each iteration changes the buttons text from 1 to 2 to 3 etc
    const buttonNumber = i + 1;//current number that will go into the button
//this function creates the li that will be appended to the pagination-buttons ul
    function createLi (buttonNumber) {//calls createLI
      const linkButtonText = buttonNumber//creates the text that will go inside the button in this scope
//this function creates the actual buttons and takes 2 parameters with the first being the element name and the second being the element attribute
      function createElement(elementName, elementAttribute) {
        const element = document.createElement(elementName);//creates the initial element
        element[elementAttribute] = "#"; //makes the screen go back to the top of the page when clicked
        element.innerHTML = linkButtonText; //actually places the text into the button
        return element; //returns the element to be used in the appendToLi function
      }
      function appendToLi (elementName, elementAttribute) { //this function calls the createElement function then appends that element to the list that will make a button slot
        const element = createElement(elementName, elementAttribute); //calls createElement to make the button
        li.appendChild(element) //appends the element to the li
        return element; //returns the element This may be able to be removed
      }
      const li = document.createElement('li')
      appendToLi('a', 'href');
      return(li);
    }
    const li = createLi(buttonNumber);
    ul.appendChild(li);
}
}
appendLinks(listProfiles);

function showPage (list, page) {
  for (var i = 0; i<=list.length; i+=1) {
    if (i >= (page * 10 - 10) && i < (page * 10) && typeof list[i] !== 'undefined') {
      list[i].style.display = '';

    } else if (typeof list[i] !== 'undefined') {
      list[i].style.display = 'none';
    } else {
      break;
    }
  }
}
const ul = document.getElementById('pagination-buttons')
for (var i = 0; i<=listProfiles.length; i+=1) {
  if (i >= (0) && i < (10)) {
    listProfiles[i].style.display = '';

  } else if ( typeof listProfiles[i] !== 'undefined') {
    listProfiles[i].style.display = 'none';
  }
}
ul.firstElementChild.children[0].className = 'active'
ul.addEventListener('click', (e) => {
  console.log(e.target.textContent);
  for (var i = 0; i<ul.children.length; i+=1) {
    console.log('hello')
    ul.children[i].children[0].classList.remove('active');
  
  };
  ul.children[(Number(e.target.textContent) - 1)].children[0].className = 'active';
  
  showPage(listProfiles, e.target.textContent);
});