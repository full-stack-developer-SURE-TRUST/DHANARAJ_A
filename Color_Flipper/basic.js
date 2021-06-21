const colors=["RED","BLUE","GREEN","PURPLE","PINK","WHITE"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function(){

    const randN=getrandN();

    document.body.style.background=colors[randN];
    color.textContent=colors[randN];

});

function getrandN(){
    return Math.floor(Math.random()*colors.length);
}