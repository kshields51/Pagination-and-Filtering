

const listProfiles = document.getElementsByClassName('student-item');
const mainDiv = document.querySelector('.page')
function appendLinks (list) {
  const allProfiles = list;
  const numberOfButtons = Math.floor(allProfiles.length/10) + 1;
  const div = document.createElement('div');
  div.className = 'pagination';
  mainDiv.appendChild(div);
  const ul = document.createElement('ul');
  ul.id = "pagination-buttons";
  div.appendChild(ul)
  for (var i = 0; i<numberOfButtons; i+=1) {
    const buttonNumber = i + 1;

    function createLi (buttonNumber) {
      const linkButtonText = buttonNumber
      function createElement(elementName, elementAttribute) {//active will be added later
        const element = document.createElement(elementName);
        element[elementAttribute] = "#"
        element.innerHTML = linkButtonText; 
        return element;

      }
      function appendToLi (elementName, elementAttribute) {
        const element = createElement(elementName, elementAttribute);
        li.appendChild(element)
        return element;
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
    if (i >= (page * 10 - 10) && i < (page * 10)) {
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
ul.addEventListener('click', (e) => {
  console.log(e.target);
  showPage(listProfiles, e.target.textContent);
});