'use strict'

window.addEventListener("load", Main)

function Main () {
  //DOM elements
 var app = document.getElementById("app")
 var callresponse = document.getElementById("callresponse")
 var go = document.getElementById("go")

 var postsText = new Array()
 var posts = new Array()



 go.addEventListener("click", addContent)
 callresponse.addEventListener("keypress", function () {
   if (event.keyCode === 13) {
     go.click()
   }
 })
 callresponse.focus()

 function addContent () {
   if (callresponse.value != "") {
     var text = callresponse.value
     var newPost = makeAPost(text, text)
     postsText.push(text)
     app.appendChild(newPost)
     document.getElementById("one").innerHTML = postsText
   }
 }

  function makeAPost (idStr, contentStr) {
   var tnode = document.createTextNode(contentStr)
   var div = document.createElement('div')
   div.className = "post"
   div.appendChild(tnode)
   div.id = idStr
   div.addEventListener('click', function () {
     var content = this.textContent
     var index = postsText.indexOf(content)
     if (!this.childNodes[1]) {
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
       })
     this.replaceChild(anInput, this.childNodes[0])
     anInput.focus()
     anInput.addEventListener("keypress", function () {
       if (event.keyCode === 13) {
         var editedText = this.value
         var replaceMe = this
         var newPost = document.createTextNode(editedText)
         var parent = this.parentNode

         parent.replaceChild(newPost, replaceMe)
         parent.removeChild(parent.childNodes[0])
         document.getElementById("two").innerHTML = postsText
       }
     })
     this.insertBefore(xout, anInput)
     xout.appendChild(x)
     }
  })
   return div
 }

}
