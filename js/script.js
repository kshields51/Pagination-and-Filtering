

const listProfiles = document.getElementsByClassName('student-item');
const mainDiv = document.querySelector('.page')
function appendLinks (list) {
  const allProfiles = list;
  const numberOfButtons = Math.floor(allProfiles.length/10) + 1;
  const div = document.createElement('div');
  div.className = 'pagination';
  mainDiv.appendChild(div);  //where would this go
  const ul = document.createElement('ul')
  div.appendChild(ul)//may need if statement bc how does comp know which div to append to
  for (var i = 0; i<numberOfButtons; i+=1) {
    const buttonNumber = i + 1;

    function createLi (buttonNumber) {
      const linkButtonText = buttonNumber
      console.log('im running')
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