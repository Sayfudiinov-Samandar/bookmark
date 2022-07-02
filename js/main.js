//html dagi claslarni var ozgaruvchiga o'zlashtirish
var elListBox=document.querySelectorAll(".feature-list__inner");
var elListLink=document.querySelectorAll(".feature-list__text")
var elListBg = document.querySelectorAll(".feature-rigt-active")
//
elListLink.forEach(function(links){

    links.addEventListener("click",function(evt){
        evt.preventDefault();
        
        
        elListBox.forEach(function(box){
            box.classList.remove("feature-list__inner--active")
        })

        links.parentElement.classList.add("feature-list__inner--active")
        
        elListBg.forEach(function(boxShow){
            boxShow.classList.remove("feature-show")
        })
        document.querySelector(links.getAttribute("href")).classList.add("feature-show")
    })

})