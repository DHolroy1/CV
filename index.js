// function add() {
//     var element = document.createElement("input");
//     element.setAttribute("type", "button");
//     element.setAttribute("value", "invert");
//     element.setAttribute("name", "button3");
//     element.setAttribute("onclick", "foo()");
//     document.flotta.appendChild(element);
// }
const button = document.createElement('button')
button.innerText = 'Can you click me?'

button.addEventListener('click', () => { alert('Oh, you clicked me!')
})