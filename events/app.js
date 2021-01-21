
p1 = 5;
var p2 = 7;

// the event (here is CLICK) is passed to the function when the event is triggered
document.querySelector('#myBtn2').addEventListener('click', eventVisualizer)
document.querySelector('#myBtn2').addEventListener('click', newColor)

// to pass parameters, declare an unnamed function and us it to pass them
document.getElementById("myBtn").addEventListener("click", function() {
  myFunction(p1, p2);
});

// function declaration may be placed after function usage
function eventVisualizer(e) {
	document.querySelector('#demo2').innerHTML = e.type
    console.log(e.type)
}

function myFunction(a, b) {
  var result = a * b;
  document.getElementById("demo").innerHTML = result;
}

function newColor(e) {
    const color = prompt('Type a color', 'blue')
    e.currentTarget.style.color = color
    if (color == 'yellow') {
        e.currentTarget.style.backgroundColor = 'grey'
    }
}
