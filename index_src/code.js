const pageLink0= document.getElementById("page0");
const pageLink1= document.getElementById("page1");
const pageLink2= document.getElementById("page2");
const pageLink3= document.getElementById("page3");
const pageLink4= document.getElementById("page4");
const rightBtn = document.getElementById("rightButton");
const leftBtn = document.getElementById("leftButton");
let offset = 0
let interval = 80;

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
    pageLink0.style.left = (50-interval*offset).toString() +"%";
    pageLink1.style.left = (50-interval*offset+interval).toString() +"%";
    pageLink2.style.left = (50-interval*offset+interval*2).toString() +"%";
    pageLink3.style.left = (50-interval*offset+interval*3).toString() +"%";
    pageLink4.style.left = (50-interval*offset+interval*4).toString() +"%";
    if(offset==0){
        rightBtn.style.opacity = 1;
        leftBtn.style.opacity = 0.2;
    }else if(offset==4){
        leftBtn.style.opacity = 1;
        rightBtn.style.opacity = 0.2;
    }else{
        leftBtn.style.opacity = 1;
        rightBtn.style.opacity = 1;
    }
}

setTimeout(page_link_move, 500);




