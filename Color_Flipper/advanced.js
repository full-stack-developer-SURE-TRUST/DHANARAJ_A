const colors=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function()
{
    let hexColor="#"
    for(var i=0;i<6;i++)
    {
        hexColor = hexColor + colors[getrandN()];
    }

    color.textContent=hexColor;
    document.body.style.background=hexColor;

});

function getrandN()
{
    return Math.floor(Math.random()*colors.length);
}