const pageLink0= document.getElementById("page0");
const pageLink1= document.getElementById("page1");
const pageLink2= document.getElementById("page2");
const pageLink3= document.getElementById("page3");
const pageLink4= document.getElementById("page4");
const rightBtn = document.getElementById("rightButton");
const leftBtn = document.getElementById("leftButton");
let offset = 0

rightBtn.addEventListener("click", () => {
    if(offset<4){
       offset +=1;
        page_link_move(); 
    } 
})

leftBtn.addEventListener("click", () => {
    if(offset>0){
       offset -=1;
        page_link_move(); 
    } 
})

function page_link_move(){
    pageLink0.style.transform = "translate(" + (-50-offset*125).toString()  + "%,-50%)";
    pageLink1.style.transform = "translate(" + (75-offset*125).toString()  + "%,-50%)";
    pageLink2.style.transform = "translate(" + (200-offset*125).toString()  + "%,-50%)";
    pageLink3.style.transform = "translate(" + (325-offset*125).toString()  + "%,-50%)";
    pageLink4.style.transform = "translate(" + (450-offset*125).toString()  + "%,-50%)";
}

