let leftarrow = document.getElementsByClassName("leftarrowdiv")[0]
let rightarrow = document.getElementsByClassName("rightarrowdiv")[0]
let setone = document.getElementsByClassName("setone")[0]
let settwo = document.getElementsByClassName("settwo")[0]
let setthree = document.getElementsByClassName("setthree")[0]
let divforbgimgandnavbar = document.getElementById("divforbgimgandnavbar")
let l=0,r=0;

leftarrow.addEventListener("click", leftarrowf)
rightarrow.addEventListener("click", rightarrowf)

function leftarrowf() {
    l++;
    if(l==1){
        console.log(l)
        divforbgimgandnavbar.removeAttribute("class")
        divforbgimgandnavbar.setAttribute("class", "bgthree");
        setone.style.display="none"
        setthree.style.display="flex"
        settwo.style.display="none"
    }
    if(l==2){
        console.log(l)
        divforbgimgandnavbar.removeAttribute("class")
        divforbgimgandnavbar.setAttribute("class", "bgtwo");
        setone.style.display="none"
        setthree.style.display="none"
        settwo.style.display="flex"
    }
    if(l==3){
        console.log(l)
        divforbgimgandnavbar.removeAttribute("class")
        divforbgimgandnavbar.setAttribute("class", "bgone");
        setone.style.display="flex"
        setthree.style.display="none"
        settwo.style.display="none"
        l=0
    }
}
        
function rightarrowf(){
    r++;
    if(r==1){
        console.log(r)
        divforbgimgandnavbar.removeAttribute("class")
        divforbgimgandnavbar.setAttribute("class", "bgtwo");
        setone.style.display="none"
        setthree.style.display="none"
        settwo.style.display="flex"
    }
    if(r==2){
        console.log(r)
        divforbgimgandnavbar.removeAttribute("class")
        divforbgimgandnavbar.setAttribute("class", "bgthree");
        setone.style.display="none"
        setthree.style.display="flex"
        settwo.style.display="none"
    }
    if(r==3){
        console.log(r)
        divforbgimgandnavbar.removeAttribute("class")
        divforbgimgandnavbar.setAttribute("class", "bgone");
        setone.style.display="flex"
        setthree.style.display="none"
        settwo.style.display="none"
        r=0
    }
}

// HAMBURGER ICON

let hamburgericondivm=document.getElementsByClassName("hamburgericondivm")[0]
let cancelicondivm=document.getElementsByClassName("cancelicondivm")[0]
let navbarm=document.getElementsByClassName("navbarm")[0]
let overlay=document.getElementsByClassName("overlay")[0]

hamburgericondivm.addEventListener("click",hamburgericonf)
cancelicondivm.addEventListener("click",canceliconf)
overlay.addEventListener("click",overlayf)

function hamburgericonf(){
    navbarm.style.display="flex"
    cancelicondivm.style.display="block"
    overlay.style.display="block"
    hamburgericondivm.style.display="none"
}

function canceliconf(){
    navbarm.style.display="none"
    cancelicondivm.style.display="none"
    overlay.style.display="none"
    hamburgericondivm.style.display="block"
}

function overlayf(){
    navbarm.style.display="none"
    cancelicondivm.style.display="none"
    overlay.style.display="none"
    hamburgericondivm.style.display="block"
}