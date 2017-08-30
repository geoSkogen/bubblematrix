'use strict'

window.addEventListener('load', initMatrix);

function initMatrix() {
  var ins = document.getElementsByClassName("matrixInput");
  var buts = document.getElementsByClassName("matrixButton");
  var submits = document.getElementsByClassName("submitButton");
  var conts = document.getElementsByClassName("matrixContainer");
  var fields = document.getElementsByClassName("matrixFormField");
  var list = [[]];
  var string = "";
  var test1 = document.getElementById("one")

  function makeBubble(input, index) {
    list[index].push(input)
    var node = document.createTextNode(input);
    var x = document.createTextNode('x');
    var bubble = document.createElement('div');
    var xIt = document.createElement('div');
    var flexEnd = document.createElement('div');
    bubble.className = "bubble";
    xIt.className = "xIt";
    flexEnd.className = "flexOuterEnd";
    xIt.appendChild(x);
    flexEnd.appendChild(xIt);
    bubble.appendChild(flexEnd);
    bubble.appendChild(node);
    conts[index].appendChild(bubble);
    string = list[index].join();
    fields[index].value = string;
    ins[index].value = "";
    xIt.onclick = function () { unmakeBubble(bubble,index,input); };
  }

  function unmakeBubble(elm, index, input) {
    conts[index].removeChild(elm);
    var cutAt = list[index].indexOf(input);
    list[index].splice(cutAt,1);
    string = list[index].join();
    fields[index].value = string;
    ins[index].value = "";
	//fields[index].style.display = "none";
  }

  function getInput(index) {
    if (ins[index].value != "" && ins[index].value != " ") {
      var inputVal = ins[index].value;
      if (inputVal.indexOf(',') == -1) {
        makeBubble(inputVal, index);
      } else {
        var inputArr = inputVal.split(',');
        for (var i = 0; i < inputArr.length; i++) {
          makeBubble(inputArr[i], index);
        }
      }
	  ins[index].focus()
    }
  }

  for (var i = 0; i < buts.length; i++) {
    assignClick(buts[i],i);
  }

  function assignClick(button, index) {
    button.onclick = function () {
      getInput(index);
    }
  }

  for (var i = 0; i < ins.length; i++) {
    assignEnter(ins[i], i);
  }

  function assignEnter(input, index) {
    input.addEventListener("keypress", function () { if (event.keyCode == 13) {getInput(index)}})
  }

  for (var i = 0; i < submits.length; i++) {
	assignSubmit(submits[i], i)
  }
  
  function assignSubmit(button, index) {
	button.onclick = function () {
	  toggleHidden(this, index)
	}
  }
  
  function toggleHidden(button, index) {
	if (fields[index].style.display === "none") {
	  fields[index].style.display = "block"
	  button.innerHTML = "hide<br/>results"
	} else {
	  fields[index].style.display = "none"
	  button.innerHTML = "show<br/>results"
	}
  }
}
