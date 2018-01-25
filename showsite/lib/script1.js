'use strict'

window.addEventListener("load", Main)

function Main () {
  //DOM elements
 var app = document.getElementById("app")
 var input1 = document.getElementById("callresponse")
 var go = document.getElementById("go")
 
 var postsText = new Array
 
 
 go.addEventListener("click", addContent)
 
 function addContent () {
   var text = callresponse.value
   var newPost = makeAPost(text, text)
   var postsText.push(text)
   app.appendChild(newPost)
  
 }
 
  function makeAPost (idStr, contentStr) {
   var tnode = document.createTextNode(contentStr)
   var div = document.createElement('div') 
   postsText.push(contentStr)
   div.className = "post"
   div.appendChild(tnode)
   div.id = idStr
   div.isInput = false
   document.getElementById("one").innerHTML = postsText.length
   
   
   div.addEventListener('click', function () { 
     if (this.isInput === false) {
     var content = this.textContent
     var index = posts.indexOf(content)
     var anInput = document.createElement('input')
     var xout = document.createElement('div') 
     var x = document.createElement('div')
     var xtext = document.createTextNode("X")
     anInput.className = "anInput" 
     anInput.value = content
     xout.className = "xout"
     x.className = "x"
     x.appendChild(xtext)
     x.addEventListener('click', function () {
        var parent = this.parentNode.parentNode.parentNode 
        var removeMe = this.parentNode.parentNode
        var posts = document.getElementsByClassName("post")
        var report = this.parentNode.nextSibling.className
        postsText.splice(index,1)
        parent.removeChild(removeMe)
        document.getElementById("one").innerHTML = postsText.length
     })
     
     this.replaceChild(anInput, this.childNodes[0])
     anInput.focus()
     this.insertBefore(xout, anInput)
     xout.appendChild(x)
     this.isInput = true
     }
  })
   return div
 }

}