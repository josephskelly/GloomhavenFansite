let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        localStorage.setItem('name', '');
        myHeading.textContent = 'Mozilla is cool.';
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}
if(!localStorage.getItem('name')) {

} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}