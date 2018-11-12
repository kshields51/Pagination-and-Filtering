const listProfiles = document.getElementsByClassName('student-item'); //holds the ul which contains all profiles
const mainDiv = document.querySelector('.page') //selects the div that the page button div is appended to

//this function takes a parameter of an array of profiles and creates the page buttons dynamically
function appendLinks (list) {
  const allProfiles = list; //holds the list parameter so that it can be used
  const numberOfButtons = Math.floor(allProfiles.length/10) + 1; //calculates the number of buttons depending on the total number of profiles in the list
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

//this function calls the createElement function then appends that element to the list that will make a button slot
      function appendToLi (elementName, elementAttribute) { 
        const element = createElement(elementName, elementAttribute); //calls createElement to make the button
        li.appendChild(element); //appends the element to the li
      }
      const li = document.createElement('li'); //creates the li that the appendTo Li function will operate on
      appendToLi('a', 'href'); //calls the appendTo Li function to create and append the buttons
      return(li);
    }
    const li = createLi(buttonNumber); //main function that creates the li's for the buttons
    ul.appendChild(li); //appends the buttons to the ul
}
}
appendLinks(listProfiles); //main function that executes all the other functions

//function that hides li elements when a button is clicked takes the list of profiles and a page number that comes from the button that is clicked as parameters
function showPage (list, page) { 
  for (var i = 0; i<=list.length; i+=1) {//for loop that hides the buttons
    if (i >= (page * 10 - 10) && i < (page * 10) && typeof list[i] !== 'undefined') {//calculates which li's to hide
      list[i].style.display = ''; //unhides an li for a given index

    } else if (typeof list[i] !== 'undefined') { //!== undefined removes a bug present in the code
      list[i].style.display = 'none'; //hides the profile from view
    } else { //breaks out of the for loop when the item is undefined
      break;
    }
  }
}
const ul = document.getElementById('pagination-buttons') //selects the ul that the pagination buttons are inside of
for (var i = 0; i<=listProfiles.length; i+=1) {//when the page loads initially, this for loop makes it so only 10 profiles are shown at once 
  if (i >= (0) && i < (10)) { //calculates the range dynamically depending on what button was pushed
    listProfiles[i].style.display = '';//displays the profile

  } else if ( typeof listProfiles[i] !== 'undefined') {
    listProfiles[i].style.display = 'none';//hides the profile
  }
}
ul.firstElementChild.children[0].className = 'active'//makes the first button have the class of 'active' for the css markup

//this listener ties the showPage functionality to a button click
ul.addEventListener('click', (e) => {
  for (var i = 0; i<ul.children.length; i+=1) { //this for loop removes the class 'active' from all buttons
    ul.children[i].children[0].classList.remove('active'); //does the removing
  };
  ul.children[(Number(e.target.textContent) - 1)].children[0].className = 'active'; //adds the 'active' class to whatever button is pressed
  showPage(listProfiles, e.target.textContent); //runs showPage to change which profiles are seen takes the array of profiles and the number of the button that is pressed
});