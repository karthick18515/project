var popupoverlay=document.querySelector(".popup")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("addpopupbutton")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

var cancelpopup=document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitleinput=document.getElementById("booktitleinput")
var bookauthorinput=document.getElementById("bookauthorinput")
var bookdescriptioninput=document.getElementById("bookdescriptioninput")

addbook.addEventListener("click",function(event){
   event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h3>${booktitleinput.value}</h3>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>

            <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



function deletebook(event)
{
    event.target.parentElement.remove()
}